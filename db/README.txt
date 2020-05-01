- To generate data in database:

step 1 - in root directory, run npm install to install all dependencies.
step 2 - in db directory, create a config.js file (refer to configExample.js) to connect to mysql DB.
step 3 - in root directory, run command "npm run seed" to generate tables.
step 4 - in root directory, run command "npm run DBseed" to insert data. After seeing data insertion complete message, go to mysql to check the content.