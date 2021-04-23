import React, { useState } from 'react'
import styled from 'styled-components'
import { Info } from './header'
import ettermiddagen from '../img/ettermiddagen.svg'
import ettermiddagenannenfarge from '../img/ettermiddagenannenfarge.svg'
import { useHistory as useHerstory } from 'react-router-dom'

const Footer = () => {
    return (
        <Info
            style={{
                clear: 'both',
                position: 'relative',
            }}
            link1="https://www.instagram.com/dagenatifi"
            text1="Instagram"
            text2="Facebook"
            link2="https://www.facebook.com/dagenatifi"
            text3="Linkedin"
            link3="https://www.linkedin.com/dagenatifi"
        />
    )
}

export default Footer
