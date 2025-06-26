//see explanation below the code.
import React from 'react'
import Home from './Home';
import Cuisine from './Cuisine';

import{Route, Routes} from 'react-router-dom';

const Pages = () => {
  return (
  
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Cuisine' element={<Cuisine/>} />

      </Routes>
  
  )
}

export default Pages;

//<BrowserRouter> = It's nothing but a thing to provide functionality or give access to perform routing so we have to wrap it as a parent component to the router. it's like a intelligence which checks or which looks at the figure and path to render out. It's like ability to perform routing.  

//If we want to route then we have to define it or start with a <Routes> and then inside we have to define each route whic we want to use and each route contains two things- one called path and other element if they both matches then it works.