import os

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DB_FILE = "db/db_inventory.sqlite"
print(f"Connecting to database: {DB_FILE}")
engine = create_engine(f"sqlite:///{DB_FILE}", echo=True)

# Create a configured "Session" class
Session = sessionmaker(bind=engine)

db_session = Session()
