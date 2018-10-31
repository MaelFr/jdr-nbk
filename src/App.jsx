import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';

import Home from './pages/Home';
import Navbar from './organisms/Navbar';
import Persos from './pages/Persos/Persos';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>Header</header>
        <Navbar />
        <main>
          <Router>
            <Home path="/" />
            <Persos path="persos/*" />
          </Router>
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
