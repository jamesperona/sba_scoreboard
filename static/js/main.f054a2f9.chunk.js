(this.webpackJsonpscoreboard=this.webpackJsonpscoreboard||[]).push([[0],{252:function(e,a,n){"use strict";n.r(a);var r=n(3),t=n.n(r),m=n(60),u=n.n(m),o=(n(71),n(1)),s=n(2),l=n(6),c=n(7),i=n(37),b=n(12),h=(n(72),n(9)),d=n(8),y=n(0),p=n.n(y),f=n(4),v=(n(73),n(74),function(e){Object(l.a)(n,e);var a=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,t=new Array(r),m=0;m<r;m++)t[m]=arguments[m];return(e=a.call.apply(a,[this].concat(t))).state={total:0,twomakes:0,threemakes:0,ftmakes:0,ftmisses:0,fttotal:0,percentage:0,personalScore:0},e.componentDidMount=function(){e.setState(e.props.initial||{})},e.incrementFTMakes=function(a,n){var r=e.state,t=r.total,m=r.ftmakes,u=r.personalScore,o=r.fttotal;e.props.controller&&(n.preventDefault(),-1===a&&0===m||(e.setState({total:t+a,fttotal:o+a,ftmakes:m+a,percentage:o+a!==0?(100*(m+a)/(o+a)).toFixed(0):0,personalScore:u+1*a},(function(){var a=e.state;e.props.callback(a)})),e.props.home?e.props.homeUp(1*a):e.props.awayUp(1*a),e.props.totalUp(e.props.home,1,a,e.props.name)))},e.incrementFTMisses=function(a,n){var r=e.state,t=r.total,m=r.ftmakes,u=r.ftmisses,o=r.fttotal;e.props.controller&&(n.preventDefault(),-1===a&&0===u||(e.setState({total:t+a,fttotal:o+a,ftmisses:u+a,percentage:o+a!==0?(100*m/(o+a)).toFixed(0):0},(function(){var a=e.state;e.props.callback(a)})),e.props.totalUp(e.props.home,0,a,e.props.name)))},e.incrementTwos=function(a,n){var r=e.state,t=r.total,m=r.twomakes,u=r.personalScore;e.props.controller&&(n.preventDefault(),-1===a&&0===m||(e.setState({total:t+a,twomakes:m+a,personalScore:u+2*a},(function(){var a=e.state;e.props.callback(a)})),e.props.home?e.props.homeUp(2*a):e.props.awayUp(2*a),e.props.totalUp(e.props.home,2,a,e.props.name)))},e.incrementThrees=function(a,n){var r=e.state,t=r.total,m=r.threemakes,u=r.personalScore;e.props.controller&&(n.preventDefault(),-1===a&&0===m||(e.setState({total:t+a,threemakes:m+a,personalScore:u+3*a},(function(){var a=e.state;e.props.callback(a)})),e.props.home?e.props.homeUp(3*a):e.props.awayUp(3*a),e.props.totalUp(e.props.home,3,a,e.props.name)))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return t.a.createElement("tr",null,t.a.createElement("td",null,this.props.number),t.a.createElement("td",null,this.props.name),t.a.createElement("td",null,this.state.personalScore),t.a.createElement("td",{className:"clickable",onClick:function(a){return e.incrementTwos(1,a)},onContextMenu:function(a){return e.incrementTwos(-1,a)}},this.state.twomakes),t.a.createElement("td",{className:"clickable",onClick:function(a){return e.incrementThrees(1,a)},onContextMenu:function(a){return e.incrementThrees(-1,a)}},this.state.threemakes),t.a.createElement("td",{className:"clickable",onClick:function(a){return e.incrementFTMakes(1,a)},onContextMenu:function(a){return e.incrementFTMakes(-1,a)}},this.state.ftmakes),t.a.createElement("td",{className:"clickable",onClick:function(a){return e.incrementFTMisses(1,a)},onContextMenu:function(a){return e.incrementFTMisses(-1,a)}},this.state.ftmisses),t.a.createElement("td",null,this.state.percentage))}}]),n}(r.Component)),w=n(16),k=n(61),g=n(62),S=n.n(g),E=(n(75),Object(k.a)({apiKey:"AIzaSyBJ4H3HkWi5jJt8JShN0W1i_uDW6M8inP4",authDomain:"sba-scoreboard.firebaseapp.com",databaseURL:"https://sba-scoreboard.firebaseio.com",projectId:"sba-scoreboard",storageBucket:"sba-scoreboard.appspot.com",messagingSenderId:"132558249658",appId:"1:132558249658:web:afbea7c1e0645284a2ac83",measurementId:"G-92M708WMTV"})),M=Object(w.e)(E),O=function(e){Object(l.a)(n,e);var a=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,t=new Array(r),m=0;m<r;m++)t[m]=arguments[m];return(e=a.call.apply(a,[this].concat(t))).state={unsubFromGamelist:function(){},unsubFromLivegame:function(){},isAuth:!1,homeScore:0,awayScore:0,awayThrees:0,awayTwos:0,awayMakes:0,awayMisses:0,homeThrees:0,homeTwos:0,homeMakes:0,homeMisses:0,quarter:0,quarterData:[],quarterCurrent:{home:{},away:{}},homeName:"Not Selected",awayName:"Not Selected",homeTeam:[],awayTeam:[],outData:[],gamesArr:[],livegameToLoad:"No Game Selected",availableLivegames:[],rosters:[[{name:"Saint Bede Academy"},{name:"Zayd Kahn",number:0},{name:"Jake Bradach",number:1},{name:"James Erwin",number:2},{name:"Callan Hueneburg",number:3},{name:"John Brady",number:4},{name:"Duncan Lawler",number:10},{name:"Landon Jackson",number:13},{name:"Max Medina",number:15},{name:"Isaiah Hart",number:21},{name:"Luke Story",number:22},{name:"Brendan Pillion",number:23},{name:"Connor Brown",number:24},{name:"Josh Grob",number:25},{name:"Paul Hart",number:30},{name:"Patrick Harmon",number:31},{name:"Hayden Arkins",number:32},{name:"Ali Arslan",number:33}],[{name:"Newman Central Catholic"},{name:"N. Welty",number:3},{name:"L. Jungerman",number:10},{name:"E. Henkel",number:11},{name:"T. Powers",number:11},{name:"B. Newman",number:12},{name:"N. Britt",number:13},{name:"J. Ackman",number:14},{name:"G. Moran",number:14},{name:"C. Britt",number:15},{name:"S. Cheng",number:20},{name:"G. Koerner",number:20},{name:"C. McBride",number:21},{name:"G. Hunsberger",number:22},{name:"K. Brininger",number:23},{name:"A. Velasquez",number:23},{name:"K. Mullen",number:24},{name:"D. House",number:30},{name:"M. Williams",number:32},{name:"N. Neubauer",number:42}],[{name:"Streator"},{name:"C. Bedecker",number:1},{name:"J. Starkey",number:2},{name:"A. Ford",number:3},{name:"S. Good",number:4},{name:"M. Benning",number:5},{name:"A. Benning",number:12},{name:"P. Benning",number:13},{name:"A. Ward",number:21},{name:"J. Haynes",number:23},{name:"I. Beals",number:24},{name:"J. Tredway",number:30},{name:"M. Baker",number:33},{name:"L. Williamson",number:55}],[{name:"Erie Prophetstown"},{name:"Bryce Rosenow",number:1},{name:"Hunter Woodworth",number:2},{name:"Mason Misfelst",number:5},{name:"Caleb Naftzger",number:10},{name:"Dawson Haagard",number:13},{name:"Kolby Franks",number:21},{name:"Keegan Behrens",number:23},{name:"Jack Minssen",number:24},{name:"Brody Naftzger",number:25},{name:"Connor Sibley",number:34},{name:"Noah Wiseley",number:35},{name:"Austin Cole",number:43},{name:"Ben Lantz",number:45}],[{name:"Princeton"},{name:"Teegan Davis",number:2},{name:"Jackson Dressler",number:4},{name:"Brady Byers",number:10},{name:"Bennett Sierens",number:12},{name:"Grady Thompson",number:14},{name:"Ryan Brucker",number:20},{name:"Christian Rosario",number:22},{name:"Jack Bauer",number:24},{name:"Mack Williams",number:30},{name:"Karter Patterson",number:32},{name:"Kolten Monroe",number:34},{name:"Jake May",number:40},{name:"Kaden Monroe",number:42},{name:"Ethan Wallace",number:44}],[{name:"Hall High School Varsity"},{name:"Mac Resetich",number:0},{name:"Payton Plym",number:1},{name:"Gabe Lucas",number:2},{name:"Jack Savitch",number:3},{name:"Jeremy Mattingly",number:5},{name:"Aidan Jones",number:10},{name:"Ethan Plym",number:12},{name:"Luke Kelty",number:15},{name:"Trez Rybarczyk",number:21},{name:"Drake Garland",number:23},{name:"Eder Castelan",number:24},{name:"Alec Vecchia",number:32},{name:"Dylan Mott",number:33}],[{name:"Hall High School Sophomore"},{name:"Gianni Guerrini",number:1},{name:"Ashton Pecher",number:2},{name:"Max Bryant",number:3},{name:"Caleb Bickett",number:5},{name:"Evan Stefaniak",number:10},{name:"Ryan Watson",number:11},{name:"Grant Plym",number:12},{name:"Matthew Visocky",number:15},{name:"Hunter Meagher",number:21},{name:"Josh Scheri",number:23},{name:"Joseph Bacidore",number:24},{name:"Dominic Galetti",number:25},{name:"Yair Santiago",number:32},{name:"Riley Coble",number:34}],[{name:"Kewanee"},{name:"Izac Contreras",number:1},{name:"Keyontiss Patterson",number:2},{name:"Devin Hamrick",number:3},{name:"Blaise Lewis",number:4},{name:"Will Bruno",number:5},{name:"Niko Powe",number:10},{name:"Clark Heeren",number:11},{name:"Marquez Logan",number:12},{name:"Jordan Johnson",number:13},{name:"Julian Quintero",number:20},{name:"James Campbell",number:21},{name:"Jaiden Little",number:22},{name:"Malachi Israel",number:23},{name:"Brady Clark",number:24},{name:"Brendon Lewis",number:25},{name:"James Conner",number:30},{name:"Zach Henderson",number:32},{name:"Yahil Tirado",number:33},{name:"Jaytez Talbert",number:34},{name:"Brett Edens",number:42}],[{name:"Bureau Valley"},{name:"Brock Foster",number:1},{name:"Layton Britt",number:3},{name:"Bryson Smith",number:4},{name:"Carter Salisbury",number:5},{name:"Logan Rinehart",number:11},{name:"Nevin Bolin",number:13},{name:"Luke Moon",number:14},{name:"Noah Harris",number:15},{name:"Jonah Johnson",number:21},{name:"Evan Eckberg",number:23},{name:"Carter Balensiefen",number:24},{name:"Brady Higgins",number:25},{name:"Alessandro Bertolani",number:31},{name:"Adam Johnson",number:33},{name:"Elija Kruse",number:34},{name:"Drew Spencer",number:35}],[{name:"Seneca"},{name:"B. Roe",number:3},{name:"C. O'boyle",number:4},{name:"A. Stiegler",number:5},{name:"G. Siegel",number:10},{name:"T. Cahill",number:11},{name:"C. Underhill",number:12},{name:"N. Quigley",number:14},{name:"B. Krause",number:20},{name:"T. Hauch",number:21},{name:"T. Van Ness",number:22},{name:"C. Carey",number:23},{name:"C. Hauch",number:24},{name:"T. Thorsen",number:35}],[{name:"SBA Girls (Varsity)"},{name:"Teghan Tillman",number:4},{name:"Payton Giordano",number:5},{name:"Erin Gray",number:11},{name:"Grace Maschmann",number:12},{name:"Leah Smudzinski",number:13},{name:"Mia Waters",number:20},{name:"Lia Bosnich",number:21},{name:"Abbie George",number:23},{name:"Renn Ludford",number:24},{name:"Miranda Mazzorana",number:33},{name:"Ryann Stoudt",number:34},{name:"Rylee McGunnigal",number:40},{name:"Jaden Hart",number:44}],[{name:"Seneca Girls (Varsity)"},{name:"Cassidy Draves",number:2},{name:"Lauren Silvola",number:3},{name:"Ella Gilbertson",number:4},{name:"Kloey Lind",number:5},{name:"Brooklyn Giertz",number:10},{name:"Addison Olson",number:11},{name:"Brooke Roseland",number:12},{name:"Madison Bromberek",number:13},{name:"Mara Bruno",number:14},{name:"Arberita Jashari",number:15},{name:"Emma Smith",number:20},{name:"Carly Greve",number:21},{name:"Marie Chesharek",number:23},{name:"Kennedy Hartwig",number:24},{name:"Allie Arwood",number:30}],[{name:"Mendota"},{name:"Emiliano Arteaga",number:1},{name:"Chris Sandoval",number:2},{name:"Gavin Glazebrook",number:3},{name:"Jae Shaun Hughes",number:5},{name:"Abraham Guzman",number:10},{name:"Cole Stremlau",number:11},{name:"Josue Arteaga",number:14},{name:"Krew Bond",number:15},{name:"Trent Stamberger",number:24},{name:"Alexis Quintana",number:33},{name:"Mauricio Escatel",number:35},{name:"Aaron Schmidt",number:44},{name:"Rafa Romero",number:45}],[{name:"DePue Girls"},{name:"Julie Perez",number:1},{name:"Jasmine Rosales",number:10},{name:"Azucena Villagomez",number:11},{name:"Pamela Mejia",number:12},{name:"Lupita Hurtado",number:14},{name:"Summer Hayes",number:21},{name:"Maggie Gavina",number:22},{name:"Emily Marquez",number:33},{name:"Amy Munoz",number:35}],[{name:"LaSalle-Peru"},{name:"John Riva",number:1},{name:"Jack Scheri",number:2},{name:"Michael Jereb",number:3},{name:"Hunter Larson",number:4},{name:"Trenton Hancock",number:5},{name:"Alex Lenkaitis",number:12},{name:"Alex Newman",number:14},{name:"Tyler Hartman",number:20},{name:"Jarrett Skinner",number:21},{name:"Brayden Porter",number:22},{name:"Drake Weber",number:23},{name:"Nick Kreiser",number:30},{name:"Latrell Coulter",number:35}],[{name:"Princeton Girls"},{name:"Savanna Birkey",number:4},{name:"Olivia Gartin",number:11},{name:"Emma Wittig",number:12},{name:"Isa Ibarra",number:15},{name:"Maggie Davis",number:20},{name:"Mariah Hobson",number:22},{name:"Ana Mallery-Sondgeroth",number:23},{name:"Erin May",number:24},{name:"Brynn Hieronymus",number:32},{name:"Gracie Reynolds",number:33},{name:"Grace May",number:35},{name:"McKenzie Hecht",number:40},{name:"Taylor Quiram",number:42},{name:"Morgan Coleman",number:44},{name:"Erika Sorenson",number:45}],[{name:"Putnam County Girls"},{name:"Savannah Tucker",number:1},{name:"Olivia Lamis",number:3},{name:"Erin Brooker",number:4},{name:"Caitlyn Cioni",number:5},{name:"Avery Lamis",number:12},{name:"Zofia Uzella",number:21},{name:"Chloe Linton",number:23},{name:"Sophia Harris",number:32},{name:"Emily Bruch",number:33},{name:"Molly Boyd",number:44}],[{name:"Aurora Christian Girls"},{name:"A. Weeks",number:1},{name:"L. Anderson",number:2},{name:"M. Gardner",number:3},{name:"O. Plant",number:4},{name:"L. Lamanna",number:11},{name:"K. Carter",number:13},{name:"A. Griffin",number:14},{name:"M. Richert",number:21},{name:"F. Allgood",number:22},{name:"S. Iversen",number:35},{name:"M. Moore",number:44},{name:"T. Luse",number:54}],[{name:"Putnam County"},{name:"Owen Saepharn",number:1},{name:"Andrew Pyzska",number:2},{name:"Bryce Smith",number:3},{name:"Drew Taliani",number:4},{name:"Blake Baker",number:5},{name:"Austin Mattingly",number:10},{name:"Orlando Harris",number:12},{name:"Spencer Voss",number:15},{name:"Cole Vipond",number:20},{name:"Chad Olson",number:21},{name:"Lucas Wiesbrock",number:22},{name:"Jackson McDonald",number:23},{name:"Gavin Cimei",number:24},{name:"Wyatt Grimshaw",number:25}],[{name:"Midland"},{name:"Brady Hattan",number:1},{name:"Riley McFadden",number:2},{name:"Brad Weber",number:3},{name:"Brett Smith",number:10},{name:"Riccardo Rizzi",number:12},{name:"Will Meliska",number:21},{name:"Brandon Collins",number:23},{name:"Ryan Bella",number:24},{name:"Ryan Bigger",number:32},{name:"Billy Poignant",number:33},{name:"Ryan Riddell",number:34},{name:"David Rosa",number:35},{name:"Matt Shreffler",number:40},{name:"Hunter Benson",number:43}],[{name:"GSW"},{name:"Ty Johnson",number:2},{name:"Caydan Landry",number:3},{name:"Chris Ruiz",number:5},{name:"Nolan Perkins",number:12},{name:"Kevin Ferrari",number:15},{name:"Riley Morris",number:20},{name:"Dylan Hill",number:21},{name:"Nate Wise",number:23},{name:"Donovan Garcia",number:24},{name:"Michael Ashley",number:25},{name:"Brandon States",number:32},{name:"Chris Bexson",number:33},{name:"Aaron Tramutolo",number:34},{name:"Conner Steichen",number:35}],[{name:"Bureau Valley Girls"},{name:"Kam Kolb",number:1},{name:"Lexi Marquez",number:2},{name:"Paige Wagner",number:11},{name:"Kyra Stoller",number:14},{name:"Jennifer Etheridge",number:20},{name:"Kaleen Carlson",number:22},{name:"Aspen Balensiefen",number:23},{name:"Ashley Nordstrom",number:24},{name:"Jaimie Schutz",number:30},{name:"Madison Dye",number:34}],[{name:"Iowa Hawkeyes"},{name:"Filip Rebraca",number:0},{name:"Joe Toussaint",number:2},{name:"Jordan Bohannon",number:3},{name:"Ahron Ulis",number:4},{name:"Tony Perkins",number:11},{name:"Austin Ash",number:13},{name:"Carter Kingsbury",number:14},{name:"Keegan Murray",number:15},{name:"Payton Sandfort",number:20},{name:"Patrick McCaffery",number:22},{name:"Josh Ogundele",number:23},{name:"Kris Murray",number:24},{name:"Luc Laketa",number:25},{name:"Connor McCaffery",number:30},{name:"Riley Mulvey",number:44}],[{name:"Fighting Illini"},{name:"Brandin Podziemski",number:0},{name:"Trent Frazier",number:1},{name:"Connor Serven",number:2},{name:"Jacob Grandison",number:3},{name:"Omar Payne",number:4},{name:"Andre Curbelo",number:5},{name:"Luke Goode",number:10},{name:"Alfonso Plummer",number:11},{name:"Brandon Lieb",number:12},{name:"Benjamin Bosmans-Verdonk",number:13},{name:"RJ Melendez",number:15},{name:"Da'Monte Wliliams",number:20},{name:"Kofi Cockburn",number:21},{name:"Austin Hutcherson",number:22},{name:"Coleman Hawkins",number:33}],[{name:"Stillman Valley"},{name:"Anthony Berg",number:1},{name:"Nick Giddings",number:3},{name:"Griffin Britnell",number:4},{name:"Drake Stewart",number:5},{name:"Caleb Johnson",number:10},{name:"Kale Rauman",number:11},{name:"Evan Davidson",number:12},{name:"Owen Dunseth",number:13},{name:"Brady Connors",number:14},{name:"Brett Pierce",number:20},{name:"Phillip Broski",number:22},{name:"Chris Seper",number:23},{name:"Lucas Meyer",number:24},{name:"Logan McKee",number:32},{name:"David Wilhite",number:33},{name:"Alex Rahn",number:34}],[{name:"Indian Creek"},{name:"David Negrete",number:0},{name:"Kalab Helgesen",number:1},{name:"Luke Barton",number:2},{name:"Drew Johnson",number:3},{name:"Colton Oleson",number:4},{name:"Grant Schlorff",number:11},{name:"Blake Simonson",number:12},{name:"Markus Magden",number:22},{name:"Brayden Todd",number:23},{name:"Alexander Schramer",number:31},{name:"Sam Genslinger",number:33},{name:"Jack Aloisio",number:34},{name:"Christian Meier",number:45},{name:"Blake McRoberts",number:54}]]},e.componentDidUpdate=Object(f.a)(p.a.mark((function a(){return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if("Not Selected"===e.state.homeName||"Not Selected"===e.state.awayName||!e.state.isAuth){a.next=3;break}return a.next=3,e.sendLivegame();case 3:case"end":return a.stop()}}),a)}))),e.componentDidMount=Object(f.a)(p.a.mark((function a(){var n,r,t;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e.state.isAuth){a.next=2;break}return a.abrupt("return");case 2:return n=[],r=Object(w.g)(Object(w.a)(M,"gamestates"),Object(w.i)("date","!=","")),a.next=6,Object(w.d)(r);case 6:a.sent.forEach((function(e){n.push(e.id)})),e.setState({availableLivegames:n}),t=Object(w.f)(r,(function(a){n=[],a.forEach((function(e){n.push(e.id)})),e.setState({availableLivegames:n})})),e.setState({unsubFromGamelist:t});case 11:case"end":return a.stop()}}),a)}))),e.sendLivegame=Object(f.a)(p.a.mark((function a(){var n,r,t;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("updating livegame"),n=new Date,r=e.state.homeName+" vs. "+e.state.awayName+" on "+n.toDateString(),delete(t=Object.assign({},e.state)).isAuth,delete t.rosters,delete t.quarterCurrent,delete t.availableLivegames,delete t.quarterData,delete t.unsubFromLivegame,delete t.unsubFromGamelist,a.next=13,Object(w.h)(Object(w.b)(M,"gamestates",r),{date:n,state:t});case 13:case"end":return a.stop()}}),a)}))),e.recieveLivegame=function(){if(!e.state.isAuth){var a=Object(w.b)(M,"gamestates/"+e.state.livegameToLoad);Object(w.c)(a).then((function(a){e.setState(a.data().state)}));var n=Object(w.f)(Object(w.b)(M,"gamestates/"+e.state.livegameToLoad),(function(a){var n=Object(d.a)({},a.data().state);e.setState(n)}));e.setState({unsubFromLivegame:n})}},e.responseGoogle=function(a){console.log(a),"j@mesperona.com"===a.su.ev||"jimaperona@gmail.com"===a.su.ev?(alert("Authentication Successful"),e.setState({isAuth:!0}),e.state.unsubFromGamelist(),e.state.unsubFromLivegame()):alert("Improper Authentication")},e.callbackUpdate=function(a,n,r){if(n){var t=e.state.homeTeam;t[a].data=r,e.setState({homeTeam:t})}else{var m=e.state.awayTeam;m[a].data=r,e.setState({awayTeam:m})}},e.updateLivegameSelect=function(){e.state.unsubFromLivegame();var a=e.state.availableLivegames[document.getElementById("livegameInput").value];e.setState({livegameToLoad:a},(function(){e.recieveLivegame()}))},e.updateTeams=function(a){var n="",r=e.state.rosters;if(a){var t=(n=r[document.getElementById("homeInput").value]).slice(1).map((function(e){return e}));e.setState({homeTeam:t,homeName:n[0].name})}else{var m=(n=r[document.getElementById("awayInput").value]).slice(1).map((function(e){return e}));e.setState({awayTeam:m,awayName:n[0].name})}},e.incrementQuarter=function(){var a=Object(f.a)(p.a.mark((function a(n,r){var t,m,u,o,s,l,c,i,b,h,d,y,f,v,w;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=e.state,m=t.isAuth,u=t.quarter,o=t.outData,s=t.homeName,l=t.homeScore,c=t.awayName,i=t.awayScore,b=t.quarterCurrent,h=t.quarterData,m){a.next=3;break}return a.abrupt("return");case 3:d=e.state.quarterData,y=["1st","2nd","3rd","4th","Final"],r.preventDefault(),n&&u<4?(f=[],v=[],Object.keys(b.home).forEach((function(e){f.push(String.fromCharCode(9)+" ".concat(e,": Twos - ").concat(b.home[e].twos,", Threes - ").concat(b.home[e].threes,", Total Points - ").concat(2*b.home[e].twos+3*b.home[e].threes+b.home[e].makes))})),Object.keys(b.away).forEach((function(e){v.push(String.fromCharCode(9)+" ".concat(e,": Twos - ").concat(b.away[e].twos,", Threes - ").concat(b.away[e].threes,", Total Points - ").concat(2*b.away[e].twos+3*b.away[e].threes+b.away[e].makes))})),w="End of ".concat(y[u]," quarter: ").concat(s,": ").concat(l," | ").concat(c,": ").concat(i),d[u+1]=b,e.setState({quarter:u+1,outData:o.concat([w,"Home:"],f,["Away:"],v),quarterData:d,quarterCurrent:{home:{},away:{}}})):!n&&u>0&&(d[u-1]=b,e.setState({quarter:u-1,quarterCurrent:h[u-1],quarterData:d}));case 7:case"end":return a.stop()}}),a)})));return function(e,n){return a.apply(this,arguments)}}(),e.incrementHome=function(a){var n=e.state.homeScore;e.setState({homeScore:n+a})},e.incrementAway=function(a){var n=e.state.awayScore;e.setState({awayScore:n+a})},e.incrementTeamTotals=function(a,n,r,t){var m=e.state,u=m.homeMakes,o=m.homeMisses,s=m.homeTwos,l=m.homeThrees,c=m.awayMakes,i=m.awayMisses,b=m.awayTwos,y=m.awayThrees,p=m.quarterCurrent,f={};if(a){var v=p;t in p.home||(v=Object(d.a)(Object(d.a)({},p),{},{home:Object(d.a)(Object(d.a)({},p.home),{},Object(h.a)({},t,{misses:0,makes:0,twos:0,threes:0}))})),e.setState({quarterCurrent:v},(function(){f=e.state.quarterCurrent,0===n?e.setState({homeMisses:o+r,quarterCurrent:Object(d.a)(Object(d.a)({},f),{},{home:Object(d.a)(Object(d.a)({},f.home),{},Object(h.a)({},t,Object(d.a)(Object(d.a)({},f.home[t]),{},{misses:f.home[t].misses+r})))})}):1===n?e.setState({homeMakes:u+r,quarterCurrent:Object(d.a)(Object(d.a)({},f),{},{home:Object(d.a)(Object(d.a)({},f.home),{},Object(h.a)({},t,Object(d.a)(Object(d.a)({},f.home[t]),{},{makes:f.home[t].makes+r})))})}):2===n?e.setState({homeTwos:s+r,quarterCurrent:Object(d.a)(Object(d.a)({},f),{},{home:Object(d.a)(Object(d.a)({},f.home),{},Object(h.a)({},t,Object(d.a)(Object(d.a)({},f.home[t]),{},{twos:f.home[t].twos+r})))})}):3===n&&e.setState({homeThrees:l+r,quarterCurrent:Object(d.a)(Object(d.a)({},f),{},{home:Object(d.a)(Object(d.a)({},f.home),{},Object(h.a)({},t,Object(d.a)(Object(d.a)({},f.home[t]),{},{threes:f.home[t].threes+r})))})})}))}else{var w=p;t in p.away||(w=Object(d.a)(Object(d.a)({},p),{},{away:Object(d.a)(Object(d.a)({},p.away),{},Object(h.a)({},t,{misses:0,makes:0,twos:0,threes:0}))})),e.setState({quarterCurrent:w},(function(){f=e.state.quarterCurrent,0===n&&e.setState({awayMisses:i+r,quarterCurrent:Object(d.a)(Object(d.a)({},f),{},{away:Object(d.a)(Object(d.a)({},f.away),{},Object(h.a)({},t,Object(d.a)(Object(d.a)({},f.away[t]),{},{misses:f.away[t].misses+r})))})}),1===n&&e.setState({awayMakes:c+r,quarterCurrent:Object(d.a)(Object(d.a)({},f),{},{away:Object(d.a)(Object(d.a)({},f.away),{},Object(h.a)({},t,Object(d.a)(Object(d.a)({},f.away[t]),{},{makes:f.away[t].makes+r})))})}),2===n&&e.setState({awayTwos:b+r,quarterCurrent:Object(d.a)(Object(d.a)({},f),{},{away:Object(d.a)(Object(d.a)({},f.away),{},Object(h.a)({},t,Object(d.a)(Object(d.a)({},f.away[t]),{},{twos:f.away[t].twos+r})))})}),3===n&&e.setState({awayThrees:y+r,quarterCurrent:Object(d.a)(Object(d.a)({},f),{},{away:Object(d.a)(Object(d.a)({},f.away),{},Object(h.a)({},t,Object(d.a)(Object(d.a)({},f.away[t]),{},{threes:f.away[t].threes+r})))})})}))}},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,a=this.state,n=a.isAuth,r=a.homeScore,m=a.awayScore,u=a.awayThrees,o=a.awayTwos,s=a.awayMakes,l=a.awayMisses,c=a.homeThrees,i=a.homeTwos,b=a.homeMakes,h=a.homeMisses,d=a.quarter,y=a.homeName,p=a.awayName,f=a.homeTeam,w=a.awayTeam,k=a.outData,g=a.rosters,E=a.availableLivegames,M=new Date;return t.a.createElement("div",{className:"Container"},t.a.createElement("div",{className:"BasketballBoard"},t.a.createElement("div",{className:"GameInfo"},t.a.createElement("div",{className:"GameName"},y," vs. ",p,", ",M.toDateString()),t.a.createElement("div",{className:"ScoresTimes"},t.a.createElement("div",{className:"ScoreCounter"},r),t.a.createElement("div",{className:"QuarterCount",onClick:function(a){return e.incrementQuarter(!0,a)},onContextMenu:function(a){return e.incrementQuarter(!1,a)}},["1st","2nd","3rd","4th","Final"][d]),t.a.createElement("div",{className:"ScoreCounter"},m))),t.a.createElement("div",{className:"Rosters"},t.a.createElement("div",{className:"HomeRoster"},t.a.createElement("table",{className:"RosterHeader",onContextMenu:function(e){return e.preventDefault()}},t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",null,"#"),t.a.createElement("th",null,"Name"),t.a.createElement("th",null,"Total"),t.a.createElement("th",null,"2s Made"),t.a.createElement("th",null,"3s Made"),t.a.createElement("th",null,"FT Made"),t.a.createElement("th",null,"FT Miss"),t.a.createElement("th",null,"FT %"))),t.a.createElement("tbody",null,f.map((function(a,r){return t.a.createElement(v,{key:a.name+Object.entries(a.data||{data:"empty"}).reduce((function(e,a){return e+""+a[1]})),initial:a.data,name:a.name,number:a.number,homeUp:e.incrementHome,awayUp:e.incrementAway,totalUp:e.incrementTeamTotals,home:!0,controller:n,callback:function(a){return e.callbackUpdate(r,!0,a)}})}))),t.a.createElement("tfoot",null,t.a.createElement("tr",null,t.a.createElement("th",null,"--"),t.a.createElement("th",null,y),t.a.createElement("th",null,r),t.a.createElement("th",null,i),t.a.createElement("th",null,c),t.a.createElement("th",null,b),t.a.createElement("th",null,h),t.a.createElement("th",null,h+b!==0?(100*b/(h+b)).toFixed(0):0))))),t.a.createElement("div",{className:"AwayRoster"},t.a.createElement("table",{className:"RosterHeader"},t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",null,"#"),t.a.createElement("th",null,"Name"),t.a.createElement("th",null,"Total"),t.a.createElement("th",null,"2s Made"),t.a.createElement("th",null,"3s Made"),t.a.createElement("th",null,"FT Made"),t.a.createElement("th",null,"FT Miss"),t.a.createElement("th",null,"FT %"))),t.a.createElement("tbody",null,w.map((function(a,r){return t.a.createElement(v,{key:a.name+Object.entries(a.data||{data:"empty"}).reduce((function(e,a){return e+""+a[1]})),initial:a.data,name:a.name,number:a.number,homeUp:e.incrementHome,awayUp:e.incrementAway,totalUp:e.incrementTeamTotals,home:!1,controller:n,callback:function(a){return e.callbackUpdate(r,!1,a)}})}))),t.a.createElement("tfoot",null,t.a.createElement("tr",null,t.a.createElement("th",null,"--"),t.a.createElement("th",null,p),t.a.createElement("th",null,m),t.a.createElement("th",null,o),t.a.createElement("th",null,u),t.a.createElement("th",null,s),t.a.createElement("th",null,l),t.a.createElement("th",null,l+s!==0?(100*s/(l+s)).toFixed(0):0))))))),n?t.a.createElement("div",{className:"Input"},t.a.createElement("div",{className:"Selects"},t.a.createElement("div",null,"Home Team: \xa0",t.a.createElement("select",{defaultValue:"default",id:"homeInput",onChange:function(a){return e.updateTeams(!0)}},t.a.createElement("option",{hidden:!0,disabled:!0,value:"default"}," -- select a team -- "),g.map((function(e,a){return t.a.createElement("option",{key:a,value:a},e[0].name)})))),t.a.createElement("div",null,"Away Team: \xa0",t.a.createElement("select",{defaultValue:"default",id:"awayInput",onChange:function(a){return e.updateTeams(!1)}},t.a.createElement("option",{hidden:!0,disabled:!0,value:"default"}," -- select a team -- "),g.map((function(e,a){return t.a.createElement("option",{key:a,value:a},e[0].name)}))))),t.a.createElement("div",{className:"InfoDump"},k.map((function(e,a){return t.a.createElement("div",{key:a},e)}))),t.a.createElement("div",null)):t.a.createElement("div",{className:"Selects"},t.a.createElement("div",null,t.a.createElement("select",{defaultValue:"default",id:"livegameInput",onChange:function(a){return e.updateLivegameSelect()}},t.a.createElement("option",{hidden:!0,disabled:!0,value:"default"}," Choose a game to view "),E.map((function(e,a){return t.a.createElement("option",{key:a,value:a},e)}))))),t.a.createElement(S.a,{clientId:"132558249658-kt77ea389dsq23bmopt998l53ed6rlni.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(a){return e.responseGoogle(a)},onFailure:function(a){return e.responseGoogle(a)},cookiePolicy:"single_host_origin"}))}}]),n}(r.Component),C=function(e){Object(l.a)(n,e);var a=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,t=new Array(r),m=0;m<r;m++)t[m]=arguments[m];return(e=a.call.apply(a,[this].concat(t))).state={isAuth:!1},e.componentDidMount=function(){document.title="SBA Scoreboard"},e.responseGoogle=function(e){console.log(e)},e}return Object(s.a)(n,[{key:"render",value:function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"App"},t.a.createElement(i.a,null,t.a.createElement("div",{className:"RouteHolder"},t.a.createElement(b.a,{path:"/",component:O})))))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(t.a.createElement(i.a,null,t.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},66:function(e,a,n){e.exports=n(252)},71:function(e,a,n){},72:function(e,a,n){},73:function(e,a,n){},74:function(e,a,n){}},[[66,1,2]]]);
//# sourceMappingURL=main.f054a2f9.chunk.js.map