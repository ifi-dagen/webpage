import React from 'react'
import { bool, func } from 'prop-types';
import styled from 'styled-components'

const Burger = ({ open, setOpen, ...props }) => {
    const isExpanded = open ? true : false;

    return (
        <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
            <span />
            <span />
            <span />
        </StyledBurger>
    )

   
}

 Burger.propTypes = {
        open: bool.isRequired,
        setOpen: func.isRequired,
    };

const StyledBurger = styled.button`
    position: absolute;
    top: 5%;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    z-index: 10;

    cursor: pointer;
    
    &:focus {
    outline: thin dotted;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? 'black' : 'whitesmoke'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
    
  }
`

export default Burger;
