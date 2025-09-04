import React, {useState} from 'react';
import './App.css';
import SignUp from './bigComponents/SignUp';
import Login from './bigComponents/Login';
import LandingPage from './bigComponents/LandingPage';
import Dashboard from './bigComponents/Dashboard';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App(){
  return(
    <>
        <Router>
            <Routes>
                <Route path = '/'  element ={<LandingPage/>}/>
                <Route path = '/SignUp' element ={<SignUp/>}/>
                <Route path = '/login' element ={<Login/>}/>
                <Route path = '/dashboard' element={<Dashboard/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App;