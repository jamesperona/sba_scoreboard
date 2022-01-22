import React, { Component } from 'react';
import './Basketball.css';
import Player from './PlayerStat.js';
// import Database from './DatabaseInput.js';
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, query, where } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import GoogleLogin from 'react-google-login';


const firebaseConfig = {
  apiKey: "AIzaSyBJ4H3HkWi5jJt8JShN0W1i_uDW6M8inP4",
  authDomain: "sba-scoreboard.firebaseapp.com",
  databaseURL: "https://sba-scoreboard.firebaseio.com",
  projectId: "sba-scoreboard",
  storageBucket: "sba-scoreboard.appspot.com",
  messagingSenderId: "132558249658",
  appId: "1:132558249658:web:afbea7c1e0645284a2ac83",
  measurementId: "G-92M708WMTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default class Basketball extends Component {
    state = {
        unsubFromGamelist : function() {return;},
        unsubFromLivegame : function() {return;},
        subtract : "Add",
        isAuth : false,
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
        homeName : "Not Selected",
        awayName : "Not Selected",
        homeTeam : [],
        awayTeam : [],
        outData : [],
        gamesArr : [],
        livegameToLoad : "No Game Selected", 
        availableLivegames : [],
        rosters : [
          [{name: "Saint Bede Academy"}, {name: "Zayd Kahn", number: 0}, {name: "Jake Bradach", number: 1}, {name: "James Erwin", number: 2}, {name: "Callan Hueneburg", number: 3}, {name: "John Brady", number: 4}, {name: "Duncan Lawler", number: 10}, {name: "Landon Jackson", number: 13}, {name: "Max Medina", number: 15}, {name: "Isaiah Hart", number: 21}, {name: "Luke Story", number: 22}, {name: "Brendan Pillion", number: 23}, {name: "Connor Brown", number: 24}, {name: "Josh Grob", number: 25}, {name: "Paul Hart", number: 30}, {name: "Patrick Harmon", number: 31}, {name: "Hayden Arkins", number: 32}, {name: "Ali Arslan", number: 33}], 
          [{name: "Sterling Newman"}, {name: "Ayden Batten", number: 3}, {name: "Gabe Padilla", number: 10}, {name: "Mario Passini", number: 11}, {name: "Nolan Britt", number: 13}, {name: "Alex Rico", number: 14}, {name: "Tyler Garman", number: 15}, {name: "Owen Monroe", number: 20}, {name: "Alex Wiggington", number: 22}, {name: "Lucas Simpson", number: 23}, {name: "Ethan Van Landoit", number: 24}, {name: "Kenny Boessen", number: 25}, {name: "Marcus Williams", number: 32}, {name: "Griffin Moran", number: 33}, {name: "Jacob Donald8", number: 42}],
          [{name: "Streator"}, {name: "C. Bedecker", number: 1}, {name: "J. Starkey", number: 2}, {name: "A. Ford", number: 3}, {name: "S. Good", number: 4}, {name: "M. Benning", number: 5}, {name: "A. Benning", number: 12}, {name: "P. Benning", number: 13}, {name: "A. Ward", number: 21}, {name: "J. Haynes", number: 23}, {name: "I. Beals", number: 24}, {name: "J. Tredway", number: 30}, {name: "M. Baker", number: 33}, {name: "L. Williamson", number: 55}],
          [{name: "Erie Prophetstown"}, {name: "Bryce Rosenow", number: 1}, {name: "Hunter Woodworth", number: 2}, {name: "Mason Misfelst", number: 5}, {name: "Caleb Naftzger", number: 10}, {name: "Dawson Haagard", number: 13}, {name: "Kolby Franks", number: 21}, {name: "Keegan Behrens", number: 23}, {name: "Jack Minssen", number: 24}, {name: "Brody Naftzger", number: 25}, {name: "Connor Sibley", number: 34}, {name: "Noah Wiseley", number: 35}, {name: "Austin Cole", number: 43}, {name: "Ben Lantz", number: 45}],
          [{name: "Princeton"}, {name: "Teegan Davis", number: 2}, {name: "Jackson Dressler", number: 4}, {name: "Brady Byers", number: 10}, {name: "Bennett Sierens", number: 12}, {name: "Grady Thompson", number: 14}, {name: "Ryan Brucker", number: 20}, {name: "Christian Rosario", number: 22}, {name: "Brayden Scaggs", number: 24}, {name: "Mack Williams", number: 30}, {name: "Karter Patterson", number: 32}, {name: "Kolten Monroe", number: 34}, {name: "Jack Bauer", number: 40}, {name: "Kaden Monroe", number: 42}, {name: "Ethan Wallace", number: 44}],
          [{name: "Hall High School Varsity"}, {name: "Mac Resetich", number: 0}, {name: "Mauricio Ruiz", number: 1}, {name: "Gabe Lucas", number: 2}, {name: "Eder Castelan", number: 3}, {name: "Aiden Jones", number: 4}, {name: "Yair Santiag", number: 5}, {name: "Ashton Pecher", number: 10}, {name: "Ethan Plym", number: 12}, {name: "Max Bryant", number: 15}, {name: "Drake Garland", number: 21}, {name: "Hunter Meagher", number: 23}, {name: "Kyian Smith", number: 24}, {name: "Dom Galetti", number: 25}, {name: "Riley Coble", number: 32}, {name: "Payton Dye", number: 40}],
          [{name: "Hall High School Sophomore"}, {name: "Gianni Guerrini", number: 1}, {name: "Ashton Pecher", number: 2}, {name: "Max Bryant", number: 3}, {name: "Caleb Bickett", number: 5}, {name: "Evan Stefaniak", number: 10}, {name: "Ryan Watson", number: 11}, {name: "Grant Plym", number: 12}, {name: "Matthew Visocky", number: 15}, {name: "Hunter Meagher", number: 21}, {name: "Josh Scheri", number: 23}, {name: "Joseph Bacidore", number: 24}, {name: "Dominic Galetti", number: 25}, {name: "Yair Santiago", number: 32}, {name: "Riley Coble", number: 34}],
          [{name: "Kewanee"}, {name: "Izac Contreras", number: 1}, {name: "Keyontiss Patterson", number: 2}, {name: "Devin Hamrick", number: 3}, {name: "Blaise Lewis", number: 4}, {name: "Will Bruno", number: 5}, {name: "Niko Powe", number: 10}, {name: "Clark Heeren", number: 11}, {name: "Marquez Logan", number: 12}, {name: "Jordan Johnson", number: 13}, {name: "Julian Quintero", number: 20}, {name: "James Campbell", number: 21}, {name: "Jaiden Little", number: 22}, {name: "Malachi Israel", number: 23}, {name: "Brady Clark", number: 24}, {name: "Brendon Lewis", number: 25}, {name: "James Conner", number: 30}, {name: "Zach Henderson", number: 32}, {name: "Yahil Tirado", number: 33}, {name: "Jaytez Talbert", number: 34}, {name: "Brett Edens", number: 42}],
          [{name: "Bureau Valley"}, {name: "Brock Foster", number: 1}, {name: "Layton Britt", number: 3}, {name: "Bryson Smith", number: 4}, {name: "Carter Salisbury", number: 5}, {name: "Carter Balensiefen", number: 11}, {name: "Nevin Bolin", number: 13}, {name: "Brik Rediger", number: 14}, {name: "Cooper Balensiefen", number: 15}, {name: "Isaac Attig", number: 21}, {name: "Parker Stier", number: 23}, {name: "Sam Wright", number: 24}, {name: "Brady Higgins", number: 25}, {name: "Carter Wagner", number: 31}, {name: "Adam Johnson", number: 33}, {name: "Beau Spencer", number: 34}],
          [{name: "Seneca"}, {name: "Paxton Giertz", number: 0}, {name: "Zach Pfiefer", number: 3}, {name: "Kysen Klinker", number: 5}, {name: "Dalton DeGrush", number: 11}, {name: "Braden Ellis", number: 12}, {name: "Noah Quigley", number: 14}, {name: "Sam Kleich", number: 15}, {name: "Calvin Maierhofer", number: 20}, {name: "Owen Quigley", number: 21}, {name: "Dominic Traina", number: 22}, {name: "David Bergeson", number: 23}, {name: "Given Siegel", number: 24}, {name: "Lane Provance", number: 25},],
          [{name: "SBA Girls (Varsity)"}, {name: "Teghan Tillman", number: 4}, {name: "Payton Giordano", number: 5}, {name: "Erin Gray", number: 11}, {name: "Grace Maschmann",  number: 12}, {name: "Leah Smudzinski", number: 13}, {name: "Mia Waters", number: 20}, {name: "Lia Bosnich", number: 21}, {name: "Abbie George", number: 23}, {name: "Renn Ludford", number: 24}, {name: "Miranda Mazzorana", number: 33}, {name: "Ryann Stoudt", number: 34}, {name: "Rylee McGunnigal", number: 40}, {name: "Jaden Hart", number: 44}],
          [{name: "Seneca Girls (Varsity)"}, {name: "Cassidy Draves", number: 2}, {name: "Lauren Silvola", number: 3}, {name: "Ella Gilbertson", number: 4}, {name: "Kloey Lind", number: 5}, {name: "Brooklyn Giertz", number: 10}, {name: "Addison Olson", number: 11}, {name: "Brooke Roseland", number: 12}, {name: "Madison Bromberek", number: 13}, {name: "Mara Bruno", number: 14}, {name: "Arberita Jashari", number: 15}, {name: "Emma Smith", number: 20}, {name: "Carly Greve", number: 21}, {name: "Marie Chesharek", number: 23}, {name: "Kennedy Hartwig", number: 24}, {name: "Allie Arwood", number: 30}],
          [{name: "Mendota"}, {name: "Krew Bond", number: 1}, {name: "Damien Magallanes", number: 2}, {name: "Rafael Romero", number: 3}, {name: "Izaiah Nañez", number: 4}, {name: "Ted Landgraf", number: 5}, {name: "Josue Arteaga", number: 10}, {name: "Trent Stamberger", number: 11}, {name: "Dom Stamberger", number: 12}, {name: "Ryne Strouss", number: 13}, {name: "Ricky Orozco", number: 14}, {name: "Sergio Sandoval", number: 24}, {name: "Sean Figueroa", number: 44}, {name: "Nick Rosales", number: 45}],
          [{name: "DePue Girls"}, {name: "Julie Perez", number: 1}, {name: "Jasmine Rosales", number: 10}, {name: "Azucena Villagomez", number: 11}, {name: "Pamela Mejia", number: 12}, {name: "Lupita Hurtado", number: 14}, {name: "Summer Hayes", number: 21}, {name: "Maggie Gavina", number: 22}, {name: "Emily Marquez", number: 33}, {name: "Amy Munoz", number: 35}],
          [{name: "LaSalle-Peru"}, {name: "John Riva", number: 1}, {name: "Jack Scheri", number: 2}, {name: "Michael Jereb", number: 3}, {name: "Hunter Larson", number: 4}, {name: "Trenton Hancock", number: 5}, {name: "Alex Lenkaitis", number: 12}, {name: "Alex Newman", number: 14}, {name: "Tyler Hartman", number: 20}, {name: "Jarrett Skinner", number: 21}, {name: "Brayden Porter", number: 22}, {name: "Drake Weber", number: 23}, {name: "Nick Kreiser", number: 30}, {name: "Latrell Coulter", number: 35}],
          [{name: "Princeton Girls"}, {name: "Savanna Birkey", number: 4}, {name: "Olivia Gartin", number: 11}, {name: "Emma Wittig", number: 12}, {name: "Isa Ibarra", number: 15}, {name: "Maggie Davis", number: 20}, {name: "Mariah Hobson", number: 22}, {name: "Ana Mallery-Sondgeroth", number: 23}, {name: "Erin May", number: 24}, {name: "Brynn Hieronymus", number: 32}, {name: "Gracie Reynolds", number: 33}, {name: "Grace May", number: 35}, {name: "McKenzie Hecht", number: 40}, {name: "Taylor Quiram", number: 42}, {name: "Morgan Coleman", number: 44}, {name: "Erika Sorenson", number: 45}],
          [{name: "Putnam County Girls"}, {name: "Savannah Tucker", number: 1}, {name: "Olivia Lamis", number: 3}, {name: "Erin Brooker", number: 4}, {name: "Caitlyn Cioni", number: 5}, {name: "Avery Lamis", number: 12}, {name: "Zofia Uzella", number: 21}, {name: "Chloe Linton", number: 23}, {name: "Sophia Harris", number: 32}, {name: "Emily Bruch", number: 33}, {name: "Molly Boyd", number: 44}],
          [{name: "Aurora Christian Girls"}, {name: "A. Weeks", number: 1}, {name: "L. Anderson", number: 2}, {name: "M. Gardner", number: 3}, {name: "O. Plant", number: 4}, {name: "L. Lamanna", number: 11}, {name: "K. Carter", number: 13}, {name: "A. Griffin", number: 14}, {name: "M. Richert", number: 21}, {name: "F. Allgood", number: 22}, {name: "S. Iversen", number: 35}, {name: "M. Moore", number: 44}, {name: "T. Luse", number: 54}],
          [{name: "Putnam County"}, {name: "Owen Saepharn", number: 1}, {name: "Andrew Pyzska", number: 2}, {name: "Bryce Smith", number: 3}, {name: "Drew Taliani", number: 4}, {name: "Blake Baker", number: 5}, {name: "Austin Mattingly", number: 10}, {name: "Orlando Harris", number: 12}, {name: "Spencer Voss", number: 15}, {name: "Cole Vipond", number: 20}, {name: "Chad Olson", number: 21}, {name: "Lucas Wiesbrock", number: 22}, {name: "Jackson McDonald", number: 23}, {name: "Gavin Cimei", number: 24}, {name: "Wyatt Grimshaw", number: 25}],
          [{name: "Midland"}, {name: "Brady Hattan", number: 1}, {name: "Riley McFadden", number: 2}, {name: "Brad Weber", number: 3}, {name: "Brett Smith", number: 10}, {name: "Riccardo Rizzi", number: 12}, {name: "Will Meliska", number: 21}, {name: "Brandon Collins", number: 23}, {name: "Ryan Bella", number: 24}, {name: "Ryan Bigger", number: 32}, {name: "Billy Poignant", number: 33}, {name: "Ryan Riddell", number: 34}, {name: "David Rosa", number: 35}, {name: "Matt Shreffler", number: 40}, {name: "Hunter Benson", number: 43}],
          [{name: "GSW"}, {name: "Ty Johnson", number: 2}, {name: "Caydan Landry", number: 3}, {name: "Chris Ruiz", number: 5}, {name: "Nolan Perkins", number: 12}, {name: "Kevin Ferrari", number: 15}, {name: "Riley Morris", number: 20}, {name: "Dylan Hill", number: 21}, {name: "Nate Wise", number: 23}, {name: "Donovan Garcia", number: 24}, {name: "Michael Ashley", number: 25}, {name: "Brandon States", number: 32}, {name: "Chris Bexson", number: 33}, {name: "Aaron Tramutolo", number: 34}, {name: "Conner Steichen", number: 35}], 
          [{name: "Bureau Valley Girls"}, {name: "Kam Kolb", number: 1}, {name: "Lexi Marquez", number: 2}, {name: "Paige Wagner", number: 11}, {name: "Kyra Stoller", number: 14}, {name: "Jennifer Etheridge", number: 20}, {name: "Kaleen Carlson", number: 22}, {name: "Aspen Balensiefen", number: 23}, {name: "Ashley Nordstrom", number: 24}, {name: "Jaimie Schutz", number: 30}, {name: "Madison Dye", number: 34}],
          [{name: "Iowa Hawkeyes"}, {name: "Filip Rebraca", number: 0}, {name: "Joe Toussaint", number: 2}, {name: "Jordan Bohannon", number: 3}, {name: "Ahron Ulis", number: 4}, {name: "Tony Perkins", number: 11}, {name: "Austin Ash", number: 13}, {name: "Carter Kingsbury", number: 14}, {name: "Keegan Murray", number: 15}, {name: "Payton Sandfort", number: 20}, {name: "Patrick McCaffery", number: 22}, {name: "Josh Ogundele", number: 23}, {name: "Kris Murray", number: 24}, {name: "Luc Laketa", number: 25}, {name: "Connor McCaffery", number: 30}, {name: "Riley Mulvey", number: 44}],
          [{name: "Fighting Illini"}, {name: "Brandin Podziemski", number: 0}, {name: "Trent Frazier", number: 1}, {name: "Connor Serven", number: 2}, {name: "Jacob Grandison", number: 3}, {name: "Omar Payne", number: 4}, {name: "Andre Curbelo", number: 5}, {name: "Luke Goode", number: 10}, {name: "Alfonso Plummer", number: 11}, {name: "Brandon Lieb", number: 12}, {name: "Benjamin Bosmans-Verdonk", number: 13}, {name: "RJ Melendez", number: 15}, {name: "Da'Monte Wliliams", number: 20}, {name: "Kofi Cockburn", number: 21}, {name: "Austin Hutcherson", number: 22}, {name: "Coleman Hawkins", number: 33}],
          [{name: "Stillman Valley"}, {name: "Anthony Berg", number: 1}, {name: "Nick Giddings", number: 3}, {name: "Griffin Britnell", number: 4}, {name: "Drake Stewart", number: 5}, {name: "Caleb Johnson", number: 10}, {name: "Kale Rauman", number: 11}, {name: "Evan Davidson", number: 12}, {name: "Owen Dunseth", number: 13}, {name: "Brady Connors", number: 14}, {name: "Brett Pierce", number: 20}, {name: "Phillip Broski", number: 22}, {name: "Chris Seper", number: 23}, {name: "Lucas Meyer", number: 24}, {name: "Logan McKee", number: 32}, {name: "David Wilhite", number: 33}, {name: "Alex Rahn", number: 34}],
          [{name: "Indian Creek"}, {name: "David Negrete", number: 0}, {name: "Kalab Helgesen", number: 1}, {name: "Luke Barton", number: 2}, {name: "Drew Johnson", number: 3}, {name: "Colton Oleson", number: 4}, {name: "Grant Schlorff", number: 11}, {name: "Blake Simonson", number: 12}, {name: "Markus Magden", number: 22}, {name: "Brayden Todd", number: 23}, {name: "Alexander Schramer", number: 31}, {name: "Sam Genslinger", number: 33}, {name: "Jack Aloisio", number: 34}, {name: "Christian Meier", number: 45}, {name: "Blake McRoberts", number: 54}],
          [{name: "Dwight"}, {name: "Dawson Carr", number: 0}, {name: "Conner Telford", number: 3}, {name: "Daniel Ford", number: 4}, {name: "Jack Denker", number: 10}, {name: "Carter Butterbrodt", number: 11}, {name: "Landon Brown", number: 13}, {name: "Jack Groves", number: 20}, {name: "Jeremy Kapper", number: 21}, {name: "Kaleb Duden", number: 24}, {name: "Jack Duffy", number: 25}, {name: "Gavin Wykes", number: 33}, {name: "Tyler Frauli", number: 35}, {name: "Jace Gall", number: 40}, {name: "Luke Gallet", number: 42}, {name: "Wyatt Thompson", number: 44}],
          [{name: "Earlville"}, {name: "Diego Vazquez", number: 2}, {name: "Garrett Cook", number: 4}, {name: "Bryar Keller", number: 5}, {name: "Easton Fruit", number: 10}, {name: "Carlos Gonzalez", number: 11}, {name: "Adam Waite", number: 12}, {name: "Matt Kuter", number: 13}, {name: "Trenton Fruit", number: 15}, {name: "Griffin Cook", number: 20}, {name: "Grady Harp", number: 21}, {name: "Jeremy Weymouth", number: 22}, {name: "Rocco Morsovillo", number: 23}, {name: "Ryan Browder", number: 24}]]
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
          rosters,
          availableLivegames
        } = this.state
    
        const quarterArr = ["1st", "2nd", "3rd", "4th", "Final"]
    
        let d = new Date();
    
        return (
          <div className="Container">
              <div className="BasketballBoard">
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
                              <Player key = {player.name+Object.entries(player.data || {data: "empty"}).reduce((prev, new_) => prev + "" + new_[1])} initial = {player.data} name={player.name} number={player.number} homeUp={this.incrementHome} awayUp={this.incrementAway} totalUp={this.incrementTeamTotals} home={true} subtract={this.state.subtract} controller={isAuth} callback = {(new_data) => this.callbackUpdate(idx, true, new_data)}></Player>
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
                              <Player key = {player.name+Object.entries(player.data || {data: "empty"}).reduce((prev, new_) => prev + "" + new_[1])} initial = {player.data} name={player.name} number={player.number} homeUp={this.incrementHome} awayUp={this.incrementAway} totalUp={this.incrementTeamTotals} home={false} subtract={this.state.subtract} controller={isAuth} callback = {(new_data) => this.callbackUpdate(idx, false, new_data)}></Player>
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
                          <button onClick={() => this.subtractToggle()}>{this.state.subtract}</button>
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
                      <div>
                      {/* <Database></Database> */}
                      </div>
                    </div>
                  );
                } else {
                  return(
                      <div className="Selects">
                        <div>
                          <select defaultValue='default' id={"livegameInput"} onChange={(event) => this.updateLivegameSelect()}>
                            <option hidden disabled value='default'> Choose a game to view </option>
                            {
                              availableLivegames.map((game, idx) => {
                                return (
                                  <option key={idx} value={idx}>{game}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                      </div>
                  );
                }
              })()}
              <div className="LoginZone">
                <GoogleLogin clientId="132558249658-kt77ea389dsq23bmopt998l53ed6rlni.apps.googleusercontent.com"
                      buttonText="Login"
                      onSuccess={(response) => this.responseGoogle(response)}
                      onFailure={(response) => this.responseGoogle(response)}
                      cookiePolicy={'single_host_origin'}/>
                <div className="LoginWarning">Google Login only needed for admin users.</div>
              </div>
            </div>
            
        );
      }
    
      componentDidUpdate = async () => {
        if(this.state.homeName !== "Not Selected" && this.state.awayName !== "Not Selected" && this.state.isAuth) {
          await this.sendLivegame();
        }  
      }

      componentDidMount = async () => {
        if(this.state.isAuth) {
          return;
        }
        let livegameArray = [];
        const q = query(collection(db, "gamestates"), where("date", "!=", ""));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          livegameArray.push(doc.id);
        });
        this.setState({availableLivegames : livegameArray});
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          livegameArray = [];
          querySnapshot.forEach((doc) => {
            livegameArray.push(doc.id);
          });
          this.setState({availableLivegames : livegameArray});
        });
        this.setState({unsubFromGamelist: unsubscribe});
      }
    
      sendLivegame = async () => {

        console.log('updating livegame');

        let date = new Date();
        const current_game_id = this.state.homeName + " vs. " + this.state.awayName + " on " + date.toDateString();

        const state_copy = Object.assign({}, this.state);

        delete state_copy.isAuth;
        delete state_copy.rosters;
        delete state_copy.quarterCurrent;
        delete state_copy.availableLivegames;
        delete state_copy.quarterData;
        delete state_copy.unsubFromLivegame;
        delete state_copy.unsubFromGamelist;
        delete state_copy.subtract;
        // console.log(current_game_id);
        // console.log(state_copy);

        await setDoc(doc(db, "gamestates", current_game_id), {
          date: date,
          state: state_copy
        });
      }
    
      recieveLivegame = () => {

        if (this.state.isAuth) {
          return;
        }
        const livegame_doc_ref = doc(db, 'gamestates/' + this.state.livegameToLoad);
        getDoc(livegame_doc_ref).then((result) => {
          this.setState(result.data().state);
        });
        
        const unsubscribe = onSnapshot(doc(db, 'gamestates/' + this.state.livegameToLoad), (doc) => {
          const copy = {...doc.data().state};
          // console.log('new data recieved');
          // console.log(copy);
          this.setState(copy);
        });
        this.setState({unsubFromLivegame: unsubscribe});

      }
    
      responseGoogle = (response) => {
        console.log(response);
        if(response.su.ev === "j@mesperona.com" || response.su.ev === "jimaperona@gmail.com") {
          alert("Authentication Successful");
          this.setState({isAuth: true});
          this.state.unsubFromGamelist();
          this.state.unsubFromLivegame();
        } else {
          alert("Improper Authentication");
        }
      }

      callbackUpdate = (idx, home_bool, new_data) => {
        if(home_bool) {
          let homeArr = this.state.homeTeam;
          homeArr[idx].data = new_data;
          this.setState({homeTeam : homeArr});
        } else {
          let awayArr = this.state.awayTeam;
          awayArr[idx].data = new_data;
          this.setState({awayTeam : awayArr});
        }
        
      }
    
      updateLivegameSelect = () => {
        this.state.unsubFromLivegame();
        let chosenLivegame = this.state.availableLivegames[document.getElementById("livegameInput").value];
        this.setState({livegameToLoad: chosenLivegame}, () => {
          this.recieveLivegame();
        });
      }

      //QOL: don't let a team play against itself
      updateTeams = (homeBool) => {
        let chosenRoster = "";
        const rosterArr = this.state.rosters;
        if (homeBool) {
          chosenRoster = rosterArr[document.getElementById("homeInput").value];
          let teamArr = chosenRoster.slice(1);
          let playersToSend = teamArr.map((playerElem) => {
            return playerElem;
          });
          this.setState({
            homeTeam: playersToSend,
            homeName: chosenRoster[0].name
          });
        } else {
          chosenRoster = rosterArr[document.getElementById("awayInput").value];
          let teamArr = chosenRoster.slice(1);
          let playersToSend = teamArr.map((playerElem) => {
            return playerElem;
          });
          this.setState({
            awayTeam: playersToSend,
            awayName: chosenRoster[0].name
          });
        } 
        // if((this.state.homeName !== "Not Selected" && !homeBool) || (this.state.awayName !== "Not Selected" && homeBool)) {
        //   console.log("trying to find previous state");
        //   let date = new Date();
        //   let current_game_id = "";
        //   if (homeBool) {
        //     current_game_id = chosenRoster[0].name + " vs. " + this.state.awayName + " on " + date.toDateString();
        //   } else {
        //     current_game_id = this.state.homeName + " vs. " + chosenRoster[0].name + " on " + date.toDateString();
        //   }
        //   getDoc(current_game_id).then((result) => {
        //     if(result.exists()) {
        //       console.log(result.data());
        //       this.setState(result.data().state);
        //     }
        //   });
        // }  
      }
    
      subtractToggle = () => {
        if (this.state.subtract === "Subtract") {
          this.setState({subtract: "Add"});
        } else {
          this.setState({subtract: "Subtract"});
        }
      }
    
      //TODO: im aware of a bug where if you advance the quarter, add points, backtrack the quarter, and then advance once more, the data dump handles it as if the point was scored within the quarter you backtracked to
      //fixable, but annoying
      incrementQuarter = async (positive, event) => {
        const {isAuth, quarter, outData, homeName, homeScore, awayName, awayScore, quarterCurrent, quarterData} = this.state;
        if (!isAuth) {
          return;
        }
        if (this.state.subtract === "Subtract") {
          positive = false;
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
          //TODO: write a descriptive comment here because this is indecipherable [me, in 2021: oh no]
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
        }
      }
     
}