import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import MainChartOne from './components/chart/MainChartOne';
import "./app.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BeforeAi from './pages/home/beforeAi/BeforeAi';
import AfterAi from './pages/home/afterAi/AfterAi';

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
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
          <Route path="/afterai">
            <AfterAi />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
