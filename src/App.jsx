import { useState } from 'react'
import './App.css'
import DiceComponent from './components/DiceComponent'
import Game from './classes/game'
import Player from './classes/player';

function App() {
  const [game, setGame] = useState(new Game(new Player("Player1"), new Player("Player2")));
  const [diceValue, setDiceValue] = useState(["","","","",""]);
  const [player, setPlayer] = useState(`${game.players[game.playersTurn].name}`);


  const rollValue = () => {
    setDiceValue(game.startTurn());
    console.log(game.players)
  }

  const endTurn = () => {
    game.endTurn();
    setDiceValue(["","","","",""]);
    setPlayer(`${game.players[game.playersTurn].name}`)
  }


  return (
    <> 
      <div>
        <h1>Yahtzee</h1>
        <h1>{player}'s Turn</h1>
        <DiceComponent dice={diceValue}/>
        {game.players[game.playersTurn].diceRollCount < 3 ? <button onClick={rollValue}> Roll Dice </button> : <button onClick={endTurn}> Finish Turn </button>}
      </div>
    </>
  )
}

export default App;
