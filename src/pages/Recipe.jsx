import React from 'react'
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

function Recipe() {

  let params= useParams();
   const[Details, setDetails]=useState({});
   const[activeTab, setActiveTab]=useState('Instructions');
   

  const fetchDetails = async ()=>{
    const data= await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);

    const detailData= await data.json();
    setDetails(detailData);

  };

useEffect(()=>{
 fetchDetails();
},[params.name]);

  return (
    <DetailWrapper>
      <ImageWrapper>
        <h2>{Details.title}</h2>
        <img src={Details.image} alt="" />
      </ImageWrapper>
      <Info>
        <Button className={activeTab === 'Instructions' ? 'active' : ''} onClick={() => setActiveTab('Instructions')}>Instructions</Button>
        <Button className={activeTab === 'Ingredients' ? 'active' : ''} onClick={() => setActiveTab('Ingredients')}>Ingredients</Button>
      </Info>
    </DetailWrapper>
  )

};

const DetailWrapper = styled.div`
  margin-top: 0rem;
  margin-bottom: 0rem; 
  filter: contrast(1.3) brightness(1);
  display: flex;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;
  img {
    width: 100%;
    max-width: 350px;
    object-fit: cover;
    margin-top:1.5rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  &.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`;

const Info = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: flex-start;
`;


export default Recipe;
