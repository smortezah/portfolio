# ETL pipeline with Airflow

This repository includes implementation of an ETL pipeline with Airflow and Docker.

Links: [Medium article](https://morihosseini.medium.com/fastest-way-of-implementing-an-etl-pipeline-3e87351265b5)

## Requirements

Install and run [Docker](https://www.docker.com/).

## Usage

Run the following to start microservices including Airflow and PostgreSQL:

```bash
docker compose up -d
```

Then, go to http://localhost:8080/ to access the Airflow UI.

![airflow](media/airflow.gif)

## DAGs

The following DAGs are included in this repository:

- [`etl_pipeline`](dags/etl.py): downlaods a publicly available CSV file from [stats.govt.nz](stats.govt.nz), transforms it by selecting a few features of the dataset, and loads the transformed data into a PostgreSQL database.
