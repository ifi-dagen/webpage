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
        />
    )
}

export default Footer
