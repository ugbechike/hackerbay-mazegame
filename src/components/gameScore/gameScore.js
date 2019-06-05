import React, { Component } from 'react';

class GameScore extends Component {
    state = {
        score: 0
    }


    render() {
        return (
            <div id="score" className="scoreGame">
                <div className="achived">
                    <p>Score Achived</p>
                    <p id="score_achived">0</p>
                </div>
                <div className="steps_used">
                    <p>Steps Used</p>
                    <p id="no_of_moves">0</p>
                </div>
                <div className="steps_remaining">
                    <p>Steps Remaining</p>
                    <p id="steps_remaining">0</p>
                </div>
                <div className="steps_finished">
                    <p>Mashroom Remaining</p>
                    <p id="mashrooms_remaining">0</p>
                </div>
            </div>
        );
    }
}

export default GameScore;