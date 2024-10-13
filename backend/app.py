from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

tasks = []

@app.route('/tasks', methods=['POST'])
def add_task():
    task = request.json
    tasks.append(task)
    return jsonify(task), 201

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks), 200

if __name__ == '__main__':
    app.run(debug=True)
