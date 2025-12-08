import sys, os
from datetime import datetime
from dotenv import load_dotenv

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from model.inventory import add_inv
from model.inventory import retrive_all
from model.documents import add_docs
from model.documents import retrive_docs

load_dotenv()

data = {
    "Nama": "Printer Inkjet Epson L120",
    "Deskripsi": "Lorem Ipsum dolor siamet",
    "Foto_Profile": "\\var\\www\\7812632\\Profile.jpg",
    "Label_Barcode": "7812632",
    "Lokasi": "RPU",
    "Ram": 16,
    "Ssd": 512,
    "Mobo": "Ausurix v112-obvg",
    "Ip": "192.168.0.1",
    "Antivirus": "LKJHFDA-ASDNKASD-SDHKAD",
    "Pengguna": "Manrgaret Sunson",
    "Unit_Pengguna": "Keperawaran Ibu dan Anak",
    "Tanggal": "25-12-2025",
    "Status": "Active",
}
# Owner_id=data["Label_Barcode"], Desc=data["Deskripsi"], Path=data["Path"]
data_docs = {
    "Label_Barcode": "7812632",
    "Deskripsi": "Serah Terima",
    "Path": "google.com",
}
# add_docs(data_docs)
# print(os.getenv("TEST"))
retrive_all()
# retrive_docs("7812632")
# add_inv(data)
