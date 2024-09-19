import React, { useState } from "react";
import "../styles/DiceStyles.css"


const DiceComponent = ({ dice }) => {
    return (
        <div className="diceContainer">
            {dice.map((value, index) => (
                <div className="dice" key={index}>
                    <h2>{index + 1}</h2>
                    <h3>{value}</h3>
                    
                </div>
            ))}
        </div>
    )
}

export default DiceComponent;