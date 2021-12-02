import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Basketball from './components/Basketball.js';
import Football from './components/Football.js';
import Firebase from './components/Firebase.js';
import GoogleLogin from 'react-google-login';

//TODO: pull rosters from database
//TODO: push game archive data to database
//TODO: ipad support
//TODO: format text of datadump, bold the big team info and leave the player stats as is after implementing cosmetic change

class App extends Component {
  state = {
    isAuth : false,
  }

  render() {
    const{
      isAuth,
    } = this.state;

    return (
      <>
      <div className="App">
        <Router>
          <div className="RouteHolder">
            <Route path='/'>
              <ul>
                <li><Link to='/basketball'>Basketball</Link></li> 
                <li><Link to='/football'>Football</Link></li>
                <li><Link to='/firebase'>Firebase</Link></li>
              </ul>
            </Route>
            <Route path='/basketball' component={Basketball}/>
            <Route path='/football' component ={Football}/>
            <Route path='/firebase' component ={Firebase}/>
          </div>
        </Router>
        <GoogleLogin clientId="679888380619-6k6qu0ms1dnjm4rc5blpi3j99a670sgd.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={(response) => this.responseGoogle(response)}
                    onFailure={(response) => this.responseGoogle(response)}
                    cookiePolicy={'single_host_origin'}/>
      </div>
      </>
        
    );
  }

  componentDidMount = () => {
  }


  responseGoogle = (response) => {
    if (response.Rs.Ct === "j@mesperona.com") {
      alert("Authentication Success");
      this.setState({isAuth : true});
    } else {
      alert("Improper Authentication");
    }
  }

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
      }, () => {this.sendLivegame()});
    } else {
      let chosenRoster = rosterArr[document.getElementById("awayInput").value];
      let teamArr = chosenRoster.slice(1);
      let playersToSend = teamArr.map((playerElem) => {
        return playerElem;
      });
      this.setState({
        awayTeam: playersToSend,
        awayName: chosenRoster[0].name
      }, () => {this.sendLivegame()});
    }


  }


  //TODO: im aware of a bug where if you advance the quarter, add points, backtrack the quarter, and then advance once more, the data dump handles it as if the point was scored within the quarter you backtracked to
  //fixable, but annoying
  incrementQuarter = (positive, event) => {
    const {isAuth, quarter, outData, homeName, homeScore, awayName, awayScore, quarterCurrent, quarterData} = this.state;
    if (!isAuth) {
      return;
    }
    let stateQArr = this.state.quarterData;
    const quarterArr = ["1st", "2nd", "3rd", "4th", "Final"];
    event.preventDefault();

    if (positive && (quarter < 4)) {
      let homeInfo = [];
      let awayInfo = [];
      Object.keys(quarterCurrent.home).forEach((playerElem) => {
        homeInfo.push(String.fromCharCode(9) + ` ${playerElem}: Twos - ${quarterCurrent.home[playerElem].twos}, Threes - ${quarterCurrent.home[playerElem].threes}, Total Points - ${2*quarterCurrent.home[playerElem].twos + 3*quarterCurrent.home[playerElem].threes + quarterCurrent.home[playerElem].makes}`)
      })
  
      Object.keys(quarterCurrent.away).forEach((playerElem) => {
        awayInfo.push(String.fromCharCode(9) + ` ${playerElem}: Twos - ${quarterCurrent.away[playerElem].twos}, Threes - ${quarterCurrent.away[playerElem].threes}, Total Points - ${2*quarterCurrent.away[playerElem].twos + 3*quarterCurrent.away[playerElem].threes + quarterCurrent.away[playerElem].makes}`)
      })
      let headerStr = `End of ${quarterArr[quarter]} quarter: ${homeName}: ${homeScore} | ${awayName}: ${awayScore}`;
      stateQArr[quarter+1] = quarterCurrent;
      this.setState({
        quarter: quarter+1,
        outData: outData.concat([headerStr, `Home:`], homeInfo, [`Away:`], awayInfo),
        quarterData: stateQArr,
        quarterCurrent: {home: {}, away: {}}
      });
    } else if (!positive && quarter > 0) {
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
    }, () => {this.sendLivegame()});
  }

  incrementAway = (valueToIncrement) => {
    const {awayScore} = this.state;
    this.setState({
      awayScore: awayScore+valueToIncrement
    }, () => {this.sendLivegame()});
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
      //TODO: write a descriptive comment here because this is indecipherable
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
                  misses: qtc.home[name].misses + sign
                }
              }
            }
          })
        }
        else if (value === 1) {
          this.setState({
            homeMakes : homeMakes+sign,
            quarterCurrent : {
              ...qtc,
              home: {
                ...qtc.home,
                [name] : {
                  ...qtc.home[name],
                  makes: qtc.home[name].makes + sign
                }
              }
            }
          })
        }
        else if (value === 2) {
          this.setState({
            homeTwos : homeTwos+sign,
            quarterCurrent : {
              ...qtc,
              home: {
                ...qtc.home,
                [name] : {
                  ...qtc.home[name],
                  twos: qtc.home[name].twos + sign
                }
              }
            }
          })
        }
        else if (value === 3) {
          this.setState({
            homeThrees : homeThrees+sign,
            quarterCurrent : {
              ...qtc,
              home: {
                ...qtc.home,
                [name] : {
                  ...qtc.home[name],
                  threes: qtc.home[name].threes + sign
                }
              }
            }
          })
        }
      })
      this.sendLivegame();
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
                  misses: qtc.away[name].misses + sign
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
                  makes: qtc.away[name].makes + sign
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
                  twos: qtc.away[name].twos + sign
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
                  threes: qtc.away[name].threes + sign
                }
              }
            }
          })
        }
      })
      this.sendLivegame();
    }
  }

}

export default App;
