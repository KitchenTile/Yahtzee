import React, { useState } from "react";
import "../styles/Scoreboard.css"


const Scoreboard = ({game}) => {
    return(
        <div className="ScoreboardContainer">
            {game.players.map((player, index) => (
                <div key={index}>
                    <h1>{player.name}'s Scoreboard</h1>
                    <ul className="SbList" >
                        {player.scores.map((score, scoreiIndex) => (
                            <li className="SbListItem" key={scoreiIndex}>
                                {score.key}{score.value}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Scoreboard;