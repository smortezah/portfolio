# ETL pipeline with Airflow

This repository includes implementation of an ETL pipeline with Airflow and Docker. The pipeline is used to automatize the process of extracting data from various sources, transforming them, and loading the transformed data into a PostgreSQL database.

Links: [Medium article](https://medium.com/@morihosseini/)

## Installation

Install and run [Docker](https://www.docker.com/).

## Usage

Run the following to start Airflow and Postgres containers.

```bash
docker compose up
```

Then, go to http://localhost:8080/ to access the Airflow UI.

### DAGs

The following DAGs are included in this repository:

- [`etl_pipeline`](dags/etl.py): downlaods a publicly available CSV file from [stats.govt.nz](stats.govt.nz), transforms it by selecting a few features of the dataset, and loads the transformed data into a PostgreSQL database.
