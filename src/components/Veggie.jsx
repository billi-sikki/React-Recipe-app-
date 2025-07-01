import React, { useState, useEffect } from 'react'

import styled from 'styled-components'; //Styled-components is a library for React that allows you to write CSS directly inside your JavaScript files using a technique called CSS-in-JS. It lets you create styled React components with their own encapsulated styles

import{Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css'; // Import Splide core CSS
import { Link } from 'react-router-dom';

const Veggie = () => {
const[veggie,setVeggie]=useState([]);

    useEffect(()=>{
         getVeggie();
    },[]);

   const getVeggie= async () => {
    
   const check= localStorage.getItem('veggie');

   if(check){
    setVeggie(JSON.parse(check));
   }else{
       const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=Vegetarian`);
       
       const data= await api.json();
       localStorage.setItem('veggie',JSON.stringify(data.recipes));
       setVeggie(data.recipes); // updates popular data to store or render recipes.
       console.log(data.recipes);
   }
  };

  return (
    <div>
            <Wrapper>
                <h3>Vegetarian Picks</h3>
                <Splide options={{
                    perPage:3,
                    arrows:false,
                    pagination:false,
                    drag:'free',
                    gap:'5rem',
                }}>
                 {veggie.map((recipe)=>{
                   return(
                      <SplideSlide key={recipe.id}> 
                      <Card>
                      <Link to={'/Recipe/'+ recipe.id}>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title}/>
                      <Gradient/>
                      </Link>
                      </Card>
                      </SplideSlide>
                         )
                    })}
                </Splide>
            </Wrapper>        
        </div>
  );
}

const Wrapper= styled.div`
margin:0rem 0rem;
`;

const Card= styled.div`
min-height: 12rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img{
border-radius: 0.5rem;
position: absolute;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
filter: contrast(1.2);

}

p{
position: absolute;
z-index: 10;
left: 50%;
bottom: 0%;
transform: translate(-50%, 0%);
color: white;
width: 100%;
text-align: center;
display: flex;
font-size: 1rem;
height: 40%;
font-weight: 600;
justify-content: center;
align-items: center;
}
`;

const Gradient= styled.div`
position:absolute;
z-index:11;
width:100%
height:100%;
background:linear-gradient(rgba ( 0,0,0,0), rgba(0,0,0,0.5));
`

export default Veggie;