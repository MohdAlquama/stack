import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Hero from './implement/Hero';
import HeroSectionTest from './implement/HeroSectionTest';
import Home from './Home';
import ShowData from './implement/ShowData';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={  <Home/> }/>
      <Route path='/xtx' element={  <HeroSectionTest/> }/>
      <Route path='/v/:getMyId' element={<ShowData/>}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
