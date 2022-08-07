import React from 'react'

function Dice(props) {
    const styles = {
        background: props.isHeld && "#59E391"
    }

    function generateCssClass() {
        switch (props.num) {
            case 1:
                return "first-face"
            case 2:
                return "second-face"
            case 3:
                return "third-face"
            case 4:
                return "fourth-face"
            case 5:
                return "fifth-face"
            case 6:
                return "fourth-face"
            default:
                return ""
        }
    }

    function generateDieFace() {
        switch (props.num) {
            case 1:
                return <span className='dot'></span>
            case 2:
                return (
                    <>
                        <span className='dot'></span>
                        <span className='dot'></span>
                    </>
                )
            case 3:
                return (
                    <>
                        <span className='dot'></span>
                        <span className='dot'></span>
                        <span className='dot'></span>
                    </>
                )
            case 4:
                return (
                    <>
                        <div className='column'>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>
                        <div className='column'>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>
                    </>
                )
            case 5:
                return (
                    <>
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
                    </>
                )
            case 6:
                return (
                    <>
                        <div className='column'>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>
                        <div className='column'>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>
                    </>
                )
            default:
                return ""
        }
    }

    return (
        // <button onClick={props.holdDice} style={styles}>{props.num}</button>
        // Dice face test
        <button className={generateCssClass()} onClick={props.holdDice} style={styles} >
            {generateDieFace()}
        </button >
    )
}

export default Dice