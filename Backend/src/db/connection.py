import os
from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.orm import sessionmaker, declarative_base
from db_model import Inventory, Documents, Note, Software
from datetime import datetime
# 1. Define the Base Class for declarative models
# This is the base class which our models will inherit from.

# 2. Define the Table Model
# This class represents the structure of the 'Person' table in the database.

# --- Database Setup and Connection ---

# Define the database file name
DB_FILE = './src/db/db_inventory.sqlite'

# Create the engine to connect to the SQLite database
# The 'echo=True' argument prints SQL statements to the console, which is useful for learning.
print(f"Connecting to database: {DB_FILE}")
engine = create_engine(f'sqlite:///{DB_FILE}', echo=True)

# Create all tables defined in the Base (i.e., the Person table)
# This will only create the table if it does not already exist.


# --- Example Usage (CRUD Operations) ---

# Create a configured "Session" class
Session = sessionmaker(bind=engine)
def main():
    # Instantiate a session to talk to the database
    session = Session()
    inv1 = Inventory(
        Nama="Server A",
        Desc="Main datacenter server",
        Lokasi="Rack 1",
        RAM=64,
        SSD=1024,
        Mobo="ASUS XYZ",
        IP="10.0.0.100",
        KIS="KIS123",
        User="Admin",
        Unit="IT",
        Dates= datetime.strptime("25-11-2024", "%d-%m-%Y"),
        Status="Active"
    )
    session.add(inv1)
    session.commit()
    doc1 = Documents(
    Owner_id=inv1.ID,
    Desc="Purchase invoice",
    Path="/docs/serverA_invoice.pdf",
)
    session.add(doc1)

    # ---------------- Insert Software ----------------
    soft1 = Software(
        Owner_id=inv1.ID,
        Software_username="root",
        Software_passwd="12345"
    )
    session.add(soft1)

    # ---------------- Insert Note (One-to-One) ----------------
    note1 = Note(
        Owner_id=inv1.ID,
        Notes="Initial setup completed."
    )
    session.add(note1)

    session.commit()
    # Add the objects to the session

if __name__ == '__main__':

    main()