from db.connection import db_session
from db.db_model import Software
from sqlalchemy import select, delete


# function get docs base on asset id
def retrive_soft(num_id):
    result = db_session.execute(
        select(
            Software.Software_id,
            Software.Soft_name,
            Software.Software_username,
            Software.Software_passwd,
        ).where(Software.Owner_id == num_id)
    ).all()
    if result:
        return print(result)


# add new Software base on id
def add_soft(data):
    new_data = Software(
        Owner_id=data["ID"],
        Soft_name=data["Name"],
        Software_username=data["Username"],
        Software_passwd=data["Password"],
    )
    db_session.add(new_data)
    db_session.commit()


# remove Software from database
def rem_soft(num_id, Asset_ID):
    stmt = delete(Software).where(
        Software.Software_id == num_id and Software.Owner_id == Asset_ID
    )
    db_session.execute(stmt)
    db_session.commit()
