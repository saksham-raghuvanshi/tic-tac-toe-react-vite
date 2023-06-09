import React from "react";

// const Status = ({winner, gamingBoard}) => {

// // const {squares , isNext} = gamingBoard;


//     const noMoveLeft = gamingBoard.squares.every(squareValue => squareValue !==null);

//     const NextPlayer = gamingBoard.isNext ? 'X' : '0';
// //   const winnerplayer = winner ? <div>Winner Player is {winner}</div>: <div>Next Player is {NextPlayer}</div>;
  


// //React.fragment it basically represent empty element <> </> it is also react.fragment 
//   const renderStatus = () => {
//     if (winner){
//         return <React.Fragment>Winner is <span className={winner === 'X' ? 'text-green': 'text-orange'}>{winner}</span></React.Fragment>
//     }

//     if (!winner && noMoveLeft){
//         return <React.Fragment><span className="text-orange">Player 0</span> and <span className="text-green">Player X</span> tied</React.Fragment>
//     }

//     if (!winner && !noMoveLeft){
//         return <React.Fragment>Next player is <span className={isNext ? 'text-green': 'text-orange'}>{NextPlayer}</span></React.Fragment>
//     }
//   }
//   return (
//     <div className="status-message">
//       {renderStatus()}
      
//       </div>
      
      
      
    
  
//   )
// }

// export default Status



const Status = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;

  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';

  //   const winnerplayer = winner ? <div>Winner Player is {winner}</div>: <div>Next Player is {NextPlayer}</div>;


  const renderStatus = () => {
    if (winner) {
      return (

        //React.fragment it basically represent empty element <> </> it is also react.fragment 

        <React.Fragment>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </React.Fragment>
      );
    }

    if (!winner && noMovesLeft) {
      return (
        <React.Fragment>
          <span className="text-orange">O</span> and{' '}
          <span className="text-green">X</span> tied
        </React.Fragment>
      );
    }

    if (!winner && !noMovesLeft) {
      return (
        <React.Fragment>
          Next player is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </React.Fragment>
      );
    }

    return null;
  };

  return <h2 className="status-message">{renderStatus()}</h2>;
};

export default Status;