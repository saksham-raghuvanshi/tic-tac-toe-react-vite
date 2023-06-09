
import Square from './Square'


const Boards = ({squares, handleSquareClick}) => {


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
