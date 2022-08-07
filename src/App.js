import React from "react";
import Dice from "./components/Dice";
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'

function App() {

  const [diceState, setDiceState] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [rollCount, setRollCount] = React.useState(1)

  React.useEffect(() => {
    const allHeld = diceState.every(die => die.isHeld)
    const firstValue = diceState[0].value
    const allSameValue = diceState.every(die => die.value === firstValue)

    if (allHeld && allSameValue) {
      setTenzies(true)
    }

  }, [diceState])

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * (6 - 1 + 1) + 1),
      isHeld: false,
      id: nanoid()
    }
  }

  function rollDice() {
    if (!tenzies) {
      setDiceState(oldDice => oldDice.map(die => {
        return die.isHeld ? die : generateNewDie()
      }))
      setRollCount(prevRollCount => prevRollCount + 1)
    } else {
      setTenzies(false)
      setDiceState(allNewDice)
      setRollCount(1)
    }

    console.log(rollCount)
  }

  function holdDice(id) {
    setDiceState(oldDice => oldDice.map(die => {
      return die.id === id ? {
        ...die, isHeld: !die.isHeld
      } : die
    }))
  }

  const diceElem = diceState.map(dice => <Dice key={dice.id} num={dice.value} isHeld={dice.isHeld} holdDice={() => holdDice(dice.id)} />)

  return (
    <div className="App">
      <main>
        {tenzies && <Confetti />}
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice">
          {diceElem}
        </div>
        <button className='roll' onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
      </main>
    </div>
  );
}

export default App;
