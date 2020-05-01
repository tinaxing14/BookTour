DROP DATABASE IF EXISTS trip_booking;

CREATE DATABASE trip_booking;

USE trip_booking;

CREATE TABLE trips (
    id int not null auto_increment PRIMARY KEY,
    tripname varchar(255) not null,
    detail varchar(1024),
    duration varchar(255),
    cancelation int(4) not null,
    totalbooked int(8) not null
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

INSERT INTO trips (tripname, detail, duration, cancelation, totalbooked) VALUES ("Yosemite in a Day", "6:00 am Departure - Yosemite in a Day Tour from San Francisco
Pickup included", "6:00 am Departure - 6:00 AM" , 24, 3987);

INSERT INTO trips (tripname, detail, duration, cancelation, totalbooked) VALUES ("Yellowstone in a Day", "9:00 am Departure - Yellowstone in a Day Tour from San Francisco
Pickup included", "9:00 am Departure - 6:00 AM", 48, 2020);

INSERT INTO trips (tripname, detail, duration,cancelation, totalbooked) VALUES ("Arches in a Day", "7:00 am Departure - Arches in a Day Tour from San Francisco
Pickup included", "7:00 am Departure - 6:00 AM", 48, 6722);

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
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200711, 3, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200712, 3, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200713, 3, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200714, 3, 189);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200715, 40, 179);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200716, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200717, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200718, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200719, 20, 229);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200720, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200721, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200722, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200723, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200724, 40, 189);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200725, 0, 179);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200726, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200727, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200728, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200729, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200730, 40, 189);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200731, 40, 179);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200801, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200802, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200803, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200804, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200805, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200806, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200807, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200808, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200809, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200810, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200811, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200812, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200813, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200814, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200815, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200816, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200817, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200818, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200819, 40, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200820, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200821, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200822, 2, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200823, 2, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200824, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200825, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200826, 2, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200827, 2, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200828, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200829, 2, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200830, 2, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200831, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200901, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200902, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200903, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200904, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200905, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200906, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200907, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200908, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200909, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200910, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200911, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200912, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200913, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200914, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200915, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200916, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200917, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200918, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200919, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200920, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200921, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200922, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200923, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200924, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200925, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200926, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200927, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200928, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200929, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20200930, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201001, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201002, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201003, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201004, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201005, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201006, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201007, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201008, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201009, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201010, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201011, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201012, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201013, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201014, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201015, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201016, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201017, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201018, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201019, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201020, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201021, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201022, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201023, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201024, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201025, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201026, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201027, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201028, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201029, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201030, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201031, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201101, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201102, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201103, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201104, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201105, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201106, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201107, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201108, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201109, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201110, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201111, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201112, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201113, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201114, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201115, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201116, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201117, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201118, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201119, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201120, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201121, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201122, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201123, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201124, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201125, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201126, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201127, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201128, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201129, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201130, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201201, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201202, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201203, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201204, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201205, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201206, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201207, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201208, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201209, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201210, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201211, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201212, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201213, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201214, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201215, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201216, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201217, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201218, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201219, 0, 169);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201220, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201221, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201222, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201223, 0, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201224, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201225, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201226, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201227, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201228, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201229, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201230, 20, 199);
INSERT INTO prices (trip_id, trip_date, trip_availability, price) VALUES (1, 20201231, 20, 199);