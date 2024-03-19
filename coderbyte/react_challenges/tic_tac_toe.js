/**
 * Front-end Challenge
 * 
 * We provided some simple React template code. Your goal is to create a functioning Tic Tac Toe game.
 * It should work the following way: the first player to go places an X anywhere on the board by clicking a square,
 * and then the next player will be able to place an O, and it continues alternating like this every turn.
 * 
 * You should also implement a function to determine if any player won by getting 3 X's or O's in a diagonal, horizontal, or vertical row.
 * If there is a winner, display a message at the top. If nobody wins, then do not display any message.
 * Finally, you should also implement the reset function that resets the entire board.
 * You should also not be able to override the other players move during the game.
 * 
 * You are free to add classes and styles, but make sure you leave the component ID's and clases provided as they are.
 * Submit your code once it is complete and our system will validate your output.
 */

import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

function Square({ value, onClick }) {
  return (
    <button
      className="square"
      style={squareStyle}
      onClick={onClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const onSquareClick = (i) => {
    if (squares[i] || winner) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const onClickReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  const calculateWinner = (squaresArr) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squaresArr[a] && squaresArr[a] === squaresArr[b] && squaresArr[a] === squaresArr[c]) {
        setWinner(squaresArr[a]);
        return squaresArr[a];
      }
    }
    return null;
  }

  useEffect(() => {
    calculateWinner(squares);
  }, [squares]);


  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{xIsNext ? 'X' : 'O'}</span></div>
      {
        winner && (
          <div id="winnerArea" className="winner" style={instructionsStyle}>
            Winner: <span>{winner}</span>
          </div>
        )
      }
      <button style={buttonStyle} onClick={onClickReset}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square value={squares[0]} onClick={() => onSquareClick(0)} />
          <Square value={squares[1]} onClick={() => onSquareClick(1)} />
          <Square value={squares[2]} onClick={() => onSquareClick(2)} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value={squares[3]} onClick={() => onSquareClick(3)} />
          <Square value={squares[4]} onClick={() => onSquareClick(4)} />
          <Square value={squares[5]} onClick={() => onSquareClick(5)} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value={squares[6]} onClick={() => onSquareClick(6)} />
          <Square value={squares[7]} onClick={() => onSquareClick(7)} />
          <Square value={squares[8]} onClick={() => onSquareClick(8)} />
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Game />);