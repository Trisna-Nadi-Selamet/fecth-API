// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Rendering Elment</h1>
      </div>
    );
  }
}
export default App;
