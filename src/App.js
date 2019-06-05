import React, {Component} from 'react';
import './App.css';
import BeginGame from './components/enterGame';

class App extends Component {

  render(){
    return (
      <div className="App">
        <BeginGame />
        welcome to my maze game
      </div>
    )
  }
}

export default App;
