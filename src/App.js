import React, {Component} from 'react';
import './App.css';
import BeginGame from './components/enterGame';
import GameScore from './components/gameScore/gameScore';
import GameContainer from './components/gameCells/gameCells';

let createReactClass = require('create-react-class');
let items = []
let no_of_moves;
const max_no_of_moves = 64;
let mario_jump;
let max_mashroom;




class App extends Component {
  constructor(props){
		super(props);
		let width = prompt("Enter width of game: ", "e.g. 10,20,30");
		let height = prompt("Enter height of  game: ", "e.g. 10,20,30");
		if(height == null || width == null || isNaN(width) === true || isNaN(height) === true){
			height = 10
      width =  10
		}
		let matrix_size = height * width
		mario_jump = width
		this.state = {
			matrix_size:matrix_size,
			width:width,
      height:height,
		}
  }

  render(){
    return (
      <div className="App">
        <BeginGame />
        <GameContainer matrix={this.state.matrix_size}/>
        <GameScore />
      </div>
    )
  }
}

export default App;
