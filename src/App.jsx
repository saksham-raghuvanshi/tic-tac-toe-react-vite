
import { useState } from "react"
import Boards from "./Components/Boards"
import { calculateWinner } from "../Winner";


import "./Styles/styles.scss"
import Status from "./Components/Status";

function App() {



  

  //in react we can't use like javascript we need to defined state
 //concept called re-renders : when the component repainted on the webpage
 //use state always triggers a componemt to renders
// render is isolate they don't know about other render
//import useState  
  // let counter =1;

  // const onBtnClick =()=>{
  //   console.log('hello');
  //   counter=counter+1;
  // };
// const [counter, setCounter]=useState(1);
// console.log('hello');
// const onBtnClick =()=>{
//    setCounter(currentCounter =>{
//     return currentCounter+1;
//    });
//   };

// create array with NULL value 
  const [squares, setSquares]= useState(Array(9).fill(null));
 
//introducing player here
  const [isNext, setIsNext]=useState(false);

  console.log(squares);
  
  const winner = calculateWinner(squares);
  
  
  
  const handleSquareClick = clickedposition => {
  //null , 'X' , '0' if squares value truthy then it return same and winner
    if(squares[clickedposition] || winner){
      return;
    }

    setSquares(currentSquares =>{
      return currentSquares.map((squareValue, position)=>{
        if(clickedposition === position){
          return isNext? 'X' : '0';
        }

        return squareValue;

      });
    });


    setIsNext((currentisNext) => !currentisNext);



  };


  return (
    <div className="app">
      {/* <div>
        <button onClick={
          onBtnClick
        }>Click me please</button>
        <>{counter}</ div>
      </div> */}

    
<Status winner={winner} isNext={isNext} squares={squares}/>
            <Boards squares={squares} handleSquareClick={handleSquareClick}/>
        
        
    </div>
  )
}

export default App
