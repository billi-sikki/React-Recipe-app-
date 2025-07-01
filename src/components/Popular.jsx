import React, { useEffect, useState } from 'react';
import styled from 'styled-components'; //Styled-components is a library for React that allows you to write CSS directly inside your JavaScript files using a technique called CSS-in-JS. It lets you create styled React components with their own encapsulated styles

import{Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css'; // Import Splide core CSS
import { Link } from 'react-router-dom';

const Popular = () => {

    const[Popular,setPopular]=useState([]);

    useEffect(()=>{
         getPopular();
    },[]);

   const getPopular = async () => {
    
   const check= localStorage.getItem('popular');

   if(check){
    setPopular(JSON.parse(check));
   }else{
       const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
       
       const data= await api.json();
       localStorage.setItem('popular',JSON.stringify(data.recipes));
       setPopular(data.recipes); // updates popular data to store or render recipes.
       console.log(data.recipes);
   }

   };


  return (
        <div>
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage:3,
                    arrows:false,
                    pagination:false,
                    drag:'free',
                    gap:'5rem',
                }}>
                 {Popular.map((recipe)=>{
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
  )
}

const Wrapper= styled.div`
margin:4rem 0rem;
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
filter:  contrast(1.2) ;
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
background:linear-gradient(rgba ( 0,0,0,0), rgba(0,0,0,1));
 
`


export default Popular;


//Breaking it down step by step (from line 24-47)

//1. The <div> and .map()
//The code starts by creating a <div>.
//It uses Popular.map((recipe) => { ... }) to go through each recipe in the Popular array.
//For each recipe, it creates a section (using <Wrapper>) that will hold the slider.

//2. The <Wrapper> and <h3>
//<Wrapper> is a styled container (using styled-components) to add some spacing and style.
//<h3>Popular Picks</h3> is just a heading for this section.

//3. Splide and SplideSlide
//Splide is a special component (from the Splide library) that creates a slider or carousel. Think of it like a photo //gallery where you can slide left or right to see more items.
//SplideSlide is used inside Splide. Each SplideSlide represents one "slide" or "page" in the slider. In this case, each //slide shows one recipe.

//4. Showing each recipe
//Inside <Splide>, the code again loops through all recipes with Popular.map((recipe) => { ... }).
//For each recipe, it creates a <SplideSlide>.
//Inside each slide, it puts a <Card> that shows:
//The recipe’s title (<p>{recipe.title}</p>)
//The recipe’s image (<img src={recipe.image} ... />)


//What is Splide and SplideSlide?
//Splide: A tool that helps you make a slider (carousel) in your website or app. It handles the sliding effect, navigation, //and layout for you.
//SplideSlide: Each individual item or "page" inside the slider. If you have 9 recipes, you’ll have 9 slides.
//In simple words:
//Splide is like a photo album where you can flip through pages, and SplideSlide is each page in that album.