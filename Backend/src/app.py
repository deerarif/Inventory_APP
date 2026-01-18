from flask import Flask, request, jsonify
from method.documents import retrive_docs, add_docs, rem_docs
from method.inventory import retrive_all, add_inv, update_inv, retrive_one, del_inv
from method.software import retrive_soft, add_soft, rem_soft
from method.maintenance import get_data, add_maintenance, make_schedule, del_schedule
from method.dashboard import dashboard
import os
from datetime import datetime
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv
from werkzeug.utils import secure_filename

load_dotenv()
app = Flask(__name__, static_folder=os.getenv("UPLOAD_FOLDER"), static_url_path="/docs")
app.config["UPLOAD_FOLDER"] = os.getenv("UPLOAD_FOLDER")
CORS(app)
# Statics Route


# Route all stuff with inventory
@app.route("/API/inventory/", methods=["GET"])
def inventory():
    return jsonify(retrive_all()), 200


@app.route("/API/inventory/<string:inv_id>", methods=["GET"])
def inventory_detail(inv_id):
    return jsonify(retrive_one(inv_id)), 200


@app.route("/API/inventory/", methods=["POST"])
def inventory_add():
    try:
        data = request.get_json()
        add_inv(data)
        return "succes\n", 200
    except Exception as err:
        print(err)
        return "error\n", 500


@app.route("/API/inventory/<string:inv_id>", methods=["POST"])
def inventory_update(inv_id):
    try:
        data = request.get_json()
        update_inv(data, inv_id)
        return f"succes\n", 200
    except Exception as err:
        print(err)
        return "error\n", 500


@app.route("/API/inventory/<string:inv_id>", methods=["DELETE"])
def inventory_del(inv_id):
    try:
        del_inv(inv_id)
        return f"succes\n", 200
    except Exception as err:
        print(err)
        return "error\n", 500


# Route to control about documents
@app.route("/API/documents/", methods=["POST"])
def documents_add():
    try:
        data_docs = request.get_json()
        add_docs(data_docs)
        return "succes\n", 200
    except Exception as err:
        print(err)
        return "error\n", 500


@app.route("/API/upload/<string:inv_id>", methods=["POST"])
def documents_files(inv_id):
    try:
        file = request.files["Documents"]
        filename = f'{datetime.now().strftime("%Y-%m-%d_%H-%M-%S")}_' + secure_filename(
            file.filename
        )
        if (
            secure_filename(file.filename).lower().split(".")[-1] == "jpg"
            or secure_filename(file.filename).lower().split(".")[-1] == "png"
        ):
            filename = "profile.jpg"
        path_folder = os.path.join(app.config["UPLOAD_FOLDER"] + inv_id)
        if not os.path.exists(path_folder):
            os.makedirs(path_folder)
        file.save(os.path.join(path_folder, filename))
        return filename, 200
    except Exception as err:
        print(err)
        return "error\n", 500


@app.route("/API/documents/<string:label>/<string:docs_id>", methods=["DELETE"])
def documents_del(label, docs_id):
    try:
        rem_docs(label, docs_id)
        return "succes\n", 200
    except Exception as err:
        print(err)
        return "error\n", 500


# Route to control about software
@app.route("/API/software/<string:inv_id>", methods=["GET"])
def software(inv_id):
    try:
        retrive_soft(inv_id)
        return "succes\n", 200
    except Exception as err:
        print(err)
        return "error\n", 500


@app.route("/API/software/", methods=["POST"])
def software_add():
    try:
        data_soft = request.get_json()
        add_soft(data_soft)
        return "succes\n", 200
    except Exception as err:
        print(err)
        return "error\n", 500


@app.route("/API/software/<string:barcode>/<string:soft_id>", methods=["DELETE"])
def software_del(barcode, soft_id):
    try:
        rem_soft(barcode, soft_id)
        return "succes\n", 200
    except Exception as err:
        print(err)
        return "error\n", 500


# Route for Maintenance
@app.route("/API/maintenance", methods=["GET"])
def maintenance():
    try:
        return jsonify(get_data()), 200
    except Exception as err:
        print(err)
        return "error\n", 500


@app.route("/API/reset_maintenance", methods=["GET"])
def make_schedules():
    try:
        make_schedule()
        return jsonify(make_schedule()), 200
    except Exception as err:
        print(err)
        return "error\n", 500


@app.route("/API/maintenance", methods=["POST"])
def maintenance_add():
    try:
        Note_data = request.get_json()
        add_maintenance(Note_data)
        return "succes\n", 200
    except Exception as err:
        print(err)
        return "error\n", 500


@app.route("/API/dashboard", methods=["GET"])
def dashboard_panels():
    try:
        data = dashboard()
        return jsonify(data), 200
    except Exception as err:
        print(err)
        return "error\n", 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=8990)
