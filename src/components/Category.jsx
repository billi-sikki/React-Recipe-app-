import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiFastNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


import React from 'react'

const Category = () => {
  return (
    <List>
        <Slink to={'/Cuisine/Italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
        </Slink>
        <Slink to={'/Cuisine/American'}>
        <FaHamburger/>
        <h4>American</h4>
        </Slink >
        <Slink to={'/Cuisine/Thai'}>
        <GiFastNoodles/>
        <h4>Thai</h4>
        </Slink >
        <Slink to={'/Cuisine/Japanese'}>
        <GiChopsticks/>
        <h4>Japanese</h4>
        </Slink>
    </List>
  )
}

const List= styled.div`
display:flex;
justify-content:center;
margin:2rem 2rem;
`;

const Slink= styled(NavLink)`
display: flex;
flex-direction:column;
background: linear-gradient(35deg, #494949, #313131);
width:7rem;
height:7rem;
cursor:pointer;
transform: scale(0.7);
justify-content:center;
text-decoration:none;
align-items:center;
border-radius:50%;
margin-right:2rem;

h4{
color:white;
font-size:1rem;
}

svg{
color:white;
font-size:2.5rem;
}

&.active{
background: linear-gradient(to right, #f27121, #e94057);

svg{
color:white;
}

h4{
color:white;
}

}`

export default Category;