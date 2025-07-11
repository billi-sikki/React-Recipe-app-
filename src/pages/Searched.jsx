import styled from 'styled-components';
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Searched = () => {

    const [searchedRecipes, setSearchedRecipes] =useState([]);
    let params= useParams();


    const getSearched= async (name) => {
    const data= await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(()=>{
    getSearched(params.search);

  },[params.search]);


  return(
    <Grid>
    {searchedRecipes.map((item)=>{
        return(
            <Card key={item.id}>
                <img src={item.image} alt=''/>
                <h4>{item.title}</h4>
            </Card>
        )
    })}     


    </Grid>
  )
}

const Grid= styled.div`
display:grid;
grid-template-columns:repeat(auto-fit, minmax(10rem, 1fr));
grid-gap:3rem;
`;

const Card = styled.div`
img{
width:100%;
border-radius:2rem;
filter: contrast(1.3);
}

a{
text-decoration:none;
}

h4{
text-align:center;
padding:1rem;
}

`;

export default Searched;