import React, { Component } from 'react';

let items = []

class GameCells extends Component {
    state = {
        selected: false
    }
    render() {
        return (
            <div className={this.state.selected ? "cell active" : "cell"}
                id={this.props.id}>
            </div>
        );
    }
}



class GameContainer extends Component {
    constructor(props){
        super(props)

        let c = []  
            for(let i=1; i<=this.props.matrix; i++){ 
                c.push( <ameCells key={i} id={i} cells={c} /> )
                items.push(i)
        }

        this.state = {
            cells: c
        }

    }

    render() {
		return (
		  <div className="gamebox"> { this.state.cells } </div>
		)    
	}
}

export default GameContainer;