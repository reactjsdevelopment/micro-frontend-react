import * as React from 'react';
import { useCallback, useState } from 'react';

export function UseCallbackPlayer() {
  const [player, setPlayer] = useState("");
  const [players, setPlayers] = useState(["Messi", "Ronaldo", "Laspada"]);

  function handleChangeInput(event) {
    setPlayer(event.target.value);
  }
  function handleAddPlayer() {
    setPlayers(players.concat(player));
  }

  // solution
  const handleRemovePlayer = useCallback(player => {
    setPlayers(players.filter((p) => p !== player));
  }, [players])

// problem
//  const handleRemovePlayer = (player => {
//    console.log(player)
//     setPlayers(players.filter((p) => p !== player));
//   })

  return (
    <div>
      <input onChange={handleChangeInput} />
      <button onClick={handleAddPlayer}>Add Player</button>
      <PlayerList players={players} handleRemovePlayer={handleRemovePlayer} />
    </div>
  );
}

function PlayerList({ players, handleRemovePlayer }) {
  console.log( players, handleRemovePlayer)
  return (
    <ul>
      {players.map((player) => (
        <li key={player} onClick={() => handleRemovePlayer(player)}>
          {player}
        </li>
      ))}
    </ul>
  );
}