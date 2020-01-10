import React, { Component } from 'react';
import Excel from 'exceljs'
import './App.css';
import Player from './components/PlayerStat.js'

class App extends Component {
  state = {
    homeScore : 0,
    awayScore : 0,
    quarter : 0,
    homeName : "N/A",
    awayName : "N/A",
    homeTeam : [],
    awayTeam : [],
    rosters : [
      ["Saint Bede Academy", "Kaden Monterastelli", "Braden Damerell", "Logan Griggs", "Gunnar Jauch", "Nathan Potthoff", "Vinnie Sampo", "Logan Link", "Maks Sharshekeev", "Luke Story", "Paul Hart", "Nick Pearse", "Duncan Lawler"], 
      ["Marquette", "Evan Mann", "Jalen Flavel", "Nate Nelson", "Logan Nelson", "Lucas Hoffman", "Nick Melvin", "Jake Thomas", "Gabe Johnson", "Gabe Amicon", "Shane Reynolds", "Patrick McGrath", "Sean Kissel", "Caleb Boucher"]]
  }

  render() {
    const{
      homeScore,
      awayScore,
      quarter,
      homeName,
      awayName,
      homeTeam,
      awayTeam,
      rosters
    } = this.state

    const quarterArr = ["1st", "2nd", "3rd", "4th", "Final"]

    let d = new Date();

    return (
      <div className="App">
      <div className="FullBoard">
        <div className="GameInfo">
          <div className="GameName">{homeName} vs. {awayName}, {d.toDateString()}</div>
          <div className="ScoresTimes">
            <div className="ScoreCounter">{this.state.homeScore}</div>
            <div className="QuarterCount" onClick={(event) => this.incrementQuarter(true)}>{quarterArr[quarter]}</div>
            <div className="ScoreCounter">{this.state.awayScore}</div>
          </div>
        </div>
        <div className="Rosters">
          <div className="HomeRoster">
            <table className="RosterHeader">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Total</th>
                  <th>2s Made</th>
                  <th>3s Made</th>
                  <th>FT Made</th>
                  <th>FT Miss</th>
                  <th>FT %</th>
                </tr>
              </thead>
              <tbody>
                {
                  homeTeam.map((player, idx) => {
                    return (
                      <Player name={player.name} homeUp={this.incrementHome} awayUp={this.incrementAway} home={true}></Player>
                    )
                  })
                }
              </tbody>

            </table>
          </div>
          <div className="AwayRoster">
            <table className="RosterHeader">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Total</th>
                  <th>2s Made</th>
                  <th>3s Made</th>
                  <th>FT Made</th>
                  <th>FT Miss</th>
                  <th>FT %</th>
                </tr>
              </thead>
              <tbody>
                {
                  awayTeam.map((player, idx) => {
                    return (
                      <Player name={player.name} homeUp={this.incrementHome} awayUp={this.incrementAway} home={false}></Player>
                    )
                  })
                }
              </tbody>

            </table>
          </div>
        </div>
      </div>
      <div className="Input">
        <div>
          Home Team: &nbsp;
          <select id={"homeInput"} onChange={(event) => this.updateTeams(true)}>
            <option hidden disabled selected value> -- select a team -- </option>
            {
              rosters.map((team, idx) => {
                return (
                  <option value={idx}>{team[0]}</option>
                )
              })
            }
          </select>
        </div>

        <div>
          Away Team: &nbsp;
          <select id={"awayInput"} onChange={(event) => this.updateTeams(false)}>
            <option hidden disabled selected value> -- select a team -- </option>
            {
              rosters.map((team, idx) => {
                return (
                  <option value={idx}>{team[0]}</option>
                )
              })
            }
          </select>
        </div>
      </div>
    </div>
    );
  }

  // componentDidMount = () => {
  //   let incomingRosters = []
  //   let workbook = new Excel.Workbook();
  //   workbook.csv.readFile('rostersSheet.csv')
  //     .then(function() {
  //       workbook.eachSheet(function(worksheet, sheetId) {
  //         incomingRosters[incomingRosters.length] = worksheet.name;
  //       });
  //     });
  //   this.setState({
  //     rosters: incomingRosters
  //   });
  // }

  updateTeams = (homeBool) => {
    const rosterArr = this.state.rosters;
    if (homeBool) {
      let chosenRoster = rosterArr[document.getElementById("homeInput").value];
      let teamArr = chosenRoster.slice(1);
      console.log(teamArr);
      let playersToSend = teamArr.map((playerElem) => {
        return {name: playerElem}
      });
      this.setState({
        homeTeam: playersToSend,
        homeName: chosenRoster[0]
      });
    } else {
      let chosenRoster = rosterArr[document.getElementById("awayInput").value];
      let teamArr = chosenRoster.slice(1);
      let playersToSend = teamArr.map((playerElem) => {
        return {name: playerElem}
      });
      this.setState({
        awayTeam: playersToSend,
        awayName: chosenRoster[0]
      });
    }


  }

  incrementQuarter = (positive) => {
    const {quarter} = this.state;
    if (positive && (quarter < 4)) {
      this.setState({
        quarter: quarter+1
      });
    }
    if (!positive) {
      this.setState({
        quarter: quarter-1
      });
    }
  }

  incrementHome = (valueToIncrement) => {
    const {homeScore} = this.state;
    this.setState({
      homeScore: homeScore+valueToIncrement
    });
  }

  incrementAway = (valueToIncrement) => {
    const {awayScore} = this.state;
    this.setState({
      awayScore: awayScore+valueToIncrement
    });
  }

}

export default App;
