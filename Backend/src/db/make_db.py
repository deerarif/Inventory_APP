import os
from dotenv import load_dotenv
from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.orm import sessionmaker, declarative_base
from db_model import Assets
from db_model import Documents
from db_model import Note
from db_model import Base

load_dotenv()
USERNAME = os.getenv("USERNAME")
DB_HOST = os.getenv("DB_HOST")
DB_NAME = os.getenv("DB_NAME")
PASSWORD = os.getenv("PASSWORD")


engine = create_engine(
    f"mysql+pymysql://{USERNAME}:{PASSWORD}@{DB_HOST}/{DB_NAME}?charset=utf8mb4",
    echo=True,
)
Base.metadata.create_all(engine)
