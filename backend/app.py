from flask import Flask, request, jsonify
from task_agent import agent  

app = Flask(__name__)


@app.route('/tasks', methods=['POST'])
def create_task():
    task_data = request.json
    agent.trigger_event("new_task", task_data)  
    return jsonify({'status': 'Task created'}), 201

if __name__ == "__main__":
    app.run(debug=True)

