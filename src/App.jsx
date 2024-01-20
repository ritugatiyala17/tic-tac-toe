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
 * Main Component Export
 */
function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function togglePlayer() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
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
        <GameBoard
          activePlayerSymbol={activePlayer}
          togglePlayer={togglePlayer}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;
