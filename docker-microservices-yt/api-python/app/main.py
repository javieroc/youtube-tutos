from flask import Flask, make_response, jsonify

app = Flask(__name__)

@app.route("/api")
def hello():
    return make_response(jsonify({'message': 'Api python'})), 200
