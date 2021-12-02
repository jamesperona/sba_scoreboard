import React, { Component } from 'react';
import './DatabaseInput.css';
import axios from 'axios';

const url = 'http://localhost:8080/api'

export default class Database extends Component {
    render() {
        return (
            <div>
                <div className="TabSelector">
                    <button className="TabButton">Players</button>
                    <button className="TabButton">Rosters</button>
                </div>
                <div id="PlayerDatabaseInput" className="DatabaseBox">
                    <b className="DatabaseTitle">Add player to database:</b>
                    <div className="DatabaseInput">
                        <div className="InputItem"><b>Name: </b><input id="NameInput" className="NameInput"></input></div>
                        <div className="InputItem"><b>Number: </b><input id="NumberInput" className="NumberInput"></input></div>
                        <button className="DatabaseSubmit" onClick={(event) => this.postPlayer(event)}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }

    postPlayer = (event) => {
        let postName = document.getElementById("NameInput").value;
        let postNumber = document.getElementById("NumberInput").value;
    
        axios.post(`${url}/players`, {name: postName, number: postNumber}).then(function(response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}