from flask import Flask, request, jsonify
from model.documents import retrive_docs, add_docs, rem_docs
from model.inventory import retrive_all, add_inv, update_inv, retrive_one, del_inv
from model.software import retrive_soft, add_soft, rem_soft
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
        if "jpg" or "png" in secure_filename(file.filename).lower().split("."):
            filename = "profile.jpg"
        path_folder = os.path.join(app.config["UPLOAD_FOLDER"] + inv_id)
        if not os.path.exists(path_folder):
            os.makedirs(path_folder)
        file.save(os.path.join(path_folder, filename))
        return filename, 200
    except Exception as err:
        print(err)
        return "error\n", 500


@app.route("/API/documents/<string:docs_id>", methods=["DELETE"])
def documents_del(docs_id):
    try:
        rem_docs(docs_id)
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


@app.route("/API/software/<string:soft_id>", methods=["DELETE"])
def software_del(soft_id):
    try:
        rem_soft(soft_id)
        return "succes\n", 200
    except Exception as err:
        print(err)
        return "error\n", 500


if __name__ == "__main__":
    app.run(host="localhost", debug=True, port=8990)
