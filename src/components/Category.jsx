import { FaPizzaSlice } from "react-icons/fa";
import { GiFastNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


import React from 'react'

const Category = () => {
  return (
    <div>
        <div>
        <FaPizzaSlice/>
        <h4>Italian</h4>
        </div>
        <div>
        <GiFastNoodles/>
        <h4>Italian</h4>
        </div>
        <div>
        <GiChopsticks/>
        <h4>Italian</h4>
        </div>
    </div>
  )
}

export default Category;