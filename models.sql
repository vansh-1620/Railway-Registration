CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL
);

CREATE TABLE bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    from_station TEXT NOT NULL,
    to_station TEXT NOT NULL,
    date TEXT NOT NULL,
    class TEXT NOT NULL
);
CREATE TABLE trains (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    train_name TEXT NOT NULL,
    from_station TEXT NOT NULL,
    to_station TEXT NOT NULL,
    departure TEXT NOT NULL,
    arrival TEXT NOT NULL,
    fare INTEGER NOT NULL
);
INSERT INTO trains (train_name, from_station, to_station, departure, arrival, fare) VALUES 
('Rajdhani Express', 'Delhi', 'Mumbai', '10:00 AM', '08:00 PM', 1500),
('Shatabdi Express', 'Delhi', 'Mumbai', '12:00 PM', '10:00 PM', 1200),
('Duronto Express', 'Delhi', 'Kolkata', '09:00 AM', '07:00 PM', 1600),
('Vande Bharat', 'Delhi', 'Chandigarh', '06:00 AM', '09:30 AM', 800);
