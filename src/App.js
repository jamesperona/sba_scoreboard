import React, { Component } from 'react';
import './App.css';
import Player from './components/PlayerStat.js';
import Database from './components/DatabaseInput.js';
import axios from 'axios';
import GoogleLogin from 'react-google-login';

//TODO: pull rosters from database
//TODO: push game archive data to database
//TODO: ipad support, slider formatting is (kinda) in place, didn't get it actually working yet though
//TODO: format text of datadump, bold the big team info and leave the player stats as is after implementing cosmetic change

const url = 'http://localhost:8080/api';

class App extends Component {
  state = {
    isAuth : true,
    dateInfo : "",
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
    gamesArr : [],
    rosters : [
      [{name: "Saint Bede Academy"}, {name: "Jake Bradach", number: 1}, {name: "Luke Story", number: 2}, {name: "Logan Griggs", number: 3}, {name: "Braden Damerell", number: 4}, {name: "Duncan Lawler", number: 10}, {name: "Gunnar Jauch", number: 13}, {name: "Nathan Potthoff", number: 21}, {name: "Logan Link", number: 22}, {name: "Oskar Flodstrom", number: 23}, {name: "Josh Grob", number: 25}, {name: "Patrick Harmon", number: 31}, {name: "Ethan Sramek", number: 45}, {name: "Nick Pearse", number: 0}], 
      [{name: "Newman Central Catholic"}, {name: "N. Welty", number: 3}, {name: "L. Jungerman", number: 10}, {name: "E. Henkel", number: 11}, {name: "T. Powers", number: 11}, {name: "B. Newman", number: 12}, {name: "N. Britt", number: 13}, {name: "J. Ackman", number: 14}, {name: "G. Moran", number: 14}, {name: "C. Britt", number: 15}, {name: "S. Cheng", number: 20}, {name: "G. Koerner", number: 20}, {name: "C. McBride", number: 21}, {name: "G. Hunsberger", number: 22}, {name: "K. Brininger", number: 23}, {name: "A. Velasquez", number: 23}, {name: "K. Mullen", number: 24}, {name: "D. House", number: 30}, {name: "M. Williams", number: 32}, {name: "N. Neubauer", number: 42}],
      [{name: "Streator"}, {name: "C. Bedecker", number: 1}, {name: "J. Starkey", number: 2}, {name: "A. Ford", number: 3}, {name: "S. Good", number: 4}, {name: "M. Benning", number: 5}, {name: "A. Benning", number: 12}, {name: "P. Benning", number: 13}, {name: "A. Ward", number: 21}, {name: "J. Haynes", number: 23}, {name: "I. Beals", number: 24}, {name: "J. Tredway", number: 30}, {name: "M. Baker", number: 33}, {name: "L. Williamson", number: 55}],
      [{name: "Erie Prophetstown"}, {name: "Bryce Rosenow", number: 1}, {name: "Connor Sibley", number: 2}, {name: "Logan Ashdown", number: 5}, {name: "Clayton Johnson", number: 10}, {name: "Ashton Meier", number: 11}, {name: "Dawson Haagard", number: 13}, {name: "Kolby Franks", number: 21}, {name: "Jaime Miner", number: 22}, {name: "JJ Alden", number: 23}, {name: "Keegan Behrens", number: 24}, {name: "Brett VanDeWostine", number: 25}, {name: "Eric Robinson", number: 33}, {name: "Colin Rosenow", number: 34}, {name: "Carson Sterling", number: 35}, {name: "Hunter Woodworth", number: 43}, {name: "Nathan Johnson", number: 45}, {name: "Levi Cole", number: 50}],
      [{name: "Princeton"}, {name: "Brayden Debates", number: 2}, {name: "Jamison Reinhardt", number: 4}, {name: "Cole Adams", number: 10}, {name: "Tyler Gibson", number: 12}, {name: "Wyatt Davis", number: 14}, {name: "Cael Davis", number: 20}, {name: "Branden Haring", number: 22}, {name: "Noah Hoffman", number: 24}, {name: "Noah Atkinson", number: 30}, {name: "Isaac Legner", number: 32}, {name: "Caleb Haring", number: 34}, {name: "Grant Foes", number: 40}, {name: "Owen Rossler", number: 42}, {name: "Chris Davies", number: 44}, {name: "Kolby Reynolds", number: 50}, {name: "Jacob Burns", number: 51}],
      [{name: "Hall High School"}, {name: "Payton Plym", number: 1}, {name: "Tyvon Epps", number: 2}, {name: "Mac Resetich", number: 3}, {name: "Ethan Plym", number: 4}, {name: "Jeremy Mattingly", number: 5}, {name: "Antoine Jones", number: 10}, {name: "Bryan Fuentes", number: 12}, {name: "Luke Kelty", number: 15}, {name: "Trez Rybarczyk", number: 21}, {name: "Matt Hultz", number: 22}, {name: "Eddie Arteaga", number: 23}, {name: "Cole Wozniak", number: 24}, {name: "Riley Griffin", number: 32}, {name: "Cal Brokaw", number: 33}, {name: "Greg Larsen", number: 34}, {name: "Dom Orlandi", number: 40}],
      [{name: "Kewanee"}, {name: "Tayvian Taylor", number: 1}, {name: "TJ Arzola", number: 3}, {name: "Will Bruno", number: 5}, {name: "Niko Powe", number: 10}, {name: "Keagan Anderson", number: 11}, {name: "Cameron Conley", number: 12}, {name: "Jordan Johnson", number: 13}, {name: "Melcon DeJesus", number: 21}, {name: "Brady Clark", number: 24}, {name: "Brendon Lewis", number: 25}, {name: "Kazeer Johnson", number: 32}],
      [{name: "Bureau Valley"}, {name: "Brock Foster", number: 1}, {name: "Layton Britt", number: 3}, {name: "Bryson Smith", number: 4}, {name: "Carter Salisbury", number: 5}, {name: "Logan Rinehart", number: 11}, {name: "Nevin Bolin", number: 13}, {name: "Luke Moon", number: 14}, {name: "Noah Harris", number: 15}, {name: "Jonah Johnson", number: 21}, {name: "Evan Eckberg", number: 23}, {name: "Carter Balensiefen", number: 24}, {name: "Brady Higgins", number: 25}, {name: "Alessandro Bertolani", number: 31}, {name: "Adam Johnson", number: 33}, {name: "Elija Kruse", number: 34}, {name: "Drew Spencer", number: 35}],
      [{name: "Seneca"}, {name: "B. Roe", number: 3}, {name: "C. O'boyle", number: 4}, {name: "A. Stiegler", number: 5}, {name: "G. Siegel", number: 10}, {name: "T. Cahill", number: 11}, {name: "C. Underhill", number: 12}, {name: "N. Quigley", number: 14}, {name: "B. Krause", number: 20}, {name: "T. Hauch", number: 21}, {name: "T. Van Ness", number: 22}, {name: "C. Carey", number: 23}, {name: "C. Hauch", number: 24}, {name: "T. Thorsen", number: 35},],
      [{name: "SBA Girls (Varsity)"}, {name: "Teghan Tillman", number: 4}, {name: "Payton Giordano", number: 5}, {name: "Erin Gray", number: 11}, {name: "Grace Maschmann",  number: 12}, {name: "Leah Smudzinski", number: 13}, {name: "Mia Waters", number: 20}, {name: "Lia Bosnich", number: 21}, {name: "Abbie George", number: 23}, {name: "Renn Ludford", number: 24}, {name: "Miranda Mazzorana", number: 33}, {name: "Ryann Stoudt", number: 34}, {name: "Rylee McGunnigal", number: 40}, {name: "Jaden Hart", number: 44}],
      [{name: "Seneca Girls (Varsity)"}, {name: "Cassidy Draves", number: 2}, {name: "Lauren Silvola", number: 3}, {name: "Ella Gilbertson", number: 4}, {name: "Kloey Lind", number: 5}, {name: "Brooklyn Giertz", number: 10}, {name: "Addison Olson", number: 11}, {name: "Brooke Roseland", number: 12}, {name: "Madison Bromberek", number: 13}, {name: "Mara Bruno", number: 14}, {name: "Arberita Jashari", number: 15}, {name: "Emma Smith", number: 20}, {name: "Carly Greve", number: 21}, {name: "Marie Chesharek", number: 23}, {name: "Kennedy Hartwig", number: 24}, {name: "Allie Arwood", number: 30}],
      [{name: "Mendota"}, {name: "Emiliano Arteaga", number: 1}, {name: "Chris Sandoval", number: 2}, {name: "Gavin Glazebrook", number: 3}, {name: "Jae Shaun Hughes", number: 5}, {name: "Abraham Guzman", number: 10}, {name: "Cole Stremlau", number: 11}, {name: "Josue Arteaga", number: 14}, {name: "Krew Bond", number: 15}, {name: "Trent Stamberger", number: 24}, {name: "Alexis Quintana", number: 33}, {name: "Mauricio Escatel", number: 35}, {name: "Aaron Schmidt", number: 44}, {name: "Rafa Romero", number: 45}],
      [{name: "DePue Girls"}, {name: "Julie Perez", number: 1}, {name: "Jasmine Rosales", number: 10}, {name: "Azucena Villagomez", number: 11}, {name: "Pamela Mejia", number: 12}, {name: "Lupita Hurtado", number: 14}, {name: "Summer Hayes", number: 21}, {name: "Maggie Gavina", number: 22}, {name: "Emily Marquez", number: 33}, {name: "Amy Munoz", number: 35}],
      [{name: "LaSalle-Peru"}, {name: "John Riva", number: 1}, {name: "Jack Scheri", number: 2}, {name: "Michael Jereb", number: 3}, {name: "Hunter Larson", number: 4}, {name: "Trenton Hancock", number: 5}, {name: "Alex Lenkaitis", number: 12}, {name: "Alex Newman", number: 14}, {name: "Tyler Hartman", number: 20}, {name: "Jarrett Skinner", number: 21}, {name: "Brayden Porter", number: 22}, {name: "Drake Weber", number: 23}, {name: "Nick Kreiser", number: 30}, {name: "Latrell Coulter", number: 35}],
      [{name: "Putnam County Girls"}, {name: "Savannah Tucker", number: 1}, {name: "Olivia Lamis", number: 3}, {name: "Erin Brooker", number: 4}, {name: "Caitlyn Cioni", number: 5}, {name: "Avery Lamis", number: 12}, {name: "Zofia Uzella", number: 21}, {name: "Chloe Linton", number: 23}, {name: "Sophia Harris", number: 32}, {name: "Emily Bruch", number: 33}, {name: "Molly Boyd", number: 44}],
      [{name: "Aurora Christian Girls"}, {name: "A. Weeks", number: 1}, {name: "L. Anderson", number: 2}, {name: "M. Gardner", number: 3}, {name: "O. Plant", number: 4}, {name: "L. Lamanna", number: 11}, {name: "K. Carter", number: 13}, {name: "A. Griffin", number: 14}, {name: "M. Richert", number: 21}, {name: "F. Allgood", number: 22}, {name: "S. Iversen", number: 35}, {name: "M. Moore", number: 44}, {name: "T. Luse", number: 54}],
      [{name: "Putnam County"}, {name: "Jacob Williams", number: 1}, {name: "Luke Pederson", number: 2}, {name: "Jacob Wiesbrock", number: 3}, {name: "Jakob Pyszka", number: 4}, {name: "Matthew Liebhart", number: 5}, {name: "Luke Olson", number: 10}, {name: "Stephen Mecagni", number: 12}, {name: "Nick Mattern", number: 14}, {name: "Adam Currie", number: 15}, {name: "Drake Smith", number: 21}, {name: "Jackson McDonald", number: 23}, {name: "Peyton Williams", number: 24}],
      [{name: "Midland"}, {name: "Brady Hattan", number: 1}, {name: "Riley McFadden", number: 2}, {name: "Brad Weber", number: 3}, {name: "Brett Smith", number: 10}, {name: "Riccardo Rizzi", number: 12}, {name: "Will Meliska", number: 21}, {name: "Brandon Collins", number: 23}, {name: "Ryan Bella", number: 24}, {name: "Ryan Bigger", number: 32}, {name: "Billy Poignant", number: 33}, {name: "Ryan Riddell", number: 34}, {name: "David Rosa", number: 35}, {name: "Matt Shreffler", number: 40}, {name: "Hunter Benson", number: 43}],
      [{name: "GSW"}, {name: "Ty Johnson", number: 2}, {name: "Caydan Landry", number: 3}, {name: "Chris Ruiz", number: 5}, {name: "Nolan Perkins", number: 12}, {name: "Kevin Ferrari", number: 15}, {name: "Riley Morris", number: 20}, {name: "Dylan Hill", number: 21}, {name: "Nate Wise", number: 23}, {name: "Donovan Garcia", number: 24}, {name: "Michael Ashley", number: 25}, {name: "Brandon States", number: 32}, {name: "Chris Bexson", number: 33}, {name: "Aaron Tramutolo", number: 34}, {name: "Conner Steichen", number: 35}], 
      [{name: "Bureau Valley Girls"}, {name: "Kam Kolb", number: 1}, {name: "Lexi Marquez", number: 2}, {name: "Paige Wagner", number: 11}, {name: "Kyra Stoller", number: 14}, {name: "Jennifer Etheridge", number: 20}, {name: "Kaleen Carlson", number: 22}, {name: "Aspen Balensiefen", number: 23}, {name: "Ashley Nordstrom", number: 24}, {name: "Jaimie Schutz", number: 30}, {name: "Madison Dye", number: 34}]]
  }


  render() {
    const{
      isAuth,
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
              {/* <label class="switch">
                <input type="checkbox"></input>
                <span class="slider round"></span>
              </label> */}
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
                          <Player key = {idx} name={player.name} number={player.number} homeUp={this.incrementHome} awayUp={this.incrementAway} totalUp={this.incrementTeamTotals} home={true} controller={isAuth}></Player>
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
                          <Player key = {idx} name={player.name} number={player.number} homeUp={this.incrementHome} awayUp={this.incrementAway} totalUp={this.incrementTeamTotals} home={false} controller={isAuth}></Player>
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
          
          {(() => {
            if (isAuth) {
              return(
                <div className="Input">
                  <div className="Selects">
                    <div>
                      Home Team: &nbsp;
                      <select defaultValue='default' id={"homeInput"} onChange={(event) => this.updateTeams(true)}>
                        <option hidden disabled value='default'> -- select a team -- </option>
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
                      <select defaultValue='default' id={"awayInput"} onChange={(event) => this.updateTeams(false)}>
                        <option hidden disabled value='default'> -- select a team -- </option>
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
                  <Database></Database>
                </div>
              );
            } else {
              return;
            }
          })()}


          <GoogleLogin clientId="679888380619-6k6qu0ms1dnjm4rc5blpi3j99a670sgd.apps.googleusercontent.com"
                      buttonText="Login"
                      onSuccess={(response) => this.responseGoogle(response)}
                      onFailure={(response) => this.responseGoogle(response)}
                      cookiePolicy={'single_host_origin'}/>
        </div>
    );
  }

  componentDidMount = () => {
    // axios.get(`${url}/rosters`).then(res => {
    //   console.log(res);
    // });
  }

  //NOTE: this works both as a post and update method, attempting to find a previously posted state
  // with a matching "dateInfo" param, updating if found, posting new if not
  sendLivegame = () => {
    console.log("sending livegame");
    // if (this.state.dateInfo !== "") {
    //   axios.put(`${url}/livegame`, this.state);
    // } else {
    //   axios.post(`${url}/livegame`, this.state)
    // }
  }

  recieveLivegame = () => {
    axios.get(`${url}/livegame` , this.state.dateInfo).then(res => {
      this.setState(res.data);
    });
  }

  responseGoogle = (response) => {
    console.log(response);
    if (response.Qt.Au === "j@mesperona.com") {
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
