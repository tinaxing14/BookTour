FROM node:alpine
WORKDIR /src/app

COPY package.json .
RUN npm install

COPY . .
#first dot- everything in local directory
#second dot - virtual WORKDIR

EXPOSE 3000
CMD ["npm", "start"]

# docker build -t tripadvisor-traveler-booking .
# docker run -it -p 3000:3000 tripadvisor-traveler-booking