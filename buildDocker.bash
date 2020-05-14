
# build the image and run containers from the image
docker-compose up --build -d

# execute command inside db container (without "going inside" it)
docker exec travelerweb node db/dbseed.js -d

# Add the changes made inside the container to the image
docker commit travelerweb tripadvisorbooking
docker commit travelerdb tripadvisorsql 

# Push new images to docker hub
docker tag tripadvisorbooking:latest tinaxing414/tripadvisor-traveler-booking:tripweb
docker push tinaxing414/tripadvisor-traveler-booking:tripweb

docker tag tripadvisorsql:latest tinaxing414/tripadvisor-traveler-booking:tripdb
docker push tinaxing414/tripadvisor-traveler-booking:tripdb

