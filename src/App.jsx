/**
 * React imports
 */

import { useState } from "react";

/**
 * Component Imports
 */

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

/**
 * Data
 */

import { WINNING_COMBINATIONS } from "./winning-combinations";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
/**
 * Main Component Export
 */
function App() {
  const [gameTurns, setGameTurns] = useState([]);

  let activePlayer = deriveActivePlayer(gameTurns);

  // Bad solution #################

  let winner = null;
  let isGameOver = false;
  if (gameTurns.length > 4) {
    for (const combination of WINNING_COMBINATIONS) {
      // console.log("combination1", combination, gameTurns);
      let firstSquareCombination = gameTurns.find(
          (turn) =>
            turn.square.row === combination[0].row &&
            turn.square.col === combination[0].column
        ),
        secondSquareCombination = gameTurns.find(
          (turn) =>
            turn.square.row === combination[1].row &&
            turn.square.col === combination[1].column
        ),
        thirdSquareCombination = gameTurns.find(
          (turn) =>
            turn.square.row === combination[2].row &&
            turn.square.col === combination[2].column
        );

      // console.log("firstSquareCombination", firstSquareCombination);
      // console.log("secondSquareCombination", secondSquareCombination);
      // console.log("thirdSquareCombination", thirdSquareCombination);

      if (
        firstSquareCombination &&
        secondSquareCombination &&
        thirdSquareCombination &&
        firstSquareCombination.player == secondSquareCombination.player &&
        secondSquareCombination.player == thirdSquareCombination.player
      ) {
        winner = firstSquareCombination.player;
        console.log("Winner winner");
        console.log("We have a winner - ", winner);
      }
      if (winner) {
        isGameOver = true;
        break;
      }
    }
    if (!winner) {
      isGameOver = true;
      console.log("Nobody wins!!");
    }
  }

  // Bad Solution end #########################

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer,
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {winner ? <div>Winner winner winner</div> : null}
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
