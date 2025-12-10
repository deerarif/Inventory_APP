from sqlalchemy import select, delete
from db.connection import db_session
from db.db_model import Documents


# function get docs base on asset id
def retrive_docs(num_id):
    result = db_session.execute(
        select(Documents.Documents_id, Documents.Desc, Documents.Path).where(
            Documents.Owner_id == num_id
        )
    ).all()
    if result:
        return print(result)


# add new documents base on id
def add_docs(data):
    new_data = Documents(
        Owner_id=data["Label_Barcode"], Desc=data["Deskripsi"], Path=data["Path"]
    )
    db_session.add(new_data)
    db_session.commit()


# remove documents from database
def rem_docs(num_id, Asset_ID):
    stmt = delete(Documents).where(
        Documents.Documents_id == num_id and Documents.Owner_id == Asset_ID
    )
    db_session.execute(stmt)
    db_session.commit()
