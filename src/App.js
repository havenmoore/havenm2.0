import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import NavBar from './components/NavBar';
import About from './components/About';
import Resume from './components/Resume'

//import Page from './components/Page';

const Layout = () => (
  <div>
    <header>
      <NavBar />
    </header>
    <body>
      <Container>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
      </Container>
    </body>
  </div>
)

function App() {
  return (
    <Layout />
  );
}

export default App;
