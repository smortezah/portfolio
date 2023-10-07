---
title: ETL pipeline
tags: [AirFlow, Docker, ETL, PostgreSQL, Data Engineering]
---

# Fastest way to implement an ETL pipeline

In the world of data engineering, Extract, Transform, Load (ETL) pipelines are crucial for collecting, cleaning, and moving data from various sources to a target destination. ETL pipelines are also used to integrate different data sources and systems.

In this article, we will discuss how to implement an ETL pipeline using Airflow&trade; and Docker Compose.

## What is Airflow&trade;?

[Airflow&trade;](https://airflow.apache.org/) is an open-source platform used for creating, scheduling, and monitoring workflows. It is commonly used in data engineering, data science, and machine learning to create and manage complex data pipelines.

Airflow&trade; allows users to define their workflows as directed acyclic graphs (DAGs), where each node represents a task and the edges represent the dependencies between tasks. These DAGs can be scheduled to run at specific times or triggered by certain events, and Airflow&trade; provides a rich set of features to manage these workflows, including task retries, email notifications, and integrations with various external systems.

Airflow&trade; has become popular in the data engineering and data science communities due to its flexibility, scalability, and extensibility. It has a large and active community that has created a wide range of plugins and integrations with other tools and systems.

## What is Docker Compose?

[Docker Compose](https://docs.docker.com/compose/) is a tool that enables developers to define and run multi-container Docker applications. It simplifies the process of managing multiple containers by providing a unified interface to start, stop, and manage all of the containers in an application. With Docker Compose, developers can define their application’s services, networks, and volumes in a [YAML](https://yaml.org/) file and use the Docker Compose CLI to start and stop the application.

Docker Compose is particularly useful for microservices architectures, where multiple containers are used to build a single application. It allows developers to define environment variables, set up dependencies between containers, and manage networking between the containers. By using Docker Compose, developers can easily develop, test, and deploy complex applications that require multiple containers, and the tool can also be used to automate the deployment of applications to production environments. Overall, Docker Compose is a powerful and popular tool in the DevOps community, providing a streamlined way to manage multi-container Docker applications.

## How to implement an ETL Pipeline?

To implement an ETL pipeline using Airflow&trade; and Docker Compose, we will follow the steps below:

### Step 1: Define the Docker Compose file

The first step is to define the Docker Compose file, which defines the services that will be used in the ETL pipeline. The fastest way of doing this is to download the [official file](https://airflow.apache.org/docs/apache-airflow/2.5.1/docker-compose.yaml) (version 2.5.1).

Now, create a new directory etl and download the Docker Compose file into this directory:

```bash title="Shell"
mkdir etl;
cd etl;

curl -LfO 'https://airflow.apache.org/docs/apache-airflow/2.5.1/docker-compose.yaml'
```

Here is the contents of the `docker-compose.yaml` file we just downloaded:

```YAML title="YAML"
version: '3'
x-airflow-common:
  &airflow-common
  # In order to add custom dependencies or upgrade provider packages you can use your extended image.
  # Comment the image line, place your Dockerfile in the directory where you placed the docker-compose.yaml
  # and uncomment the "build" line below, Then run `docker-compose build` to build the images.
  image: ${AIRFLOW_IMAGE_NAME:-apache/airflow:2.5.1}
  # build: .
  environment:
    &airflow-common-env
    AIRFLOW__CORE__EXECUTOR: CeleryExecutor
    AIRFLOW__DATABASE__SQL_ALCHEMY_CONN: postgresql+psycopg2://airflow:airflow@postgres/airflow
    # For backward compatibility, with Airflow <2.3
    AIRFLOW__CORE__SQL_ALCHEMY_CONN: postgresql+psycopg2://airflow:airflow@postgres/airflow
    AIRFLOW__CELERY__RESULT_BACKEND: db+postgresql://airflow:airflow@postgres/airflow
    AIRFLOW__CELERY__BROKER_URL: redis://:@redis:6379/0
    AIRFLOW__CORE__FERNET_KEY: ''
    AIRFLOW__CORE__DAGS_ARE_PAUSED_AT_CREATION: 'true'
    AIRFLOW__CORE__LOAD_EXAMPLES: 'true'
    AIRFLOW__API__AUTH_BACKENDS: 'airflow.api.auth.backend.basic_auth,airflow.api.auth.backend.session'
    _PIP_ADDITIONAL_REQUIREMENTS: ${_PIP_ADDITIONAL_REQUIREMENTS:-}
  volumes:
    - ${AIRFLOW_PROJ_DIR:-.}/dags:/opt/airflow/dags
    - ${AIRFLOW_PROJ_DIR:-.}/logs:/opt/airflow/logs
    - ${AIRFLOW_PROJ_DIR:-.}/plugins:/opt/airflow/plugins
  user: "${AIRFLOW_UID:-50000}:0"
  depends_on:
    &airflow-common-depends-on
    redis:
      condition: service_healthy
    postgres:
      condition: service_healthy

services:
  postgres:
    image: postgres:13
    environment:
      POSTGRES_USER: airflow
      POSTGRES_PASSWORD: airflow
      POSTGRES_DB: airflow
    volumes:
      - postgres-db-volume:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD", "pg_isready", "-U", "airflow"]
      interval: 5s
      retries: 5
    restart: always

  redis:
    image: redis:latest
    expose:
      - 6379
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 5s
      timeout: 30s
      retries: 50
    restart: always

  airflow-webserver:
    <<: *airflow-common
    command: webserver
    ports:
      - 8080:8080
    healthcheck:
      test: ["CMD", "curl", "--fail", "http://localhost:8080/health"]
      interval: 10s
      timeout: 10s
      retries: 5
    restart: always
    depends_on:
      <<: *airflow-common-depends-on
      airflow-init:
        condition: service_completed_successfully

  airflow-scheduler:
    <<: *airflow-common
    command: scheduler
    healthcheck:
      test: ["CMD-SHELL", 'airflow jobs check --job-type SchedulerJob --hostname "$${HOSTNAME}"']
      interval: 10s
      timeout: 10s
      retries: 5
    restart: always
    depends_on:
      <<: *airflow-common-depends-on
      airflow-init:
        condition: service_completed_successfully

  airflow-worker:
    <<: *airflow-common
    command: celery worker
    healthcheck:
      test:
        - "CMD-SHELL"
        - 'celery --app airflow.executors.celery_executor.app inspect ping -d "celery@$${HOSTNAME}"'
      interval: 10s
      timeout: 10s
      retries: 5
    environment:
      <<: *airflow-common-env
      # Required to handle warm shutdown of the celery workers properly
      # See https://airflow.apache.org/docs/docker-stack/entrypoint.html#signal-propagation
      DUMB_INIT_SETSID: "0"
    restart: always
    depends_on:
      <<: *airflow-common-depends-on
      airflow-init:
        condition: service_completed_successfully

  airflow-triggerer:
    <<: *airflow-common
    command: triggerer
    healthcheck:
      test: ["CMD-SHELL", 'airflow jobs check --job-type TriggererJob --hostname "$${HOSTNAME}"']
      interval: 10s
      timeout: 10s
      retries: 5
    restart: always
    depends_on:
      <<: *airflow-common-depends-on
      airflow-init:
        condition: service_completed_successfully

  airflow-init:
    <<: *airflow-common
    entrypoint: /bin/bash
    # yamllint disable rule:line-length
    command:
      - -c
      - |
        function ver() {
          printf "%04d%04d%04d%04d" $${1//./ }
        }
        airflow_version=$$(AIRFLOW__LOGGING__LOGGING_LEVEL=INFO && gosu airflow airflow version)
        airflow_version_comparable=$$(ver $${airflow_version})
        min_airflow_version=2.2.0
        min_airflow_version_comparable=$$(ver $${min_airflow_version})
        if (( airflow_version_comparable < min_airflow_version_comparable )); then
          echo
          echo -e "\033[1;31mERROR!!!: Too old Airflow version $${airflow_version}!\e[0m"
          echo "The minimum Airflow version supported: $${min_airflow_version}. Only use this or higher!"
          echo
          exit 1
        fi
        if [[ -z "${AIRFLOW_UID}" ]]; then
          echo
          echo -e "\033[1;33mWARNING!!!: AIRFLOW_UID not set!\e[0m"
          echo "If you are on Linux, you SHOULD follow the instructions below to set "
          echo "AIRFLOW_UID environment variable, otherwise files will be owned by root."
          echo "For other operating systems you can get rid of the warning with manually created .env file:"
          echo "    See: https://airflow.apache.org/docs/apache-airflow/stable/howto/docker-compose/index.html#setting-the-right-airflow-user"
          echo
        fi
        one_meg=1048576
        mem_available=$$(($$(getconf _PHYS_PAGES) * $$(getconf PAGE_SIZE) / one_meg))
        cpus_available=$$(grep -cE 'cpu[0-9]+' /proc/stat)
        disk_available=$$(df / | tail -1 | awk '{print $$4}')
        warning_resources="false"
        if (( mem_available < 4000 )) ; then
          echo
          echo -e "\033[1;33mWARNING!!!: Not enough memory available for Docker.\e[0m"
          echo "At least 4GB of memory required. You have $$(numfmt --to iec $$((mem_available * one_meg)))"
          echo
          warning_resources="true"
        fi
        if (( cpus_available < 2 )); then
          echo
          echo -e "\033[1;33mWARNING!!!: Not enough CPUS available for Docker.\e[0m"
          echo "At least 2 CPUs recommended. You have $${cpus_available}"
          echo
          warning_resources="true"
        fi
        if (( disk_available < one_meg * 10 )); then
          echo
          echo -e "\033[1;33mWARNING!!!: Not enough Disk space available for Docker.\e[0m"
          echo "At least 10 GBs recommended. You have $$(numfmt --to iec $$((disk_available * 1024 )))"
          echo
          warning_resources="true"
        fi
        if [[ $${warning_resources} == "true" ]]; then
          echo
          echo -e "\033[1;33mWARNING!!!: You have not enough resources to run Airflow (see above)!\e[0m"
          echo "Please follow the instructions to increase amount of resources available:"
          echo "   https://airflow.apache.org/docs/apache-airflow/stable/howto/docker-compose/index.html#before-you-begin"
          echo
        fi
        mkdir -p /sources/logs /sources/dags /sources/plugins
        chown -R "${AIRFLOW_UID}:0" /sources/{logs,dags,plugins}
        exec /entrypoint airflow version
    # yamllint enable rule:line-length
    environment:
      <<: *airflow-common-env
      _AIRFLOW_DB_UPGRADE: 'true'
      _AIRFLOW_WWW_USER_CREATE: 'true'
      _AIRFLOW_WWW_USER_USERNAME: ${_AIRFLOW_WWW_USER_USERNAME:-airflow}
      _AIRFLOW_WWW_USER_PASSWORD: ${_AIRFLOW_WWW_USER_PASSWORD:-airflow}
      _PIP_ADDITIONAL_REQUIREMENTS: ''
    user: "0:0"
    volumes:
      - ${AIRFLOW_PROJ_DIR:-.}:/sources

  airflow-cli:
    <<: *airflow-common
    profiles:
      - debug
    environment:
      <<: *airflow-common-env
      CONNECTION_CHECK_MAX_COUNT: "0"
    # Workaround for entrypoint issue. See: https://github.com/apache/airflow/issues/16252
    command:
      - bash
      - -c
      - airflow

  # You can enable flower by adding "--profile flower" option e.g. docker-compose --profile flower up
  # or by explicitly targeted on the command line e.g. docker-compose up flower.
  # See: https://docs.docker.com/compose/profiles/
  flower:
    <<: *airflow-common
    command: celery flower
    profiles:
      - flower
    ports:
      - 5555:5555
    healthcheck:
      test: ["CMD", "curl", "--fail", "http://localhost:5555/"]
      interval: 10s
      timeout: 10s
      retries: 5
    restart: always
    depends_on:
      <<: *airflow-common-depends-on
      airflow-init:
        condition: service_completed_successfully

volumes:
  postgres-db-volume:
```

The most important services defined in this file are:

- `airflow-webserver`, that provides a web interface for managing workflows (Airflow&trade; DAGs), and is available at http://localhost:8080,
- `airflow-scheduler`, that is responsible for scheduling and running Airflow&trade; tasks,
- `airflow-worker`, which executes the tasks given by the scheduler, and
- `postgres`, that is the PostgreSQL database service for storing the Airflow&trade; metadata and also our dataset. It creates a database named `airflow`.

In summary, this docker-compose file defines the necessary services to run an Airflow&trade; cluster with CeleryExecutor, and PostgreSQL. The services are configured with health checks to ensure they are running correctly.

### Step 2: Define the Airflow&trade; DAG

The second step is to define the Airflow&trade; DAG, which defines the tasks that make up the ETL pipeline. In our case, we will define a DAG that performs the following tasks:

- Extract data from a CSV file, that is publicly available at https://stats.govt.nz.
- Transform the data by selecting a few features of it, i.e., `Data_value` and `STATUS`.
- Load the transformed data into the table `data` in the PostgreSQL database `airflow`.

To do so, create the sub-directory `dags` inside the `etl` directory we created earlier, and also create `etl.py` that will include the DAG.

```bash title="Shell"
mkdir dags;
cd dags;

touch etl.py
```

Then, paste the following self-explanatory code into `etl.py`:

```python title="Python" showLineNumbers
import pandas as pd
import pendulum
from airflow.decorators import dag, task
import sqlalchemy

# sqlalchemy engine to connect to postgres
engine = sqlalchemy.create_engine("postgresql://airflow:airflow@postgres:5432")


@task()
def extract():
    """Download data and save it to a file."""
    df = pd.read_csv(
        "https://stats.govt.nz/assets/Uploads/Business-financial-data/"
        "Business-financial-data-September-2022-quarter/Download-data/"
        "business-financial-data-september-2022-quarter-csv.zip"
    )
    extracted_path = "raw_data.csv"
    df.to_csv(extracted_path, index=False)
    return extracted_path


@task()
def transform(path):
    """Transform data and save it to a file."""
    df = pd.read_csv(path)
    df = df[["Data_value", "STATUS"]]
    transformed_path = "data.csv"
    df.to_csv(transformed_path, index=False)
    return transformed_path


@task()
def load(path):
    """Load data into a database."""
    df = pd.read_csv(path)
    table_name = "data"
    df.to_sql(table_name, con=engine, if_exists="replace", index=False)

    # Query the data to check it was loaded correctly
    with engine.connect() as connection:
        query = f"SELECT * FROM {table_name} LIMIT 3"
        print("Data:", connection.execute(query).fetchall())


@dag(
    dag_id="etl_pipeline",
    start_date=pendulum.datetime(2023, 3, 10, tz="UTC"),
)
def pipeline():
    extracted_file = extract()
    transformed_file = transform(extracted_file)
    load(transformed_file)


etl_pipeline = pipeline()
```

### Step 3: Build and start the Docker containers

The final step is to build and start the Docker containers. To do this, navigate to the directory containing the Docker Compose file, i.e., `etl`, and run the following command:

```bash title="Shell"
cd ..;  # navigate to 'etl', if you're already in the 'dags' directory

docker compose up -d
```

This command will start the services defined in the `docker-compose.yaml` and let them run in the background, using `-d` option. Note that, this command will create the following sub-directories in `etl` if they don’t already exist:

- `./dags`, to hold the DAG files,
- `./logs`, that contains logs from task execution and scheduler, and
- `./plugins`, that can hold [custom plugins](https://airflow.apache.org/docs/apache-airflow/stable/authoring-and-scheduling/plugins.html).

Once the containers are up and running, you can access the Airflow&trade; webserver by navigating to http://localhost:8080 in your web browser and inserting `airflow` as Username and Password. From there, you can run the DAG.

## Conclusion

In this article, we have shown how to implement an ETL pipeline using Airflow&trade; and Docker Compose. With these tools, you can easily create and manage complex workflows that extract, transform, and load data from various sources. By using Docker Compose, you can easily deploy your ETL pipeline to different environments, such as cloud infrastructure, making it highly scalable and portable.
