import { useState, useEffect } from "react";
import Dice from "./components/Dice";
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'
import Modal from "./components/Modal";

function App() {

  const [diceState, setDiceState] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [rollCount, setRollCount] = useState(0)
  const [isActive, setIsActive] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [time, setTime] = useState(0)

  useEffect(() => {
    let interval = null

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval)
    }

  }, [isActive, isPaused])

  useEffect(() => {
    const allHeld = diceState.every(die => die.isHeld)
    const firstValue = diceState[0].value
    const allSameValue = diceState.every(die => die.value === firstValue)

    if (allHeld && allSameValue) {
      setTenzies(true)
      setIsPaused(true)
    }

  }, [diceState])

  function timer() {
    let min = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
    let sec = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
    let milisec = ("0" + Math.floor((time / 10) % 100)).slice(-2)
    let timeStr = `${min}:${sec}.${milisec}`
    return timeStr
  }
  timer()

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
    setDiceState(oldDice => oldDice.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))
    setRollCount(prevRollCount => prevRollCount + 1)
  }

  function newGame() {
    setTenzies(false)
    setDiceState(allNewDice)
    setRollCount(0)
    setIsPaused(false)
    setTime(0)
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
        {tenzies && <Modal rollCount={rollCount} newGame={newGame} timeStr={timer()} />}
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice">
          {diceElem}
        </div>
        <button className='roll' onClick={rollDice}>Roll</button>
      </main>
    </div>
  );
}

export default App;
