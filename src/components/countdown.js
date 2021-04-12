import React, {useState, useEffect} from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'

const Countdown = () => {

    const [date, setDate] = useState("")
    const [count, setCount] = useState(0)

    useEffect(() => {
            const interval = setInterval(() => {
            const now = dayjs()
            const ettermiddagen = dayjs('2021-04-30T12:00:00.000Z')

            const total =  ettermiddagen - now
            const seconds = Math.floor((total/1000) %60)
            const minutes = Math.floor((total/1000/60) %60)
            const hours = Math.floor((total/(1000*60*60)) %24)
            const days = Math.floor(total/(1000*60*60*24))

            
            setDate(prev => {
                return `${days} dager ${hours} timer ${minutes} minutter ${seconds} sekunder`
            })
        },1000)

        return () => clearInterval(interval)
    }, [])

    
    return(
        <div className="countdown">

            <div>
                <Number>{date}</Number>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count+1)}>
                    Click me
                </button>
            </div>
        </div>
    )
    
    
}

const Number = styled.p`
    font-size: 1.5rem;
    color: rgba(253, 120, 140, 1);
    margin: 0;    
`

export default Countdown;