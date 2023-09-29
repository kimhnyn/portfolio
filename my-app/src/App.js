import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import './assets/styles/main.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Creative from './pages/Creative';
import TaskClear from './pages/projects/TaskClear';
import BruinHive from './pages/projects/BruinHive';
import ClassBuddi from './pages/projects/ClassBuddi';
import AASC from './pages/projects/AASC';
import FanSpace from './pages/projects/FanSpace';
import NotFound from './pages/NotFound/NotFound';
import { AnimatePresence } from 'framer-motion';
import Transition from './components/transition';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Switch location={location}>
        <Route path="/about"><Transition key='about'><About /></Transition></Route>
        <Route path="/creative"><Transition key='creative'><Creative /></Transition></Route>
        <Route path="/portfolio"><Transition key='portfolio'><Portfolio /></Transition></Route>
        <Route path="/projects/fanspace"><Transition key='fanspace'><FanSpace /></Transition></Route>
        <Route path="/projects/bruinhive"><Transition key='bruinhive'><BruinHive /></Transition></Route>
        <Route path="/projects/AASC"><Transition key='AASC'><AASC /></Transition></Route>
        <Route path="/projects/classbuddi"><Transition key='classbuddi'><ClassBuddi /></Transition></Route>
        <Route path="/projects/taskclear"><Transition key='taskclear'><TaskClear /></Transition></Route>
        <Route path="/notfound"><Transition key='notfound'><NotFound /></Transition></Route>
        <Route exact path="/"><Transition key='home'><Home /></Transition></Route>
    </Switch>
  );
}
function App() {

  return (
    <Router>
      <Header />
      <AnimatedRoutes />
     <Footer/>
    </Router>
  );
};

export default App;
