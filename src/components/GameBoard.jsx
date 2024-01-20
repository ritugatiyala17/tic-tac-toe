import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ activePlayerSymbol, togglePlayer }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex, player) {
    setGameBoard((preGameBoardState) => {
      const updatedBoard = [
        ...preGameBoardState.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = player;
      return updatedBoard;
    });
    togglePlayer();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() =>
                    handleSelectSquare(rowIndex, colIndex, activePlayerSymbol)
                  }
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
