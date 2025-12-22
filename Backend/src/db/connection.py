import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# load_dotenv()
USERNAME = os.getenv("USERNAME")
DB_HOST = os.getenv("DB_HOST")
DB_NAME = os.getenv("DB_NAME")
PASSWORD = os.getenv("PASSWORD")

engine = create_engine(
    f"mysql+pymysql://{USERNAME}:{PASSWORD}@{DB_HOST}/{DB_NAME}?charset=utf8mb4",
    echo=True,
)

# Create a configured "Session" class
Session = sessionmaker(bind=engine)

db_session = Session()
