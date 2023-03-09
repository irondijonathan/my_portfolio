import React, { Component } from 'react';
import Header from './Components/Header'
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Work from './Components/Work';
import Footer from './Components/Footer'
import logo from './logo.svg';
import styles from './App.css';
import globals from './index.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About title="About Me" />
        <Services title="My Services" />
        <Projects title="My Projects" />
        <Work />
        <Footer />
      </div>
    );
  }
}

export default App;
