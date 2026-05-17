import sys, os
from sqlalchemy import update, delete, asc,cast, Date, or_

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from datetime import date, datetime
from db.db_model import Antivirus, Assets
from db.connection import db_session


def template(Status, data):
    return {
        "Status" : Status,
        "Data" : data
    }
#get all antiviruses
def retive_all():
    try:
        res = db_session.query(Antivirus).order_by(asc(Antivirus.Antivirus_id)).all()
        data = {data.Antivirus_id : [data.KEY, data.Jumlah_User] for data in res}
        return template("Success", data)
    except Exception as e:
        print(f"Error : {e}")
        return template("Error", None)


#update user using antiviruses
def update_user(id : int) -> int:
    try:
        query = db_session.query(Antivirus).filter_by(Antivirus_id=id).first()
        jumlah_user = query.Jumlah_User
        if jumlah_user == None:
            jumlah_user = 0
        stmt = update(Antivirus).where(Antivirus.Antivirus_id == id).values(Jumlah_User=jumlah_user + 1)
        db_session.execute(stmt)
        db_session.commit()
    except Exception as e:
        db_session.rollback()
        print(f"Error : {e}")
        return template("Error", None)
#add antiviruses
def add_antv(data :list) -> list:
    try:
        antv_data = Antivirus(
                KEY=data[0],
                KIS_date=datetime.strptime(data[1], "%d-%m-%Y").date()
        )
        db_session.add(antv_data)
        db_session.commit()
        return template("Success", data)
    except Exception as e:
        db_session.rollback()
        print(f"Error : {e}")
        return template("Error", None)
#get user if intivirus base on key antivirus id
# Output data
# {
#     label : [Category, User],
#     label : [Category, User],
#     label : [Category, User],
# }
def retrive_users(id : str) -> str:
    try:
        res = db_session.query(Assets).where(Assets.KIS == id).all()
        data = {data.ID : [data.Category, data.User] for data in res}
        return template("Success", data)
    except Exception as e:
        print(f"Error : {e}")
        return template("Error", None)

#get antivirus key by antivirus id
def get_antv_key(id : int) -> int:
    try:
        res = db_session.query(Antivirus).where(Antivirus.Antivirus_id == id)
        data = [i.KEY for i in res]
        return template("Success", data)
    except Exception as e:
        print(f"Error : {e}")
        return template("Error", None)

#get list antivirus that not expired'
def get_available():
    try:
        res = db_session.query(Antivirus).where(cast(Antivirus.KIS_date, Date) >= date.today()).filter(or_(
            Antivirus.Jumlah_User < 3,
            Antivirus.Jumlah_User == None
        )).order_by(asc(Antivirus.Jumlah_User)).all()
        data = {data.Antivirus_id : data.KEY for data in res}
        return template("Success", data)
    except Exception as e:
        print(f"Error : {e}")
        return template("Error", None)