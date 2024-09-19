import { useState } from 'react'
import './App.css'
import DiceComponent from './components/DiceComponent'
import Game from './classes/game'
import Player from './classes/player';

function App() {
  const [game, setGame] = useState(new Game(new Player("Player1"), new Player("Player2")));
  const [diceValue, setDiceValue] = useState(["","","","",""]);

  const rollValue = () => {
    setDiceValue(game.startTurn());
    console.log(diceValue);
  }

  return (
    <>
      <div>
        <h1>Yahtzee app!</h1>
        <DiceComponent dice={diceValue}/>
        <button onClick={rollValue}>Roll Dice</button>
      </div>
    </>
  )
}

export default App;
