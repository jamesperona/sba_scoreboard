import React, { Component } from 'react';
import Excel from 'exceljs'
import './App.css';
import Player from './components/PlayerStat.js';

//TODO: pull rosters from editable csv/excel
//TODO: push data to excel spreadsheet
//TODO: ipad support


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
    quarterData : [],
    quarterCurrent : {home : {}, away : {}},
    homeName : "N/A",
    awayName : "N/A",
    homeTeam : [],
    awayTeam : [],
    outData : [],
    rosters : [
      [{name: "Saint Bede Academy"}, {name: "Kaden Monterastelli", number: 2}, {name: "Braden Damerell", number: 5}, {name: "Logan Griggs", number: 10}, {name: "Gunnar Jauch", number: 13}, {name: "Nathan Potthoff", number: 14}, {name: "Logan Link", number: 22}, {name: "Maks Sharshekeev", number: 23}, {name: "Luke Story", number: 24}, {name: "Paul Hart", number: 30}, {name: "Nick Pearse", number: 31}, {name: "Duncan Lawler", number: 3}], 
      [{name: "Newman Central Catholic"}, {name: "N. Welty", number: 3}, {name: "L. Jungerman", number: 10}, {name: "E. Henkel", number: 11}, {name: "T. Powers", number: 11}, {name: "B. Newman", number: 12}, {name: "N. Britt", number: 13}, {name: "J. Ackman", number: 14}, {name: "G. Moran", number: 14}, {name: "C. Britt", number: 15}, {name: "S. Cheng", number: 20}, {name: "G. Koerner", number: 20}, {name: "C. McBride", number: 21}, {name: "G. Hunsberger", number: 22}, {name: "K. Brininger", number: 23}, {name: "A. Velasquez", number: 23}, {name: "K. Mullen", number: 24}, {name: "D. House", number: 30}, {name: "M. Williams", number: 32}, {name: "N. Neubauer", number: 42}],
      [{name: "Streator"}, {name: "C. Bedecker", number: 1}, {name: "J. Starkey", number: 2}, {name: "A. Ford", number: 3}, {name: "S. Good", number: 4}, {name: "M. Benning", number: 5}, {name: "A. Benning", number: 12}, {name: "P. Benning", number: 13}, {name: "A. Ward", number: 21}, {name: "J. Haynes", number: 23}, {name: "I. Beals", number: 24}, {name: "J. Tredway", number: 30}, {name: "M. Baker", number: 33}, {name: "L. Williamson", number: 55}],
      [{name: "Erie Prophetstown"}, {name: "Bryce Rosenow", number: 1}, {name: "Connor Sibley", number: 2}, {name: "Logan Ashdown", number: 5}, {name: "Clayton Johnson", number: 10}, {name: "Ashton Meier", number: 11}, {name: "Dawson Haagard", number: 13}, {name: "Kolby Franks", number: 21}, {name: "Jaime Miner", number: 22}, {name: "JJ Alden", number: 23}, {name: "Keegan Behrens", number: 24}, {name: "Brett VanDeWostine", number: 25}, {name: "Eric Robinson", number: 33}, {name: "Colin Rosenow", number: 34}, {name: "Carson Sterling", number: 35}, {name: "Hunter Woodworth", number: 43}, {name: "Nathan Johnson", number: 45}, {name: "Levi Cole", number: 50}],
      [{name: "Princeton"}, {name: "Brayden Debates", number: 2}, {name: "Jamison Reinhardt", number: 4}, {name: "Cole Adams", number: 10}, {name: "Tyler Gibson", number: 12}, {name: "Wyatt Davis", number: 14}, {name: "Cael Davis", number: 20}, {name: "Branden Haring", number: 22}, {name: "Noah Hoffman", number: 24}, {name: "Noah Atkinson", number: 30}, {name: "Isaac Legner", number: 32}, {name: "Caleb Haring", number: 34}, {name: "Grant Foes", number: 40}, {name: "Owen Rossler", number: 42}, {name: "Chris Davies", number: 44}, {name: "Kolby Reynolds", number: 50}, {name: "Jacob Burns", number: 51}],
      [{name: "Hall High School"}, {name: "Payton Plym", number: 1}, {name: "Tyvon Epps", number: 2}, {name: "Mac Resetich", number: 3}, {name: "Ethan Plym", number: 4}, {name: "Jeremy Mattingly", number: 5}, {name: "Antoine Jones", number: 10}, {name: "Bryan Fuentes", number: 12}, {name: "Luke Kelty", number: 15}, {name: "Trez Rybarczyk", number: 21}, {name: "Matt Hultz", number: 22}, {name: "Eddie Arteaga", number: 23}, {name: "Cole Wozniak", number: 24}, {name: "Riley Griffin", number: 32}, {name: "Cal Brokaw", number: 33}, {name: "Greg Larsen", number: 34}, {name: "Dom Orlandi", number: 40}],
      [{name: "Kewanee"}, {name: "Tayvian Taylor", number: 1}, {name: "Trenton Terry", number: 3}, {name: "Logan Zarvell", number: 5}, {name: "Niko Powe", number: 10}, {name: "David Edens", number: 11}, {name: "Keagan Anderson", number: 12}, {name: "TJ Arzola", number: 13}, {name: "Tristan Parks", number: 20}, {name: "Melcon Dejesus", number: 21}, {name: "Kavon Russell", number: 23}, {name: "Simeon Campbell", number: 24}, {name: "Gage Williams", number: 25}, {name: "Kazeer Johnson", number: 32}, {name: "Blaine Pickering", number: 33}, {name: "Carson Sauer", number: 34}, {name: "Xavier Crowe", number: 42}]]
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
      outData,
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
                      <Player key = {idx} name={player.name} number={player.number} homeUp={this.incrementHome} awayUp={this.incrementAway} totalUp={this.incrementTeamTotals} home={true}></Player>
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
                      <Player key = {idx} name={player.name} number={player.number} homeUp={this.incrementHome} awayUp={this.incrementAway} totalUp={this.incrementTeamTotals} home={false}></Player>
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
                    <option key={idx} value={idx}>{team[0].name}</option>
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
                    <option key={idx} value={idx}>{team[0].name}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
        <div className="InfoDump">
          {
            outData.map((str, idx) => {
              return (
                <div key={idx}>{str}</div>
              )
            })
          }
        </div>
      </div>
    </div>
    );
  }

  // componentDidMount = () => {
  //   let incomingRosters = []
  //   let workbook = new Excel.Workbook();
  //   workbook.csv.readFile('rosters.csv')
  //     .then(function() {
  //       workbook.eachSheet(function(worksheet, sheetId) {
  //         incomingRosters[incomingRosters.length] = worksheet.name;
  //       });
  //     });
  //   this.setState({
  //     rosters: incomingRosters
  //   });
  // }


  //QOL: don't let a team play against itself
  updateTeams = (homeBool) => {
    const rosterArr = this.state.rosters;
    if (homeBool) {
      let chosenRoster = rosterArr[document.getElementById("homeInput").value];
      let teamArr = chosenRoster.slice(1);
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
    const {quarter, outData, homeName, homeScore, awayName, awayScore, quarterCurrent, quarterData} = this.state;
    let stateQArr = this.state.quarterData;
    const quarterArr = ["1st", "2nd", "3rd", "4th", "Final"];
    event.preventDefault();

    if (positive && (quarter < 4)) {
      let homeInfo = [];
      let awayInfo = [];
      Object.keys(quarterCurrent.home).forEach((playerElem) => {
        homeInfo.push(String.fromCharCode(9) + ` ${playerElem}: Twos - ${quarterCurrent.home[playerElem].twos}, Threes - ${quarterCurrent.home[playerElem].threes}, Makes - ${quarterCurrent.home[playerElem].makes}, Misses - ${quarterCurrent.home[playerElem].misses}, FT% - ${quarterCurrent.home[playerElem].makes/(quarterCurrent.home[playerElem].makes + quarterCurrent.home[playerElem].misses)}`)
      })
  
      Object.keys(quarterCurrent.away).forEach((playerElem) => {
        awayInfo.push(String.fromCharCode(9) + ` ${playerElem}: Twos - ${quarterCurrent.away[playerElem].twos}, Threes - ${quarterCurrent.away[playerElem].threes}, Makes - ${quarterCurrent.away[playerElem].makes}, Misses - ${quarterCurrent.away[playerElem].misses}, FT% - ${quarterCurrent.away[playerElem].makes/(quarterCurrent.away[playerElem].makes + quarterCurrent.away[playerElem].misses)}`)
      })
      let headerStr = `End of ${quarterArr[quarter]} quarter: ${homeName}: ${homeScore} | ${awayName}: ${awayScore}`;
      stateQArr[quarter+1] = quarterCurrent;
      this.setState({
        quarter: quarter+1,
        outData: outData.concat([headerStr, `Home:`], homeInfo, [`Away:`], awayInfo),
        quarterData: stateQArr,
        quarterCurrent: {home: {}, away: {}}
      });
    }
    if (!positive && quarter > 0) {
      stateQArr[quarter-1] = quarterCurrent;
      this.setState({
        quarter: quarter-1,
        quarterCurrent: quarterData[quarter-1],
        quarterData: stateQArr
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

  incrementTeamTotals = (home, value, sign, name) => {
    const {
      homeMakes,
      homeMisses,
      homeTwos, 
      homeThrees,
      awayMakes,
      awayMisses,
      awayTwos,
      awayThrees,
      quarterCurrent
    } = this.state;

    let qtc = {}

    if (home) {

      let currentUpdate = quarterCurrent;

      if (!(name in quarterCurrent.home)) {
        currentUpdate = {
          ...quarterCurrent,
          home: {
            ...quarterCurrent.home,
            [name] : {misses : 0, makes : 0, twos : 0, threes : 0}
          }
        };
      }

      this.setState({
        quarterCurrent : currentUpdate
      }, () => {
        qtc = this.state.quarterCurrent;
        if (value === 0) {
          this.setState({
            homeMisses : homeMisses+sign,
            quarterCurrent : {
              ...qtc,
              home: {
                ...qtc.home,
                [name] : {
                  ...qtc.home[name],
                  misses: qtc.home[name].misses + 1
                }
              }
            }
          })
        }
        if (value === 1) {
          this.setState({
            homeMakes : homeMakes+sign,
            quarterCurrent : {
              ...qtc,
              home: {
                ...qtc.home,
                [name] : {
                  ...qtc.home[name],
                  makes: qtc.home[name].makes + 1
                }
              }
            }
          })
        }
        if (value === 2) {
          this.setState({
            homeTwos : homeTwos+sign,
            quarterCurrent : {
              ...qtc,
              home: {
                ...qtc.home,
                [name] : {
                  ...qtc.home[name],
                  twos: qtc.home[name].twos + 1
                }
              }
            }
          })
        }
        if (value === 3) {
          this.setState({
            homeThrees : homeThrees+sign,
            quarterCurrent : {
              ...qtc,
              home: {
                ...qtc.home,
                [name] : {
                  ...qtc.home[name],
                  threes: qtc.home[name].threes + 1
                }
              }
            }
          })
        }
      })
    }
    else {

      let currentUpdate = quarterCurrent;

      if (!(name in quarterCurrent.away)) {
        currentUpdate = {
          ...quarterCurrent,
          away: {
            ...quarterCurrent.away,
            [name] : {misses : 0, makes : 0, twos : 0, threes : 0}
          }
        };
      }

      this.setState({
        quarterCurrent : currentUpdate
      }, () => {
        qtc = this.state.quarterCurrent;
        if (value === 0) {
          this.setState({
            awayMisses : awayMisses+sign,
            quarterCurrent : {
              ...qtc,
              away: {
                ...qtc.away,
                [name] : {
                  ...qtc.away[name],
                  misses: qtc.away[name].misses + 1
                }
              }
            }
          })
        }
        if (value === 1) {
          this.setState({
            awayMakes : awayMakes+sign,
            quarterCurrent : {
              ...qtc,
              away: {
                ...qtc.away,
                [name] : {
                  ...qtc.away[name],
                  makes: qtc.away[name].makes + 1
                }
              }
            }
          })
        }
        if (value === 2) {
          this.setState({
            awayTwos : awayTwos+sign,
            quarterCurrent : {
              ...qtc,
              away: {
                ...qtc.away,
                [name] : {
                  ...qtc.away[name],
                  twos: qtc.away[name].twos + 1
                }
              }
            }
          })
        }
        if (value === 3) {
          this.setState({
            awayThrees : awayThrees+sign,
            quarterCurrent : {
              ...qtc,
              away: {
                ...qtc.away,
                [name] : {
                  ...qtc.away[name],
                  threes: qtc.away[name].threes + 1
                }
              }
            }
          })
        }
      })
    }
  }

}

export default App;
