from flask import Flask, jsonify
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
# This allows your Next.js app to make requests to this API without security blocks
CORS(app) 

# Later, you will replace these with your actual PostgreSQL database credentials
DB_CONFIG = {
    "dbname": "chapterpulse_db",
    "user": "postgres",
    "password": "yourpassword",
    "host": "localhost",
    "port": "5432"
}

def get_db_connection():
    conn = psycopg2.connect(**DB_CONFIG)
    return conn

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "success", "message": "ChapterPulse API is live!"})

# Example endpoint for the future:
# @app.route('/api/users/<int:user_id>/manga', methods=['GET'])
# def get_user_manga_list(user_id):
#     conn = get_db_connection()
#     # ... run your SQL JOIN query here ...
#     return jsonify(manga_list)

if __name__ == '__main__':
    app.run(debug=True, port=5000)