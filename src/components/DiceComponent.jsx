import React, { useState } from "react";
import "../styles/DiceStyles.css"


const DiceComponent = ({ dice, game }) => {

    const diceArray = () =>{
        const arr = [];
        dice.forEach(dice => {
            arr.push(false);
        })
        return arr;
    }

    const [selectedDice, setSelectedDice] = useState(diceArray);
    
    const handleClick = (index, value) => {
        let newSelectedDice = [...selectedDice];

        if (!newSelectedDice[index]){              
            newSelectedDice[index] = true;
        } else {
            newSelectedDice[index] = false;
        }
        setSelectedDice(newSelectedDice);

        if (value) {
            game.dice[index].selected = true;
            game.dice[index].selectedValue = value;
            console.log(game.dice[index])
            console.log(game.dice[index].selectedValue)
            game.heldDice.push(game.dice[index]);
            game.dice.splice(index, 1);
            console.log("Kept dice: " + game.heldDice[0].selectedValue)
            console.log(game.dice)
        }

        console.log(game.players[0].name)
    }

    return (
        <div className="diceContainer">
            {dice.map((value, index) => (
                <div className={selectedDice[index] ? "dice selected" : "dice not-selected"} key={index} onClick={() => handleClick(index, value)}>
                    <h2>{index + 1}</h2>
                    <h3>{value}</h3>
                    
                </div>
            ))}
        </div>
    )
}

export default DiceComponent;