import React, {useState, useEffect} from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'

const Countdown = () => {

    const [date, setDate] = useState("")

    useEffect(() => {
            const interval = setInterval(() => {
            const now = dayjs()
            const ettermiddagen = dayjs('2021-04-30T15:00:00.000Z')

            const total =  ettermiddagen - now
            const seconds = Math.floor((total/1000) %60)
            const minutes = Math.floor((total/1000/60) %60)
            const hours = Math.floor((total/(1000*60*60)) %24)
            

            
            setDate(prev => {
                return ` ${hours}t ${minutes}m ${seconds}s`
            })
        },1000)

        return () => clearInterval(interval)
    }, [])

    
    return(
        <div className="countdown" style={{display: "flex", gridArea: 'countdown', alignItems: "center",
        justifyContent: "center"}}>

            <div>
                
                <Number>Ettermiddagen skjer nå! {date}</Number>
                
            </div>
        </div>
    )
    
    
}

const Number = styled.p`
    font-size: 2rem;
    font-weight: bold;
    font-style: italic;
    color: #99d98c;
    margin: 0;    
`

export default Countdown;