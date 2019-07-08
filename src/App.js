import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetail from './ItemDetail';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/about" component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={ItemDetail} />
      </div>
    </Router>
  );
}

export default App;
