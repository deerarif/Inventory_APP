import os
from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.orm import sessionmaker, declarative_base
from db_model import Assets, Documents, Note, Base

DB_FILE = './src/db/db_inventory.sqlite'
engine = create_engine(f'sqlite:///{DB_FILE}', echo=True)
Base.metadata.create_all(engine)