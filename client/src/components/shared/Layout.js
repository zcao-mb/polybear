import React from 'react';
import './App.css';

export default props => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Welcome to PolyBear</h1>
        </header>
        <p className="App-intro">
            A project management platform
        </p>

        {props.children}
  </div>
);