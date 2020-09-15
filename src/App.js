import React from 'react';
import logo from './logo.png';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactUs from './containers/ContactUs';
import Post from './containers/Post';
import GuestSpeakers from './containers/GuestSpeakers';

function App() {
  return (
    <Router>
       <div className="App">
        <Header/>
        <Hero/>
        <Route path="/" exact component={Home} />
        {/* <Route path="/contact-us" component={ContactUs} /> */}
        <Route path="/post" component={Post} />
        <Route path="/guest-speakers" component={GuestSpeakers} />
      </div>
    </Router>
    
  );
}

export default App;
