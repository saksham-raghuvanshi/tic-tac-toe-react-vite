
import { useState } from "react"
import Boards from "./Components/Boards"
import { calculateWinner } from "../Winner";


import "./Styles/styles.scss"
import Status from "./Components/Status";
import History from "./Components/History";


const NEW_GAME =[{squares: Array(9).fill(null), isNext: false}];
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

// History
const [history, setHistory] = useState(NEW_GAME);
const [currentmove, setcurrentmove]= useState(0);

const gamingBoard=history[currentmove];





  

// create array with NULL value 
  const [squares, setSquares]= useState(Array(9).fill(null));
 
//introducing player here
  // const [isNext, setIsNext]=useState(false);

  console.log(squares);
  
  // const winner = calculateWinner(gamingBoard.squares);
  const winner = calculateWinner(gamingBoard.squares);
  
  
  console.log(history, currentmove);
  // const handleSquareClick = clickedposition => {
  // //null , 'X' , '0' if squares value truthy then it return same and winner
  //   if(squares[clickedposition] || winner){
  //     return;
  //   }


  const handleSquareClick = clickedposition => {
    //null , 'X' , '0' if squares value truthy then it return same and winner
      if(gamingBoard.squares[clickedposition] || winner){
        return;
      }

    // setHistory(currentSquares =>{
    //   return currentSquares.map((squareValue, position)=>{
    //     if(clickedposition === position){
    //       return isNext? 'X' : '0';
    //     }

    //     return squareValue;

    //   });
    // });


    
setHistory(currentHistory =>{
  const isTraversing = currentmove + 1 !== currentHistory.length;

  const lastGamingState = isTraversing ? currentHistory[currentmove]: history[history.length -1];


  const nextSquareState = lastGamingState.squares.map((squareValue, position)=>{
    if(clickedposition === position){
      return lastGamingState.isNext? 'X' : '0';
    }

    return squareValue;

  });

  const base = isTraversing
  ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
  : currentHistory;

  return base.concat({squares: nextSquareState, isNext: !lastGamingState.isNext,})
});



 






    // setIsNext((currentisNext) => !currentisNext);

    setcurrentmove(move => move + 1)



  };

  //Move to currentmove
  const moveTo = move => {
    setcurrentmove(move);
  }


  const onNewGameStart = () => {
    setHistory(NEW_GAME);
    setcurrentmove(0);
  }

  return (
    <div className="app">
      <h1>TIC <span className="text-green">TAC</span> TOE</h1>
      {/* <div>
        <button onClick={
          onBtnClick
        }>Click me please</button>
        <>{counter}</ div>
      </div> */}



<Status winner={winner} gamingBoard={gamingBoard} />
      
      <Boards
        squares={gamingBoard.squares}
        handleSquareClick={handleSquareClick}
      />

      <button type="button" onClick={onNewGameStart} className="btn-reset ${winner ? 'active':''}">Start new Game</button>
      <h2>Current game History</h2>
      <History history={history} moveTo={moveTo}/>
        <div className="bg-balls"/>
    </div >
  )
}

export default App
