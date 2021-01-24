import React, {useState, useEffect} from 'react'
import Axios from 'axios'

function Home() {
    const [operationsList, setOperationsList] = useState([])
    const [totalIncome, setTotalIncome] = useState(0)
    const [totalOutcome, setTotalOutcome] = useState(0)

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get')
        .then((response) => {
          setOperationsList(response.data)
        })
      }, [])
      
    useEffect(() => {
      (operationsList.filter(activity => (activity.type === 'in'))).forEach(incomeOperation => {
        setTotalIncome(prevIncome => prevIncome + Number(incomeOperation.amount))
      })
    }, [operationsList])

    useEffect(() => {
      (operationsList.filter(activity => (activity.type === 'out'))).forEach(outcomeOperation => {
        setTotalOutcome(prevOutcome => prevOutcome + Number(outcomeOperation.amount))
      })
    }, [operationsList])
    

    return (
        <div>
            <h1>Home!</h1>
            <h3>Balance: </h3>
            {totalIncome - totalOutcome}
            <h3></h3>
            {operationsList.slice(operationsList.length - 10, operationsList.length).map((val) => {
          return (
            <div className="card" key={val.id}>
          <h1>{val.concept}</h1>
          <p>{val.amount}</p>
          <p>{val.type}</p> 
          </div>
        )})}
        </div>
    )
}

export default Home
