from db.connection import db_session
from db.db_model import Note, Assets
from sqlalchemy import select, delete, func, extract, join
import datetime
import ast


# functtion get 3 data from db
# and add that into json file as chedule
def make_schedule():
    result = (
        db_session.execute(
            select(Assets)
            .join(Note, Note.Owner_id == Assets.ID)
            .where(func.year(Note.Last_Maintenance) < datetime.datetime.now().year)
            .limit(3)
        )
        .scalars()
        .all()
    )
    if result:
        data = {data.ID: [data.User, data.Unit, data.Lokasi] for data in result}
        with open("db/schedule.json", "w") as f:
            f.write(f"{data}")
        return data


# delete data
def del_schedule(id):
    try:
        f = open("db/schedule.json", "r+")
        data = ast.literal_eval(f.read())
        print(data)
        del data[id]
        with open("db/schedule.json", "w") as f:
            f.write(f"{data}")
            return
    except Exception as e:
        print(e)
        return


def add_maintenance(data):
    try:
        note = db_session.query(Note).filter_by(Owner_id=data["id"]).first()
        if note:
            note.Notes = data["Note"]
            note.Last_Maintenance = datetime.datetime.now()
        else:
            note = Note(Owner_id=data["id"], Notes=data["Note"])
            db_session.add(note)
        db_session.commit()
        del_schedule(data["id"])
    except Exception as e:
        print(e)
        return


# get 3 maintenance data from json file
def get_data():
    try:
        f = open("db/schedule.json", "r")
        data = ast.literal_eval(f.read())
        return data
    except Exception as e:
        print(e)
        return
