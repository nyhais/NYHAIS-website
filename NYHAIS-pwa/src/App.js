import React from 'react';
import ReactDOM from 'react-dom';
import { Jumbotron } from 'react-bootstrap';
import logo from './logo.svg';  // change logo
import { Header } from './Components/Header.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header name="New York Health Artificial Intelligence Society"/>
      <article>
        <section id="about-us">
          <h2>About Us</h2>
          <Jumbotron>
            <p> New York Health Artificial Intelligence Society (NYHAIS) 
            is dedicated to the application of neuroscience, 
            machine learning, medicine, and computer science towards 
            the further understanding and development of AI. 
            We also focus on developing the New York MedTech industry and fostering 
            open source projects that support it. 
            Contact the organizers about it. </p>
            
            <p>Our goal is to create a laid-back place where the 
            spirit of the coffeehouse culture of the Enlightenment 
            meets the modern hackerspace; where people from 
            different disciplines who wouldn't normally meet can exchange 
            ideas, experiment with hands-on systems, and have a good time. </p>

            <p>We hope this can be the melting pot of 
            neuroscientists, hackers, programmers, doctors, 
            mathematicians, artists, lawyers, post docs in 
            any science, bio-staticians, entrepreneurs, 
            and the average person who is interested in 
            learning about advances in artificial intelligence 
            applications in health 
            (and adjacent data-intensive fields).</p>
          </Jumbotron>
        </section>
      </article>

      <section id="jobs">
        <h2 id="jobs">Jobs</h2>
        <p>some stuff</p>
      </section>

    </div>
  );
}

export default App;
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

