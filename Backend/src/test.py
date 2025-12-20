import sys, os
from datetime import datetime
from dotenv import load_dotenv

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
# Owner_id=data["Label_Barcode"], Desc=data["Deskripsi"], Path=data["Path"]
data_docs = {
    "Label_Barcode": "00000",
    "Deskripsi": "Serah Terima",
    "Path": "google.com",
}

data_soft = {
    "ID": "00000",
    "Name": "Serah Terima",
    "Username": "google.com",
    "Password": "google.com",
}
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
del_inv("00000")
