import sys, os
from datetime import datetime
from dotenv import load_dotenv
from random import randint

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from model.inventory import add_inv
from model.inventory import retrive_all, update_inv, retrive_one, del_inv
from model.documents import add_docs
from model.documents import retrive_docs, rem_docs
from model.software import rem_soft, add_soft, retrive_soft

load_dotenv()

data = {
    "Nama": "Komputer AIO Asus i5",
    "Desc": "Lorem Ipsum dolor siamet",
    "Profile": "\\var\\www\\2222222\\Profile.jpg",
    "ID": "2223432",
    "Lokasi": "RPU",
    "RAM": 16,
    "SSD": 512,
    "Mobo": "Ausurix v112-obvg",
    "IP": "192.168.0.1",
    "KIS": "LKJHFDA-ASDNKASD-SDHKAD",
    "User": "Manrgaret Sunson",
    "Unit": "SIMRS",
    "Status": "Active",
    "Dates": "25-12-2025",
}


def make_fake_data(labels):
    data = {
        "Nama": "Komputer AIO Asus i5",
        "Desc": "Lorem Ipsum dolor siamet",
        "Profile": f"\\var\\www\\{labels}\\Profile.jpg",
        "ID": f"{labels}",
        "Lokasi": "RPU",
        "RAM": 16,
        "SSD": 512,
        "Mobo": "Ausurix v112-obvg",
        "IP": f"192.168.0.{labels}",
        "KIS": "LKJHFDA-ASDNKASD-SDHKAD",
        "User": "Manrgaret Sunson",
        "Unit": "SIMRS",
        "Status": "Active",
        "Dates": "25-12-2025",
    }
    data_docs = {
        "Label_Barcode": f"{labels}",
        "Deskripsi": "Serah Terima",
        "Path": "google.com",
    }
    data_soft = {
        "ID": f"{labels}",
        "Name": "Serah Terima",
        "Username": "google.com",
        "Password": "google.com",
    }
    return [data, data_docs, data_soft]


# for i in range(1, 100):
#     data = make_fake_data(
#         randint(
#             1000000,
#             9999999,
#         )
#     )
#     add_inv(data[0])
#     add_docs(data[1])
#     add_soft(data[2])
# add_docs(data_docs)
# print(os.getenv("TEST"))
# retrive_all()
# rem_docs(1, "7812632")
# update_inv(data)
# retrive_docs("' OR '1'='1")
# add_inv(data)
# retrive_one("00000")
# add_soft(data_soft)
# retrive_soft("00000")
# rem_soft(1, "2222222")
# del_inv("00000")
