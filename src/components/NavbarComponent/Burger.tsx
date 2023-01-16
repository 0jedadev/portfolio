import React, { useState } from 'react'
import styled from 'styled-components'
import RightNav from './RightNav';

interface props {
    open: boolean

}
const StyledBurger = styled.div`
width: 2rem;
height: 2rem;
z-index: 20;
display:none;
align-items: center;
div{
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }: props) => open ? '#000' : '#000'};
    border-radius: 5px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1){
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};}
&:nth-child(2){
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
   opacity:  ${({ open }) => open ? 0 : 1};
}
&:nth-child(3){
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    
}
}

@media (min-width: 301px) and (max-width: 768px) {
    display: flex;
justify-content: space-around;
flex-flow: column nowrap;
}
@media (max-width: 300px){
    display: flex;
justify-content: space-around;
flex-flow: column nowrap;
width: 1rem;
height: 1rem;

div{
    
    width: 1rem;
    height: 0.2rem;
    
}
    }

`
const Burger = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open} />
        </>
    )
}

export default Burger
