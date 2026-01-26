from sqlalchemy import select
from db.connection import db_session
from db.db_model import Assets
from db.db_model import Note
from datetime import datetime
import requests as req
import os

SINSUR_HOST = os.getenv("SINSUR_HOST")


# get add data from db
def get_note_date_all():
    try:
        result = db_session.execute(select(Note.Last_Maintenance))
        return result
    except:
        return "error"


# process data check count january - Dec
# also check how much data this and last year
def process_note(data):
    months = [0] * 12
    sudah_maintenace = 0
    belum_maintenace = 0
    try:
        for item in data:
            date_obj = item[0]
            if date_obj.year == datetime.now().year:
                month_index = date_obj.month - 1
                months[month_index] += 1
                sudah_maintenace += 1
            else:
                belum_maintenace += 1
        # return object data
        final_data = [months, sudah_maintenace, belum_maintenace]
        return final_data
    except:
        return "error process data"


# count how many status and category
def inv_statics():
    data = {}
    status_data = {}
    try:
        result = db_session.execute(select(Assets.Category, Assets.Status))
        for i in result:
            key = str(i[0])
            status_key = str(i[1])
            data[key] = data.get(key, 0) + 1
            status_data[status_key] = status_data.get(status_key, 0) + 1
        return [data, status_data]
    except:
        return "error"


# parse data make it object
def parse_data(data: list):
    result = {
        "Maintennace Index Data": data[0],
        "Maintennace Progress": [data[1], data[2]],
        "Statistik_Asset": data[3][0],
        "Statistik_Status": data[3][1],
    }
    return result


def process_sensor_data(data_list):
    temp_morning = []
    temp_afternoon = []
    humid_morning = []
    humid_afternoon = []

    seen_morning = set()  # Track dates we've seen for morning readings
    seen_afternoon = set()  # Track dates we've seen for afternoon readings

    for item in data_list:
        # Parse the timestamp
        timestamp = item["timestamp"]
        date_obj = datetime.strptime(timestamp, "%m/%d/%Y, %I:%M:%S %p")
        date_only = date_obj.strftime("%Y-%m-%d")  # Get just the date part
        hour = date_obj.hour

        # Check if it's a morning reading (around 8 AM)
        if 6 <= hour < 12:  # Morning time range
            if date_only not in seen_morning:
                seen_morning.add(date_only)
                temp_morning.append(item["temprature"])
                humid_morning.append(item["humidity"])

        # Check if it's an afternoon reading (around 4 PM)
        elif 12 <= hour < 20:  # Afternoon time range
            if date_only not in seen_afternoon:
                seen_afternoon.add(date_only)
                temp_afternoon.append(item["temprature"])
                humid_afternoon.append(item["humidity"])

    return temp_morning, temp_afternoon, humid_morning, humid_afternoon


# get suhu data from sinsur
def get_sinsur_data():
    now = datetime.now()
    first_day = datetime(now.year, now.month, 1)
    try:
        res = req.get(
            f"{SINSUR_HOST}/Api/get?startDate={first_day.isoformat(timespec="seconds")}&endDate={now.isoformat(timespec="seconds")}",
            timeout=1,
        )
        datasinsur = process_sensor_data(res.json())
        return {
            "Suhu_Pagi": datasinsur[0],
            "Suhu_Sore": datasinsur[1],
            "Hum_Pagi": datasinsur[2],
            "Hum_Sore": datasinsur[3],
        }
    except Exception:
        # pass
        datasinsur = [[0 for j in range(30)] for i in range(4)]
        return {
            "Suhu_Pagi": datasinsur[0],
            "Suhu_Sore": datasinsur[1],
            "Hum_Pagi": datasinsur[2],
            "Hum_Sore": datasinsur[3],
        }


# ship the data to frontend this was hit method by route
def dashboard():
    try:
        data = get_note_date_all()
        res = process_note(data)
        res.append(inv_statics())
        final_data = parse_data(res)
        sinsur = get_sinsur_data()
        final_data.update({"Sinsur": sinsur})
        return final_data
    except:
        db_session.rollback()
        return "error"
