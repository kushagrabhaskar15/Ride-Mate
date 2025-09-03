import React, {useState} from 'react';
import './App.css';
import LandingPage from './bigComponents/LandingPage';
import {Router, Routes, Route} from 'react-router-dom';


function App(){
  return(
    <>
        <Router>
            <Routes>
                <Route path = '/'  element ={<LandingPage/>}/>
                <Route path = '/login' element ={<Login/>}/>
                <Route path = '/dashboard' element={<Dashboard/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App;