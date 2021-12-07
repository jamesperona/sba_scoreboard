import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Basketball from './components/Basketball.js';
// import Football from './components/Football.js';
// import Firebase from './components/Firebase.js';

//TODO: pull rosters from database
//TODO: push game archive data to database
//TODO: ipad support
//TODO: format text of datadump, bold the big team info and leave the player stats as is after implementing cosmetic change

class App extends Component {
  state = {
    isAuth : false,
  }

  render() {
    // const{
    //   isAuth,
    // } = this.state;

    return (
      <>
      <div className="App">
        <Router>
          <div className="RouteHolder">
            {/* <Route path='/sba_scoreboard'>
              <ul>
                <li><Link to='/'>Basketball</Link></li> 
                <li><Link to='/sba_scoreboard/football'>Football</Link></li>
              </ul>
            </Route> */}
            <Route path='/' component={Basketball}/>
            {/* <Route path='/sba_scoreboard/football' component ={Football}/> */}
          </div>
        </Router>
      </div>
      </>
        
    );
  }

  componentDidMount = () => {
    document.title = "SBA Scoreboard"
  }


  responseGoogle = (response) => {
    console.log(response);
  }
}

export default App;
