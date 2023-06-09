

const History = ({history, moveTo}) => {
  return (
    <div className="history-wrapper">


        <ul className="history">
            {   //pass array element index value kuch nhi aur index pass
                history.map((_, index) =>(
                    <li key={index}>
                    <button type ="button" className='btn-move'   onClick={()=> moveTo(index)} >{index=== 0 ? <div>Go to game start</div>: <div>Go to Move #{index} </div>}</button>
                    </li>
                )

                )
            }
        </ul>
      
    </div>
  )
}

export default History
