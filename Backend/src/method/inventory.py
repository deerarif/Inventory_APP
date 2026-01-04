import sys, os
from sqlalchemy import update, delete, asc

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from db.db_model import Assets
from db.connection import db_session
from datetime import datetime


def datetime_to_string(dt: datetime) -> str:
    return dt.strftime("%d-%m-%Y")


# data procession function
def process_data(data):
    data_clean = [
        {
            "Nama": result.Nama,
            "Desc": result.Desc,
            "ID": result.ID,
            "Searial_Num": result.Searial_Num,
            "Lokasi": result.Lokasi,
            "Category": result.Category,
            "OS": result.OS,
            "WIN_KEY": result.WIN_KEY,
            "CPU": result.CPU,
            "RAM": result.RAM,
            "SSD": result.SSD,
            "HDD": result.HDD,
            "Mobo": result.Mobo,
            "IP": result.IP,
            "KIS": result.KIS,
            "User": result.User,
            "Unit": result.Unit,
            "Dates": result.Dates,
            "Status": result.Status,
            "Docs": [
                (
                    docs.Documents_id,
                    docs.Desc,
                    docs.Path,
                    datetime_to_string(docs.Doc_date),
                )
                for docs in result.Documents
            ],
        }
        for result in data
    ]
    return data_clean


# Verifikasi data input sebelum masuk Query
def data_verify(data):
    pass


# function get all inventory data
def retrive_all():
    # result = db_session.query(Assets).all()
    result = db_session.query(Assets).order_by(asc(Assets.Lokasi)).all()
    # print(type({"data": result}))
    return process_data(result)


# get only one detail of data
def retrive_one(inv_id):
    try:
        result = db_session.query(Assets).filter_by(ID=inv_id).one_or_none()
        if result:
            data = {
                "Nama": result.Nama,
                "Desc": result.Desc,
                "ID": result.ID,
                "Searial_Num": result.Searial_Num,
                "Lokasi": result.Lokasi,
                "OS": result.OS,
                "WIN_KEY": result.WIN_KEY,
                "CPU": result.CPU,
                "RAM": result.RAM,
                "SSD": result.SSD,
                "HDD": result.HDD,
                "Mobo": result.Mobo,
                "IP": result.IP,
                "KIS": result.KIS,
                "User": result.User,
                "Unit": result.Unit,
                "Dates": result.Dates,
                "Status": result.Status,
                "Docs": [
                    (
                        docs.Documents_id,
                        docs.Desc,
                        docs.Path,
                        datetime_to_string(docs.Doc_date),
                    )
                    for docs in result.Documents
                ],
                "Soft": [
                    (
                        soft.Software_id,
                        soft.Soft_name,
                        soft.Software_username,
                        soft.Software_passwd,
                    )
                    for soft in result.Software
                ],
                # Add more data software and Note, this data will use in menu inventory
                "Note": [(note.Last_Maintenance,) for note in result.Note],
            }
            return data
    except:
        return "error"


def add_inv(data):
    add_data = Assets(
        Nama=data["Nama"],
        Desc=data["Desc"],
        ID=data["ID"],
        Searial_Num=data["Searial_Num"],
        Lokasi=data["Lokasi"],
        Category=data["Category"],
        OS=data["OS"],
        WIN_KEY=data["WIN_KEY"],
        CPU=data["CPU"],
        RAM=data["RAM"],
        SSD=data["SSD"],
        HDD=data["HDD"],
        Mobo=data["Mobo"],
        IP=data["IP"],
        KIS=data["KIS"],
        User=data["User"],
        Unit=data["Unit"],
        Dates=datetime.strptime(data["Dates"], "%d-%m-%Y").date(),
        Status=data["Status"],
    )
    db_session.add(add_data)
    db_session.commit()


# edit inventory
def update_inv(data, data_ids):
    stmt = update(Assets).where(Assets.ID == data_ids).values(**data)
    db_session.execute(stmt)
    db_session.commit()


# delete data inventory
def del_inv(data_ids):
    stmt = delete(Assets).where(Assets.ID == data_ids)
    db_session.execute(stmt)
    db_session.commit()
