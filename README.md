# To install this project in your device: 

1)  Run `npm install` in both `client` and `server` folders
2)  Import the .sql file located in `databases` folder.
Or, manually:
Create an SQL database with only one table `operations` which contains 4 columns with the following attributes:
    id: int AI PK
    concept: varchar(200)
    amount: varchar(50)
    date: varchar(100)
    type: varchar(45).
3) Open `./server/config.js` and fill it with your database's configuration.
4) Run `npm run start` in an `./abm-operaciones/client` terminal and `npm run devStart` in another `./abm-operaciones/server` terminal. 

