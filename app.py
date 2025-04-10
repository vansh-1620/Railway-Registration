from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect("database.db")
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/search_trains", methods=["GET"])
def search_trains():
    from_station = request.args.get("from")
    to_station = request.args.get("to")
    date = request.args.get("date")

    conn = get_db_connection()
    trains = conn.execute(
        "SELECT * FROM trains WHERE from_station = ? AND to_station = ?", (from_station, to_station)
    ).fetchall()
    conn.close()

    train_list = [{"train_name": train["train_name"], "departure": train["departure"], "arrival": train["arrival"], "fare": train["fare"]} for train in trains]

    return jsonify({"trains": train_list})

if __name__ == "__main__":
    app.run(debug=True)
