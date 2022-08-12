import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import MainChartOne from './components/chart/MainChartOne';
import "./app.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BeforeAi from './pages/home/beforeAi/BeforeAi';
import AfterAi from './pages/home/afterAi/AfterAi';
// import Collapsible from 'react-collapsible';
// import { BsChevronDown } from "react-icons/bs";
// import { IconContext } from 'react-icons'
// import { AiOutlineMenu } from 'react-icons/ai'
// import { Drawer, Box, Typography, IconButton } from '@mui/material'
import { useState } from 'react'
import SidebarButton from './components/sidebarButton/SidebarButton';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <Router>
      <Topbar />
      <div className="container">

        {/*
        <IconButton 
          size='large' 
          edge='false' 
          color='inherit' 
          aria-label='logo' 
          
          onClick={() => setIsDrawerOpen(true)}> 

          <IconContext.Provider value={{size: 45}}>
            <AiOutlineMenu className='outline'/>
          </IconContext.Provider>
        </IconButton>
        <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <Box p={2} width='250px' textAlign='center' role='presentation'>

            <Sidebar />
          </Box>
        </Drawer>
        */}
        {/* <div className="sideButton">
          <SidebarButton />
        </div> */}
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/bimdashboard">
            <Home />
          </Route>
          <Route path="/beforeai">
            <BeforeAi />
          </Route>
          <Route path="/bimdashboard/beforeai">
            <BeforeAi />
          </Route>
          <Route path="/afterai">
            <AfterAi />
          </Route>
          <Route path="/bimdashboard/afterai">
            <AfterAi />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
