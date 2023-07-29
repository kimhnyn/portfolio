import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Creative from './pages/Creative';
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
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
