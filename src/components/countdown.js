import React, {useState, useEffect} from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'

const Countdown = () => {

    const [date, setDate] = useState("")

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
        <div className="countdown" style={{display: "flex", gridArea: 'countdown', alignItems: "center",
        justifyContent: "center"}}>

            <div>
                <Number>{date}</Number>
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