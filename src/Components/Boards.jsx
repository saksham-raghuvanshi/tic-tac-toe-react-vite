import { useState } from 'react'
import Square from './Square'


const Boards = () => {
// create array with NULL value 
  const [squares, setSquares]= useState(Array(9).fill(null));
 
//introducing player here
  const [isNext, setIsNext]=useState(false);

  console.log(squares);
  
  const handleSquareClick = clickedposition => {
  //null , 'X' , '0' if squares value truthy then it return same 
    if(squares[clickedposition]){
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

  const renderSquare = position => {
    return (
    <Square 
    value={squares[position]} 
    onClick={() => handleSquareClick(position)}
    />
    );
  };

  return (
    <div className='board'>  
      
    <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        
        {/* <Square value={squares[0]} onClick={()=>handleSquareClick(0)}/>
        <Square value={squares[1]} onClick={()=>handleSquareClick(1)}/>
        <Square value={squares[2]} onClick={()=>handleSquareClick(2)}/> */}
    </div>
    
    <div className='board-row'>
    {renderSquare(3)}
    {renderSquare(4)}
    {renderSquare(5)}
    {/* <Square value={squares[3]} onClick={()=>handleSquareClick(3) />
    <Square value={squares[4]} onClick={()=>handleSquareClick(4)/>
    <Square value={squares[5]} onClick={()=>handleSquareClick(5)/> */}
    </div>
    
    
    <div className='board-row'>
    {renderSquare(6)}
    {renderSquare(7)}
    {renderSquare(8)}
    {/* <Square value={squares[6]} onClick={()=>handleSquareClick(6)/>
    <Square value={squares[7]} onClick={()=>handleSquareClick(7)/>
    <Square value={squares[8]} onClick={()=>handleSquareClick(8)/> */}
    </div>
    </div>

  )
}

export default Boards
