DROP DATABASE IF EXISTS trip_booking;

CREATE DATABASE trip_booking;

USE trip_booking;

CREATE TABLE trips (
    id int not null auto_increment PRIMARY KEY,
    tripname varchar(255) not null,
    detail varchar(1024),
    duration varchar(255),
    cancelation int(4) not null
);

CREATE TABLE prices (
    id int not null auto_increment,
    trip_id int not null,
    trip_date int not null,
    trip_availability int not null,
    price int(4) not null,
    PRIMARY KEY(id),
    FOREIGN KEY(trip_id)
        REFERENCES trips(id)
);

INSERT INTO trips (tripname, detail, duration, cancelation) VALUES ("Yosemite in a Day", "6:00 am Departure - Yosemite in a Day Tour from San Francisco
Pickup included", "6:00 am Departure - 6:00 AM" , 24);

INSERT INTO trips (tripname, detail, duration, cancelation) VALUES ("Yellowstone in a Day", "9:00 am Departure - Yellowstone in a Day Tour from San Francisco
Pickup included", "9:00 am Departure - 6:00 AM", 48);

INSERT INTO trips (tripname, detail, duration,cancelation) VALUES ("Arches in a Day", "7:00 am Departure - Arches in a Day Tour from San Francisco
Pickup included", "7:00 am Departure - 6:00 AM", 48);

INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200601, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200602, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200603, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200604, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200605, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200606, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200607, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200608, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200609, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200610, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200611, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200612, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200613, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200614, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200615, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200616, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200617, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200618, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200619, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200620, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200621, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200622, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200623, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200624, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200625, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200626, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200627, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200628, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200629, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200630, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200701, 20, 229);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200702, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200703, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200704, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200705, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200706, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200707, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200708, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200709, 20, 229);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200710, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200711, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200712, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200713, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200714, 40, 189);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200715, 40, 179);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200716, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200717, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200718, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200719, 20, 229);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200720, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200721, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200722, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200723, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200724, 40, 189);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200725, 40, 179);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200726, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200727, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200728, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200729, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200730, 40, 189);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200731, 40, 179);
