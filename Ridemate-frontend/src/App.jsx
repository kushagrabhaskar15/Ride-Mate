import './App.css';

import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

/*importing components*/
import Login from './bigComponents/Login';
import SignUp from './bigComponents/SignUp';
import Dashboard from './bigComponents/Dashboard';
import FindARide from './bigComponents/FindARide';
import LandingPage from './bigComponents/LandingPage';


function App(){
  return(
    <>
        <Router>
            <Routes>
                <Route path = '/'  element ={<LandingPage/>}/>
                <Route path = '/signUp' element ={<SignUp/>}/>
                <Route path = '/login' element ={<Login/>}/>
                <Route path = '/dashboard' element={<Dashboard/>}/>
                <Route path = '/findARide' element={<FindARide/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App;