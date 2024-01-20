/**
 * React imports
 */

import { useState } from "react";

/**
 * Main Component Export
 */
export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //   setIsEditing(!isEditing); // A shorter approach but is not recommended
    setIsEditing((wasEditing) => !wasEditing);

    // if (isEditing) setIsEditing(false);
    // else setIsEditing(true);
  }

  function handleInputChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" value={playerName} onChange={handleInputChange} />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{btnCaption} </button>
    </li>
  );
}
