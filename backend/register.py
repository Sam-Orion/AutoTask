from flask import Flask, request, jsonify
from werkzeug.security import generate_password_hash

app = Flask(__name__)

users = {}  # Simple in-memory user storage (replace with DB in production)

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data['username']
    password = generate_password_hash(data['password'])  # Secure password storage
    
    if username in users:
        return jsonify({"msg": "Username already exists!"}), 400
    
    users[username] = password
    return jsonify({"msg": "User registered successfully!"}), 201

if __name__ == "__main__":
    app.run(debug=True)
