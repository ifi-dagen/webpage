import React from 'react'
import dayjs from 'dayjs'

const Countdown = () => {

    const now = dayjs()
    const start = dayjs('2021-01-01')
    const dager = start.diff('2021-04-30', 'day')
    const diff = now.diff('2021-04-30', 'day')
    const prosent = (1-Math.abs(diff)/Math.abs(dager))*100
    return(
        <div className="countdown">
            <h2> Dager til ettermiddagen: {Math.abs(diff)} </h2>
            <div style={{
                width: "100%",
                backgroundColor: "rgba(253, 120, 140, 0.5)",
                borderRadius: "0.3rem",
                overflow: 'hidden',
            }}>
                <div style={{
                    width: `${prosent}%`,
                    height: 50,
                    backgroundColor: "rgba(253, 120, 140, 1)",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                   <div style={{
                       backgroundColor: 'transparent',
                       textAlign: 'center',
                       color: '#231F20'
                   }}> {Math.abs(prosent.toFixed(0))}% ferdig </div>
                </div>
                
                </div>
        </div>
    )
}

export default Countdown;