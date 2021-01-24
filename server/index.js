const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Password123",
    database: "abm_operaciones"
})


const port = 3001

app.use(cors());

app.use(express.json())

app.use(bodyParser.urlencoded({extended: true}))


app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM operations"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.post('/api/insert', (req, res) =>{

    const operationConcept = req.body.operationConcept
    const operationAmount = req.body.operationAmount
    const operationDate = req.body.operationDate
    const operationType = req.body.operationType

    const sqlInsert = "INSERT INTO `operations` (`concept`, `amount`, `date`, `type`) VALUES (?,?,?,?);"
    db.query(sqlInsert, [operationConcept, operationAmount, operationDate, operationType], (err, result) => {
        console.log(err)
    })
})

app.delete('/api/delete/:operationId', (req, res) => {
    const name = req.params.operationId
    const sqlDelete = 'DELETE FROM operations WHERE id = ?'

    db.query(sqlDelete, name, (err, result) => {
        if(err) console.log(err)
    })
})

app.put('/api/update', (req, res) => {
    const name = req.body.operationConcept
    const abb = req.body.operationAmount
    const sqlUpdate = 'UPDATE operations SET amount = ? WHERE concept = ?'

    db.query(sqlUpdate, [abb, name], (err, result) => {
        console.log(err)
    })
})

app.listen(port, () => {
    console.log('running on port ' + port)
})