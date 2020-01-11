import React, { Component } from 'react';
import Excel from 'exceljs'
import './App.css';
import Player from './components/PlayerStat.js'

class App extends Component {
  state = {
    homeScore : 0,
    awayScore : 0,
    awayThrees : 0,
    awayTwos : 0,
    awayMakes : 0,
    awayMisses : 0,
    homeThrees : 0,
    homeTwos : 0,
    homeMakes : 0,
    homeMisses : 0,
    quarter : 0,
    homeName : "N/A",
    awayName : "N/A",
    homeTeam : [],
    awayTeam : [],
    rosters : [
      [{name: "Saint Bede Academy"}, {name: "Kaden Monterastelli", number: 2}, {name: "Braden Damerell", number: 5}, {name: "Logan Griggs", number: 10}, {name: "Gunnar Jauch", number: 13}, {name: "Nathan Potthoff", number: 14}, {name: "Logan Link", number: 22}, {name: "Maks Sharshekeev", number: 23}, {name: "Luke Story", number: 24}, {name: "Paul Hart", number: 30}, {name: "Nick Pearse", number: 31}, {name: "Duncan Lawler", number: 3}], 
      [{name: "Newman Central Catholic"}, {name: "N. Welty", number: 3}, {name: "L. Jungerman", number: 10}, {name: "E. Henkel", number: 11}, {name: "T. Powers", number: 11}, {name: "B. Newman", number: 12}, {name: "N. Britt", number: 13}, {name: "J. Ackman", number: 14}, {name: "G. Moran", number: 14}, {name: "C. Britt", number: 15}, {name: "S. Cheng", number: 20}, {name: "G. Koerner", number: 20}, {name: "C. McBride", number: 21}, {name: "G. Hunsberger", number: 22}, {name: "K. Brininger", number: 23}, {name: "A. Velasquez", number: 23}, {name: "K. Mullen", number: 24}, {name: "D. House", number: 30}, {name: "M. Williams", number: 32}, {name: "N. Neubauer", number: 42}],
      [{name: "Streator"}, {name: "C. Bedecker", number: 1}, {name: "J. Starkey", number: 2}, {name: "A. Ford", number: 3}, {name: "S. Good", number: 4}, {name: "M. Benning", number: 5}, {name: "A. Benning", number: 12}, {name: "P. Benning", number: 13}, {name: "A. Ward", number: 21}, {name: "J. Haynes", number: 23}, {name: "I. Beals", number: 24}, {name: "J. Tredway", number: 30}, {name: "M. Baker", number: 33}, {name: "L. Williamson", number: 55}]]
  }

//    [{name: "Marquette"}, {name: "Evan Mann"}, {name: "Jalen Flavel"}, {name: "Nate Nelson"}, {name: "Logan Nelson"}, {name: "Lucas Hoffman"}, {name: "Nick Melvin"}, {name: "Jake Thomas"}, {name: "Gabe Johnson"}, {name: "Gabe Amicon"}, {name: "Shane Reynolds"}, {name: "Patrick McGrath"}, {name: "Sean Kissel"}, {name: "Caleb Boucher"}],

  render() {
    const{
      homeScore,
      awayScore,
      awayThrees,
      awayTwos,
      awayMakes,
      awayMisses,
      homeThrees,
      homeTwos,
      homeMakes,
      homeMisses,
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
            <div className="ScoreCounter">{homeScore}</div>
            <div className="QuarterCount" onClick={(event) => this.incrementQuarter(true, event)} onContextMenu={(event)=> this.incrementQuarter(false, event)}>{quarterArr[quarter]}</div>
            <div className="ScoreCounter">{awayScore}</div>
          </div>
        </div>
        <div className="Rosters">
          <div className="HomeRoster">
            <table className="RosterHeader" onContextMenu={(e)=> e.preventDefault()}>
              <thead>
                <tr>
                  <th>#</th>
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
                      <Player name={player.name} number={player.number} homeUp={this.incrementHome} awayUp={this.incrementAway} totalUp={this.incrementTeamTotals} home={true}></Player>
                    )
                  })
                }
              </tbody>
              <tfoot>
                <tr>
                  <th>--</th>
                  <th>{homeName}</th>
                  <th>{homeScore}</th>
                  <th>{homeTwos}</th>
                  <th>{homeThrees}</th>
                  <th>{homeMakes}</th>
                  <th>{homeMisses}</th>
                  <th>{(homeMisses+homeMakes !== 0) ? (100 * homeMakes / (homeMisses+homeMakes)).toFixed(0) : 0}</th>
                </tr>
              </tfoot>

            </table>
          </div>
          <div className="AwayRoster">
            <table className="RosterHeader">
              <thead>
                <tr>
                  <th>#</th>
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
                      <Player name={player.name} number={player.number} homeUp={this.incrementHome} awayUp={this.incrementAway} totalUp={this.incrementTeamTotals} home={false}></Player>
                    )
                  })
                }
              </tbody>
              <tfoot>
                <tr>
                  <th>--</th>
                  <th>{awayName}</th>
                  <th>{awayScore}</th>
                  <th>{awayTwos}</th>
                  <th>{awayThrees}</th>
                  <th>{awayMakes}</th>
                  <th>{awayMisses}</th>
                  <th>{(awayMisses+awayMakes !== 0) ? (100 * awayMakes / (awayMisses+awayMakes)).toFixed(0) : 0}</th>
                </tr>
              </tfoot>

            </table>
          </div>
        </div>
      </div>
      <div className="Input">
        <div className="Selects">
          <div>
            Home Team: &nbsp;
            <select id={"homeInput"} onChange={(event) => this.updateTeams(true)}>
              <option hidden disabled selected value> -- select a team -- </option>
              {
                rosters.map((team, idx) => {
                  return (
                    <option value={idx}>{team[0].name}</option>
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
                    <option value={idx}>{team[0].name}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
        <div className="InfoDump">

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
        return playerElem;
      });
      this.setState({
        homeTeam: playersToSend,
        homeName: chosenRoster[0].name
      });
    } else {
      let chosenRoster = rosterArr[document.getElementById("awayInput").value];
      let teamArr = chosenRoster.slice(1);
      let playersToSend = teamArr.map((playerElem) => {
        return playerElem;
      });
      this.setState({
        awayTeam: playersToSend,
        awayName: chosenRoster[0].name
      });
    }


  }

  incrementQuarter = (positive, event) => {
    const {quarter} = this.state;
    event.preventDefault();
    if (positive && (quarter < 4)) {
      this.setState({
        quarter: quarter+1
      });
    }
    if (!positive && quarter > 0) {
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

  incrementTeamTotals = (home, value, sign) => {
    const {
      homeMakes,
      homeMisses,
      homeTwos, 
      homeThrees,
      awayMakes,
      awayMisses,
      awayTwos,
      awayThrees
    } = this.state;
    if (home) {
      if (value === 0) {
        this.setState({
          homeMisses : homeMisses+sign
        })
      }
      if (value === 1) {
        this.setState({
          homeMakes : homeMakes+sign
        })
      }
      if (value === 2) {
        this.setState({
          homeTwos : homeTwos+sign
        })
      }
      if (value === 3) {
        this.setState({
          homeThrees : homeThrees+sign
        })
      }
    }
    else {
      if (value === 0) {
        this.setState({
          awayMisses : awayMisses+sign
        })
      }
      if (value === 1) {
        this.setState({
          awayMakes : awayMakes+sign
        })
      }
      if (value === 2) {
        this.setState({
          awayTwos : awayTwos+sign
        })
      }
      if (value === 3) {
        this.setState({
          awayThrees : awayThrees+sign
        })
      }
    }
  }

}

export default App;
