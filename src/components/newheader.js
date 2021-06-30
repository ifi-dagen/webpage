import React from 'react'
import styled from 'styled-components'

const newHeader = () => {
    return(
        <div className="header">
                <span/>
                <span/>
                <Dagen src={require('../img/dagen_logo.svg')} alt="dagen@ifi logo" />
        </div>
    )
} 

const Dagen = styled.img`
    right: 0px;
    width: 200px;
    height: 100px;
    
`
export default newHeader;