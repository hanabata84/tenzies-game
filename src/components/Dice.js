import React from 'react'

function Dice(props) {
    const styles = {
        background: props.isHeld && "#59E391"
    }

    return (
        // <button onClick={props.holdDice} style={styles}>{props.num}</button>
        // Dice face test
        <button className='fifth-face' onClick={props.holdDice} style={styles}>
            <div className='column'>
                <span className='dot'></span>
                <span className='dot'></span>
            </div>
            <div className='column'>
                <span className='dot'></span>
            </div>
            <div className='column'>
                <span className='dot'></span>
                <span className='dot'></span>
            </div>
        </button>
    )
}

export default Dice