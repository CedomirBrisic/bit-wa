import React, { Component } from 'react';
import './App.css';
import Header from "./partials/Header"
import Footer from "./partials/Footer"
import HomePage from "./partials/HomePage"

class App extends Component {
  
  render() {
    return (
      <React.Fragment>
      <Header />
      <HomePage />
      {/* <FetchShowDataAll /> */}
      <Footer />
      </React.Fragment>
    );
  }
}

export default App;
