import React, { useState, useRef } from "react";
import "../styles/DiceStyles.css"


const DiceComponent = ({ dice }) => {

    const diceArray = () =>{
        const arr = [];
        dice.forEach(dice => {
            arr.push(false);
        })
        return arr;
    }

    const [selectedDice, setSelectedDice] = useState(diceArray)
    
    const handleClick = (index) => {
        let newSelectedDice = [...selectedDice];

        if (!newSelectedDice[index]){              
            newSelectedDice[index] = true;
        } else {
            newSelectedDice[index] = false;
        }
        setSelectedDice(newSelectedDice);

        
    }

    return (
        <div className="diceContainer">
            {dice.map((value, index) => (
                <div className={selectedDice[index] ? "dice selected" : "dice not-selected"} key={index} onClick={() => handleClick(index)}>
                    <h2>{index + 1}</h2>
                    <h3>{value}</h3>
                    
                </div>
            ))}
        </div>
    )
}

export default DiceComponent;