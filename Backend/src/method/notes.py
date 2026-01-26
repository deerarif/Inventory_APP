from sqlalchemy import select
from db.connection import db_session
from db.db_model import Note
from datetime import datetime


def datetime_to_string(dt: datetime) -> str:
    return dt.strftime("%d-%m-%Y")


def hit_the_notes(id_owner):
    res = (
        db_session.execute(select(Note).where(Note.Owner_id == id_owner))
        .scalars()
        .all()
    )
    data_notes = {
        data.Owner_id: [data.Notes, datetime_to_string(data.Last_Maintenance)]
        for data in res
    }
    return data_notes
