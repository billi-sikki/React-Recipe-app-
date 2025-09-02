import { style } from 'framer-motion/client';
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

  // ...existing code...
  return (
    <DetailWrapper>
      <Left>
        <img src={Details.image} alt="" />
        <h2>{Details.title}</h2>
      </Left>
      <Right>
        <ButtonGroup>
          <Button className={activeTab === 'Instructions' ? 'active' : ''} onClick={() => setActiveTab('Instructions')}>Instructions</Button>
          <Button className={activeTab === 'Ingredients' ? 'active' : ''} onClick={() => setActiveTab('Ingredients')}>Ingredients</Button>
        </ButtonGroup>
        <Content>
          {activeTab === 'Instructions' && (
            <div>
              <h3 dangerouslySetInnerHTML={{__html:Details.summary}}></h3> 
            </div>
          )}
          {activeTab === 'Ingredients' && Details.extendedIngredients && (
            <ul>
              {Details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )}
        </Content>
      </Right>
    </DetailWrapper>
  )}
// ...existing code...

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;
  display: flex;
  gap: 4rem;
  min-height: 500px; // Use min-height so it can grow if needed
  align-items: flex-start; // Align to top if content grows
  max-width: 900px;
  width: 100%;
  box-sizing: border-box;
  overflow: visible; // Allow overflow if content is large
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  img {
    width: 100%;
    max-width: 320px;
    max-height: 320px;
    object-fit: cover;
    margin-bottom: 1.2rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.18);
    border-radius: 12px;
  }
  h2 {
    margin: 0;
    font-size: 1.7rem;
    text-align: center;
    max-width: 320px;
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  height: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  font-weight: 600;
  &.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`;

const Content = styled.div`
  margin-top: 1rem;
  /* Remove max-height and overflow to show all content */
  h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    max-height: none;
    overflow: visible;
    text-overflow: unset;
    white-space: normal;
  }
  ul {
    margin-top: 1rem;
    padding-left: 1.5rem;
    max-height: none;
    overflow: visible;
  }
  li {
    font-size: 1.05rem;
    line-height: 1.7rem;
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
  }
`;

// ...existing code...

// ...existing code...
export default Recipe;
