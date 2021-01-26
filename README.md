# To install this project in your device: 

1)  Run `npm install`
2) Create an SQL database with only one table `operations` which contains 4 columns with the following attributes:
    id: int AI PK
    concept: varchar(200)
    amount: varchar(50)
    date: varchar(100)
    type: varchar(45).
Or import the .sql file located in `databases` folder.

3) Open `./server/index.js` and configure `db` constant with your database's cfg.
4) Run `npm run start` in an `./abm-operaciones/client` terminal and `npm run devStart` in another `./abm-operaciones/server` terminal. 

