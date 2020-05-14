FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD: 'zhegemimaoo'
ENV MYSQL_DATABASE: 'trip_booking'
ENV DATABASE_HOST: db
ENV MYSQL_USER: 'root'
ADD schema.sql /docker-entrypoint-initdb.d

EXPOSE 3306