from flask import Flask, request, jsonify
from model.documents import retrive_docs
from model.inventory import retrive_all, add_inv, update_inv, retrive_one


app = Flask(__name__)

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


@app.route("/API/inventory/", methods=["DELETE"])
def inventory_del():
    return "hello DELETE\n"


# Route to control about software
@app.route("/API/software/", methods=["GET"])
def software():
    return "hello GET\n"


@app.route("/API/software/", methods=["POST"])
def software_add():
    return "hello POST\n"


@app.route("/API/software/", methods=["DELETE"])
def software_del():
    return "hello DELETE\n"


# Route to control about documents
@app.route("/API/documents/", methods=["GET"])
def documents():
    return "hello GET\n"


@app.route("/API/documents/", methods=["POST"])
def documents_add():
    return "hello POST\n"


@app.route("/API/documents/", methods=["DELETE"])
def documents_del():
    return "hello DELETE\n"


if __name__ == "__main__":
    app.run(host="localhost", debug=True, port=8990)
