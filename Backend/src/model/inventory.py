import sys, os

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
            "Profile": result.Profile,
            "ID": result.ID,
            "Lokasi": result.Lokasi,
            "RAM": result.RAM,
            "SSD": result.SSD,
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
    result = db_session.query(Assets).all()
    print(process_data(result))


def add_inv(data):
    add_data = Assets(
        Nama=data["Nama"],
        Desc=data["Deskripsi"],
        Profile=data["Foto_Profile"],
        ID=data["Label_Barcode"],
        Lokasi=data["Lokasi"],
        RAM=data["Ram"],
        SSD=data["Ssd"],
        Mobo=data["Mobo"],
        IP=data["Ip"],
        KIS=data["Antivirus"],
        User=data["Pengguna"],
        Unit=data["Unit_Pengguna"],
        Dates=datetime.strptime(data["Tanggal"], "%d-%m-%Y").date(),
        Status=data["Status"],
    )
    db_session.add(add_data)
    db_session.commit()


# edit inventory


def update_inv(data):
    pass
