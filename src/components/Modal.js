import React from 'react'

function Modal(props) {
    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='modal-title'>Tenzies!</h4>
                </div>
                <div className='modal-body'>
                    <p>No. of Rolls: {props.rollCount}</p>
                    <p>Time</p>
                </div>
                <div className='modal-footer'>
                    <button className='roll' onClick={props.newGame}>New Game</button>
                </div>
            </div>
        </div>
    )
}

export default Modal