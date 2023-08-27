import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

//import logo from './logo.svg';
//import './App.css';

//import Page from './pages/InsertPage;
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/creative" component={Creative} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/projects/fanspace" component={FanSpace} />
        <Route path="/projects/bruinhive" component={BruinHive} />
        <Route path="/projects/AASC" component={AASC} />
        <Route path="/projects/classbuddi" component={ClassBuddi} />
        <Route path="/projects/taskclear" component={TaskClear} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
