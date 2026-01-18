import sys, os
from datetime import datetime
from dotenv import load_dotenv
from random import randint

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
load_dotenv()
from method.inventory import add_inv
from method.inventory import retrive_all, update_inv, retrive_one, del_inv
from method.documents import add_docs
from method.documents import retrive_docs, rem_docs
from method.software import rem_soft, add_soft, retrive_soft
from method.dashboard import dashboard, get_sinsur_data

# from method.maintenance import get_data, add_maintenance, make_schedule, del_schedule
from method.maintenance import add_maintenance

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


maintenance_data = {"id": "173283", "Note": ""}

print(dashboard())

# add_maintenance(maintenance_data)
# del_schedule("NL-467")
# make_schedule()
# make_schedule()
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


# from datetime import datetime

# from typing import Optional


# import pandas as pd

# df = pd.read_excel("./Inventory Asset.xlsx")
# data = df.T.to_dict()

# for i in data:
#     if type(data[i]["Barcode"]) != int:
#         data[i]["Barcode"] = f"NL-{i}"

# # category = []
# for i in data:
#     # category.append(data[i]['Category'])
#     if "tablet" in data[i]["Category"].lower():
#         data[i]["Category"] = "Tablet"
#     if "tv" in data[i]["Category"].lower():
#         data[i]["Category"] = "TV"
#     if "printer" in data[i]["Category"].lower():
#         data[i]["Category"] = "Printer"
#     if "scanner" in data[i]["Category"].lower():
#         data[i]["Category"] = "Scanner"
#     if "laptop" in data[i]["Category"].lower():
#         data[i]["Category"] = "Laptop"
#     if "komputer mini pc" == data[i]["Category"].lower():
#         data[i]["Category"] = "Komputer Desktop"
#     if "thermal" in data[i]["Category"].lower():
#         data[i]["Category"] = "Printer"
#     if "alat radiologi" == data[i]["Category"].lower():
#         data[i]["Category"] = "Komputer Desktop"
# from typing import Optional, Union


# def year_to_str2(dt: Optional[Union[datetime, pd.Timestamp]]) -> str:
#     if dt is None or pd.isna(dt):
#         return "25-04-1985"
#     return dt.strftime("%d-%m-%Y")


# # labels = []
# for i in data:
#     data_new = {
#         "Nama": data[i]["Model"],
#         "Desc": "",
#         "ID": data[i]["Barcode"],
#         "Searial_Num": data[i]["Serial Number Hardware"],
#         "Lokasi": data[i]["Nama Hardware"],
#         "Category": data[i]["Category"],
#         "OS": data[i]["Operating System"],
#         "WIN_KEY": data[i]["Serial Number OS"],
#         "CPU": data[i]["CPU"],
#         "RAM": data[i]["RAM"],
#         "SSD": data[i]["SSD"],
#         "HDD": data[i]["HDD"],
#         "Mobo": data[i]["Motherboard"],
#         "IP": data[i]["IP Address"],
#         "KIS": "",
#         "User": data[i]["Nama Pengguna"],
#         "Unit": data[i]["Location Penempatan"],
#         "Status": data[i]["Status Hardware saat ini"],
#         "Dates": year_to_str2(data[i]["Tahun Pengadaan"]),
#     }
#     # if data[i]["Barcode"] in labels:
#     #     print(data[i]["Barcode"])
#     # labels.append(data[i]["Barcode"])
#     # for filter_1 in data_new:
#     #     if type(data_new[filter_1]) is float:
#     #         data_new[filter_1] = ""
#     # add_inv(data_new)
#     # print(data_new)
# # retrive_all()
