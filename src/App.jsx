import { useState } from 'react'
import './App.css'
import DiceComponent from './components/DiceComponent'
import Game from './classes/game'
import Player from './classes/player';
import Scoreboard from './components/ScoreboardComponent';

function App() {
  const [game, setGame] = useState(new Game(new Player("Player1"), new Player("Player2"))); //Might need to set the game to a new state to avoid this reseting the players state
  const [diceValue, setDiceValue] = useState(["","","","",""]);
  const [player, setPlayer] = useState(`${game.players[game.playersTurn].name}`);


  const rollValue = () => {
    setDiceValue(game.startTurn());
    console.log(game.players);
    game.players[game.playersTurn].scores[1].value += 1;
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
        <Scoreboard game={game}/>
        <h1>{player}'s Turn</h1>
        <DiceComponent dice={diceValue} game={game}/>
        {game.players[game.playersTurn].diceRollCount < 3 ? <button onClick={rollValue}> Roll Dice </button> : <button onClick={endTurn}> Finish Turn </button>}
      </div>
    </>
  )
}

export default App;
