import React, {useState, useEffect} from 'react'
import dayjs from 'dayjs'

const Countdown = () => {

    const now = dayjs()
    const start = dayjs('2021-01-01')
    const ettermiddagen = dayjs('2021-04-30')
    const dager = start.diff('2021-04-30', 'day')
    const diff = now.diff('2021-04-30', 'day')
    const prosent = (1-Math.abs(diff)/Math.abs(dager))*100

    const [date, setDate] = useState("")

    const [count, setCount] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => {
            const now = dayjs()

            const seconds = Math.abs(now.diff("2021-04-30", "seconds"))
            const minutes = seconds / 60
            const hours = minutes / 60
            const days = hours / 24

            

            setDate(prev => {
                return ``
            })
        },1000)

        return () => clearInterval(interval)
    }, [])

    
    return(
        <div className="countdown">

            <div>
                <p>Møt bedrifter om  {date}</p>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count+1)}>
                    Click me
                </button>
            </div>

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