import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.engine import URL

# load_dotenv()
USERNAME = os.getenv("USERNAME")
DB_HOST = os.getenv("DB_HOST")
DB_NAME = os.getenv("DB_NAME")
PASSWORD = os.getenv("PASSWORD")


url = URL.create(
    drivername="mysql+pymysql",
    username=USERNAME,
    password=PASSWORD,
    host=DB_HOST,
    port=3306,
    database="db_inventory",
)
engine = create_engine(
    url,
    echo=True,
)

# Create a configured "Session" class
Session = sessionmaker(bind=engine)

db_session = Session()
