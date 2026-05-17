from db.connection import db_session
from db.db_model import Assets
from sqlalchemy import select, delete, func, extract, join, table, column, update
import datetime
import ast


def Change_Schelude(ID, NewID):
    try:
        maitenance_schedule = table(
            "maintenance_schedule", column("id"), column("asset_id")
        )
        select_query = select(maitenance_schedule).where(
            maitenance_schedule.c.asset_id == ID
        )
        res = db_session.execute(select_query).all()
        if res:
            for i in res:
                # print(i[0])
                update_query = (
                    update(maitenance_schedule)
                    .where(maitenance_schedule.c.id == str(i[0]))
                    .values(asset_id=NewID)
                )
                db_session.execute(update_query)
                db_session.commit()
            return {"Status": "Success"}
        return {"Status": "Error"}
    except Exception as e:
        print(e)
        return {"Status": "Error"}


def Change_History(ID, NewID):
    try:
        maitenance_history = table(
            "maintenance_history", column("id"), column("asset_id")
        )
        select_query = select(maitenance_history).where(
            maitenance_history.c.asset_id == ID
        )
        res = db_session.execute(select_query).all()
        if res:
            for i in res:
                # print(i[0])
                update_query = (
                    update(maitenance_history)
                    .where(maitenance_history.c.id == str(i[0]))
                    .values(asset_id=NewID)
                )
                db_session.execute(update_query)
                db_session.commit()
            return {"Status": "Success"}
        return {"Status": "Error"}
    except Exception as e:
        print(e)
        return {"Status": "Error"}


def Main(ID, NewID):
    Schedule_Change_Status = Change_Schelude(ID, NewID)
    Change_Maintenace_history_Status = Change_History(ID, NewID)
    Status = {
        "Jadwal": Schedule_Change_Status,
        "History": Change_Maintenace_history_Status,
    }
    return Status
