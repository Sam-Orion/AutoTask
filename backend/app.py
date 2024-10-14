# app.py
from flask import Flask, request, jsonify
from task_agent import agent  # Import the microagent from task_agent.py

app = Flask(__name__)

# Route to create a task
@app.route('/tasks', methods=['POST'])
def create_task():
    task_data = request.json
    agent.trigger_event("new_task", task_data)  # Trigger the microagent event
    return jsonify({'status': 'Task created'}), 201

if __name__ == "__main__":
    app.run(debug=True)

