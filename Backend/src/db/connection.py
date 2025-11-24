import os
from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.orm import sessionmaker, declarative_base
from db_model import Inventory, Documents, Note, Software
from datetime import datetime

DB_FILE = './src/db/db_inventory.sqlite'
print(f"Connecting to database: {DB_FILE}")
engine = create_engine(f'sqlite:///{DB_FILE}', echo=True)

# Create a configured "Session" class
Session = sessionmaker(bind=engine)

if __name__ == '__main__':
    db_session = Session()