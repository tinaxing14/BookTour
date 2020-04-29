DROP DATABASE IF EXISTS trip_booking;

CREATE DATABASE trip_booking;

USE trip_booking;

CREATE TABLE trips (
    id int not null auto_increment PRIMARY KEY,
    tripname varchar(255) not null,
    detail varchar(1024),
    duration varchar(255)
);

CREATE TABLE prices (
    id int not null auto_increment,
    trip_id int not null,
    trip_date int not null,
    trip_availability int not null,
    price int not null,
    PRIMARY KEY(id),
    FOREIGN KEY(trip_id)
        REFERENCES trips(id)
);

INSERT INTO trips (tripname, detail, duration) VALUES ("Yosemite in a Day", "6:00 am Departure - Yosemite in a Day Tour from San Francisco
Pickup included", "6:00 am Departure - 6:00 AM");

INSERT INTO trips (tripname, detail, duration) VALUES ("Yellowstone in a Day", "9:00 am Departure - Yellowstone in a Day Tour from San Francisco
Pickup included", "9:00 am Departure - 6:00 AM");

INSERT INTO trips (tripname, detail, duration) VALUES ("Arches in a Day", "7:00 am Departure - Arches in a Day Tour from San Francisco
Pickup included", "7:00 am Departure - 6:00 AM");

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