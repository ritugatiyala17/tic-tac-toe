/**
 * React imports
 */

import { useState } from "react";

/**
 * Component Imports
 */

import Player from "./components/Player";

/**
 * Main Component Export
 */
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player1" symbol="X" />
          <Player initialName="Player2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
