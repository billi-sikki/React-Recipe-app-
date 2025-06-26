import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiFastNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


import React from 'react'

const Category = () => {
  return (
    <List>
        <NavLink to={'/cuisine/Italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
        </NavLink>
        <NavLink to={'/cuisine/American'}>
        <FaHamburger/>
        <h4>American</h4>
        </NavLink >
        <NavLink to={'/cuisine/Thai'}>
        <GiFastNoodles/>
        <h4>Thai</h4>
        </NavLink >
        <NavLink to={'/cuisine/Japanese'}>
        <GiChopsticks/>
        <h4>Japanese</h4>
        </NavLink>
    </List>
  )
}

const List= styled.div`
display:flex;
justify-content:center;
margin:2rem 2rem;
gap:2rem;
`;

export default Category;