import os
from sqlalchemy import (
    create_engine,
    Column,
    Integer,
    String,
    Float,
    Date,
    ForeignKey,
    Interval,
    Text,
    DateTime,
)
from sqlalchemy.orm import sessionmaker, declarative_base, relationship
from datetime import datetime

# 1. Define the Base Class for declarative models
# This is the base class which our models will inherit from.
Base = declarative_base()


# Model for user
class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
    passwd = Column(Integer, nullable=False)


# Model for Assets
class Assets(Base):
    __tablename__ = "asset"

    Nama = Column(String(250), nullable=False)
    Desc = Column(Text)
    Profile = Column(String(255))
    ID = Column(String(50), nullable=False, primary_key=True)
    Lokasi = Column(String(250))
    RAM = Column(Integer)
    SSD = Column(Integer)
    Mobo = Column(String(250))
    IP = Column(String(100))
    KIS = Column(String(250))
    User = Column(String(250))
    Unit = Column(String(250))
    Dates = Column(Date)
    Status = Column(String(100), nullable=False)
    Documents = relationship("Documents", back_populates="asset")
    Software = relationship("Software", back_populates="asset")
    Note = relationship("Note", back_populates="asset", uselist=False)


# Model for Documents
class Documents(Base):
    __tablename__ = "documents"

    Documents_id = Column(Integer, primary_key=True, nullable=False)
    Owner_id = Column(String(255), ForeignKey("asset.ID"))
    Desc = Column(String(250), nullable=False)
    Path = Column(String(250), nullable=False)
    Doc_date = Column(DateTime, default=datetime.now)
    asset = relationship("Assets", back_populates="Documents")


# Model for Software
class Software(Base):
    __tablename__ = "software"

    Software_id = Column(Integer, primary_key=True, nullable=False)
    Owner_id = Column(String(255), ForeignKey("asset.ID"))
    Soft_name = Column(String(240), nullable=False)
    Software_username = Column(String(250), nullable=False)
    Software_passwd = Column(String(250), nullable=False)
    asset = relationship("Assets", back_populates="Software")


# Model for note or text
class Note(Base):
    __tablename__ = "note"
    Note_id = Column(Integer, primary_key=True, nullable=False)
    Owner_id = Column(String(255), ForeignKey("asset.ID"), unique=True)
    Last_Maintenance = Column(Date, nullable=False, default=datetime.now)
    Notes = Column(Text)
    asset = relationship("Assets", back_populates="Note")
