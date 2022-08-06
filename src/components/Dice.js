import React from 'react'

function Dice(props) {
    const styles = {
        background: props.isHeld && "#59E391"
    }

    return (
        <button onClick={props.holdDice} style={styles}>{props.num}</button>
    )
}

export default Dice