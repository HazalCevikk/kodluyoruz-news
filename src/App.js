import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Health from './pages/Health';
import Life from './pages/Life';
import Rss from './pages/Rss';
import Test from './pages/Test';
import Request from './pages/Request';
import './App.css';
import Retest from './pages/Retest';
import Carousel from './pages/Carousel';

function App() {
  return (
    <div className="App">
      
      {/* <Test /> */}
      <Rss /> 
      {/* <Carousel /> */}
    {/* <Life /> */}
    {/* <Request /> */}
    {/* <Test /> */}
    {/* <Retest /> */}
    {/* <Health /> */}
    {/* <Router>
      <Routes>
        <Route path='/health' index element={<Health />} />
        <Route path='/life' element={<Life />} />
       
      </Routes>
    </Router> */}



    </div>
  );
}

export default App;
  // <Life />  
  //     
  //     <Health /> 