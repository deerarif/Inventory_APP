##Update Schedule and replace maintenance id in maintenance schedule
#get db connection
from db.connection import db_session
from sqlalchemy import text


#get schedule base on id howmuch
def get_schedule(id : str) -> str:
    try:
        res = db_session.execute(text(f"SELECT id, asset_id FROM maintenance_schedule WHERE asset_id = '{id}'"))
        return [data[0] for data in res]
    except Exception as e:
        print(e)
        db_session.rollback()
        return

def changes_schedule_id(data, new_asset_id):
    try:
        for ids in data:
            res = db_session.execute(text(f"UPDATE maintenance_schedule SET asset_id = {new_asset_id} WHERE id = {ids};"))
            db_session.commit()
        return 'Success'
    except Exception as e:
        print(e)
        db_session.rollback()
        return 'Error'

def get_history(id : str) -> str:
    try:
        res = db_session.execute(text(f"SELECT id, asset_id FROM maintenance_history WHERE asset_id = '{id}'"))
        return [data[0] for data in res]
    except Exception as e:
        print(e)
        db_session.rollback()
        return

def changes_history_id(data, new_asset_id):
    try:
        for ids in data:
            res = db_session.execute(text(f"UPDATE maintenance_history SET asset_id = {new_asset_id} WHERE id = {ids};"))
            db_session.commit()
        return 'Success'
    except Exception as e:
        print(e)
        db_session.rollback()
        return 'Error'
#data input list index satu itu asset ID lama index 2 data asset baru example
#['12345', '09876'] 12345 adalah data asset lama atau data[0] and 09876 adalah asset baru atau data[1]
def update_schedule(data : list) -> list:
    try:
        #get schedule id from asset id in database
        data_schule = get_schedule(data[0])
        changes_schedule_id(data_schule,data[1])
        #get data id from scheule and change the asset ID
        data_history_id = get_history(data[0])
        change_history_asset_id = changes_history_id(data_history_id, data[1])

        return {
            "status schedule" : changes_schedule_id,
            "status history"  : change_history_asset_id
        }
    except Exception as e:
        print(e)
        return