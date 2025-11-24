from flask import Flask
from model.documents import retrive_docs


app = Flask(__name__)

#Statics Route


#Route all stuff with inventory
@app.route("/API/inventory/", methods=['GET'])
def inventory():
    return "hello world"
@app.route("/API/inventory/", methods=['POST'])
def inventory_add():
    return "hello world"
@app.route("/API/inventory/", methods=['DELETE'])
def inventory_del():
    return "hello world"

#Route to control about software
@app.route("/API/software/", methods=['GET'])
def software():
    return "hello world"
@app.route("/API/software/", methods=['POST'])
def software_add():
    return "hello world"
@app.route("/API/software/", methods=['DELETE'])
def software_del():
    return "hello world"

#Route to control about documents
@app.route("/API/documents/", methods=['GET'])
def documents():
    return "hello world"
@app.route("/API/documents/", methods=['POST'])
def documents_add():
    return "hello world"
@app.route("/API/documents/", methods=['DELETE'])
def documents_del():
    return "hello world"

if __name__ == "__main__":
    app.run(host='localhost',debug=True, port=8990)