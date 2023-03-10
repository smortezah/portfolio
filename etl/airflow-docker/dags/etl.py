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
