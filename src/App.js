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
            <Route path='/sba_scoreboard'>
              <ul>
                <li><Link to='/sba_scoreboard/basketball'>Basketball</Link></li> 
                {/* <li><Link to='/sba_scoreboard/football'>Football</Link></li> */}
              </ul>
            </Route>
            <Route path='/sba_scoreboard/basketball' component={Basketball}/>
            {/* <Route path='/sba_scoreboard/football' component ={Football}/> */}
          </div>
        </Router>
        <GoogleLogin clientId="132558249658-kt77ea389dsq23bmopt998l53ed6rlni.apps.googleusercontent.com"
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
}

export default App;
