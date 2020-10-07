import React from 'react';
// import logo from './logo.png';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ContactUs from './containers/ContactUs';
import MeetOurTeam from './containers/MeetOurTeam';
import Post from './containers/Post';
import GuestSpeakers from './containers/GuestSpeakers';
import ProgramInfo from './containers/ProgramInfo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
       <div className="App">
        <Header/>
        <Hero/>
        <Route path="/" exact component={Home} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/meet-our-team" component={MeetOurTeam} />
        <Route path="/post" component={Post} />
        <Route path="/guest-speakers" component={GuestSpeakers} />
        <Route path="/program-info" component={ProgramInfo} />
      </div>
    </Router>
    
  );
}

export default App;
