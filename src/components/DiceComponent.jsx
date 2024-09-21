import React, { useState } from "react";
import "../styles/DiceStyles.css"


const DiceComponent = ({ dice }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [diceState, setDiceState] = useState("dice not-selected");
    
    const handleClick = () => {
        if (isSelected) {
            setDiceState("dice not-selected")
        } else {
            setDiceState("dice selected")
        }
        setIsSelected(!isSelected);
    }

    return (
        <div className="diceContainer">
            {dice.map((value, index) => (
                <div className={diceState} id={index} onClick={handleClick}>
                    <h2>{index + 1}</h2>
                    <h3>{value}</h3>
                    
                </div>
            ))}
        </div>
    )
}

export default DiceComponent;