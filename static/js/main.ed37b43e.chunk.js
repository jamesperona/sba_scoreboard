(this.webpackJsonpscoreboard=this.webpackJsonpscoreboard||[]).push([[0],{20:function(e,a,n){e.exports=n(47)},25:function(e,a,n){},26:function(e,a,n){},27:function(e,a,n){},28:function(e,a,n){},47:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),m=n(18),o=n.n(m),u=(n(25),n(3)),l=n(1),s=n(4),c=n(5),i=n(7),b=n(6),h=(n(26),n(27),function(e){Object(i.a)(n,e);var a=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var t=arguments.length,r=new Array(t),m=0;m<t;m++)r[m]=arguments[m];return(e=a.call.apply(a,[this].concat(r))).state={total:0,twomakes:0,threemakes:0,ftmakes:0,ftmisses:0,fttotal:0,percentage:0,personalScore:0},e.incrementFTMakes=function(a,n){var t=e.state,r=t.total,m=t.ftmakes,o=t.personalScore,u=t.fttotal;e.props.controller&&(n.preventDefault(),-1===a&&0===m||(e.setState({total:r+a,fttotal:u+a,ftmakes:m+a,percentage:u+a!==0?(100*(m+a)/(u+a)).toFixed(0):0,personalScore:o+1*a}),e.props.home?e.props.homeUp(1*a):e.props.awayUp(1*a),e.props.totalUp(e.props.home,1,a,e.props.name)))},e.incrementFTMisses=function(a,n){var t=e.state,r=t.total,m=t.ftmakes,o=t.ftmisses,u=t.fttotal;e.props.controller&&(n.preventDefault(),-1===a&&0===o||(e.setState({total:r+a,fttotal:u+a,ftmisses:o+a,percentage:u+a!==0?(100*m/(u+a)).toFixed(0):0}),e.props.totalUp(e.props.home,0,a,e.props.name)))},e.incrementTwos=function(a,n){var t=e.state,r=t.total,m=t.twomakes,o=t.personalScore;e.props.controller&&(n.preventDefault(),-1===a&&0===m||(e.setState({total:r+a,twomakes:m+a,personalScore:o+2*a}),e.props.home?e.props.homeUp(2*a):e.props.awayUp(2*a),e.props.totalUp(e.props.home,2,a,e.props.name)))},e.incrementThrees=function(a,n){var t=e.state,r=t.total,m=t.threemakes,o=t.personalScore;e.props.controller&&(n.preventDefault(),-1===a&&0===m||(e.setState({total:r+a,threemakes:m+a,personalScore:o+3*a}),e.props.home?e.props.homeUp(3*a):e.props.awayUp(3*a),e.props.totalUp(e.props.home,3,a,e.props.name)))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.number),r.a.createElement("td",null,this.props.name),r.a.createElement("td",null,this.state.personalScore),r.a.createElement("td",{className:"clickable",onClick:function(a){return e.incrementTwos(1,a)},onContextMenu:function(a){return e.incrementTwos(-1,a)}},this.state.twomakes),r.a.createElement("td",{className:"clickable",onClick:function(a){return e.incrementThrees(1,a)},onContextMenu:function(a){return e.incrementThrees(-1,a)}},this.state.threemakes),r.a.createElement("td",{className:"clickable",onClick:function(a){return e.incrementFTMakes(1,a)},onContextMenu:function(a){return e.incrementFTMakes(-1,a)}},this.state.ftmakes),r.a.createElement("td",{className:"clickable",onClick:function(a){return e.incrementFTMisses(1,a)},onContextMenu:function(a){return e.incrementFTMisses(-1,a)}},this.state.ftmisses),r.a.createElement("td",null,this.state.percentage))}}]),n}(t.Component)),d=(n(28),n(8)),y=n.n(d),p="http://localhost:8080/api",w=function(e){Object(i.a)(n,e);var a=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var t=arguments.length,r=new Array(t),m=0;m<t;m++)r[m]=arguments[m];return(e=a.call.apply(a,[this].concat(r))).postPlayer=function(e){var a=document.getElementById("NameInput").value,n=document.getElementById("NumberInput").value;y.a.post("".concat(p,"/players"),{name:a,number:n}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"TabSelector"},r.a.createElement("button",{className:"TabButton"},"Players"),r.a.createElement("button",{className:"TabButton"},"Rosters")),r.a.createElement("div",{id:"PlayerDatabaseInput",className:"DatabaseBox"},r.a.createElement("b",{className:"DatabaseTitle"},"Add player to database:"),r.a.createElement("div",{className:"DatabaseInput"},r.a.createElement("div",{className:"InputItem"},r.a.createElement("b",null,"Name: "),r.a.createElement("input",{id:"NameInput",className:"NameInput"})),r.a.createElement("div",{className:"InputItem"},r.a.createElement("b",null,"Number: "),r.a.createElement("input",{id:"NumberInput",className:"NumberInput"})),r.a.createElement("button",{className:"DatabaseSubmit",onClick:function(a){return e.postPlayer(a)}},"Submit"))))}}]),n}(t.Component),f=n(19),E=n.n(f),v="http://localhost:8080/api",k=function(e){Object(i.a)(n,e);var a=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var t=arguments.length,r=new Array(t),m=0;m<t;m++)r[m]=arguments[m];return(e=a.call.apply(a,[this].concat(r))).state={isAuth:!0,dateInfo:"",homeScore:0,awayScore:0,awayThrees:0,awayTwos:0,awayMakes:0,awayMisses:0,homeThrees:0,homeTwos:0,homeMakes:0,homeMisses:0,quarter:0,quarterData:[],quarterCurrent:{home:{},away:{}},homeName:"N/A",awayName:"N/A",homeTeam:[],awayTeam:[],outData:[],gamesArr:[],rosters:[[{name:"Saint Bede Academy"},{name:"Jake Bradach",number:1},{name:"Luke Story",number:2},{name:"Logan Griggs",number:3},{name:"Braden Damerell",number:4},{name:"Duncan Lawler",number:10},{name:"Gunnar Jauch",number:13},{name:"Nathan Potthoff",number:21},{name:"Logan Link",number:22},{name:"Oskar Flodstrom",number:23},{name:"Josh Grob",number:25},{name:"Patrick Harmon",number:31},{name:"Ethan Sramek",number:45},{name:"Nick Pearse",number:0}],[{name:"Newman Central Catholic"},{name:"N. Welty",number:3},{name:"L. Jungerman",number:10},{name:"E. Henkel",number:11},{name:"T. Powers",number:11},{name:"B. Newman",number:12},{name:"N. Britt",number:13},{name:"J. Ackman",number:14},{name:"G. Moran",number:14},{name:"C. Britt",number:15},{name:"S. Cheng",number:20},{name:"G. Koerner",number:20},{name:"C. McBride",number:21},{name:"G. Hunsberger",number:22},{name:"K. Brininger",number:23},{name:"A. Velasquez",number:23},{name:"K. Mullen",number:24},{name:"D. House",number:30},{name:"M. Williams",number:32},{name:"N. Neubauer",number:42}],[{name:"Streator"},{name:"C. Bedecker",number:1},{name:"J. Starkey",number:2},{name:"A. Ford",number:3},{name:"S. Good",number:4},{name:"M. Benning",number:5},{name:"A. Benning",number:12},{name:"P. Benning",number:13},{name:"A. Ward",number:21},{name:"J. Haynes",number:23},{name:"I. Beals",number:24},{name:"J. Tredway",number:30},{name:"M. Baker",number:33},{name:"L. Williamson",number:55}],[{name:"Erie Prophetstown"},{name:"Bryce Rosenow",number:1},{name:"Connor Sibley",number:2},{name:"Logan Ashdown",number:5},{name:"Clayton Johnson",number:10},{name:"Ashton Meier",number:11},{name:"Dawson Haagard",number:13},{name:"Kolby Franks",number:21},{name:"Jaime Miner",number:22},{name:"JJ Alden",number:23},{name:"Keegan Behrens",number:24},{name:"Brett VanDeWostine",number:25},{name:"Eric Robinson",number:33},{name:"Colin Rosenow",number:34},{name:"Carson Sterling",number:35},{name:"Hunter Woodworth",number:43},{name:"Nathan Johnson",number:45},{name:"Levi Cole",number:50}],[{name:"Princeton"},{name:"Brayden Debates",number:2},{name:"Jamison Reinhardt",number:4},{name:"Cole Adams",number:10},{name:"Tyler Gibson",number:12},{name:"Wyatt Davis",number:14},{name:"Cael Davis",number:20},{name:"Branden Haring",number:22},{name:"Noah Hoffman",number:24},{name:"Noah Atkinson",number:30},{name:"Isaac Legner",number:32},{name:"Caleb Haring",number:34},{name:"Grant Foes",number:40},{name:"Owen Rossler",number:42},{name:"Chris Davies",number:44},{name:"Kolby Reynolds",number:50},{name:"Jacob Burns",number:51}],[{name:"Hall High School"},{name:"Payton Plym",number:1},{name:"Tyvon Epps",number:2},{name:"Mac Resetich",number:3},{name:"Ethan Plym",number:4},{name:"Jeremy Mattingly",number:5},{name:"Antoine Jones",number:10},{name:"Bryan Fuentes",number:12},{name:"Luke Kelty",number:15},{name:"Trez Rybarczyk",number:21},{name:"Matt Hultz",number:22},{name:"Eddie Arteaga",number:23},{name:"Cole Wozniak",number:24},{name:"Riley Griffin",number:32},{name:"Cal Brokaw",number:33},{name:"Greg Larsen",number:34},{name:"Dom Orlandi",number:40}],[{name:"Kewanee"},{name:"Tayvian Taylor",number:1},{name:"TJ Arzola",number:3},{name:"Will Bruno",number:5},{name:"Niko Powe",number:10},{name:"Keagan Anderson",number:11},{name:"Cameron Conley",number:12},{name:"Jordan Johnson",number:13},{name:"Melcon DeJesus",number:21},{name:"Brady Clark",number:24},{name:"Brendon Lewis",number:25},{name:"Kazeer Johnson",number:32}],[{name:"Bureau Valley"},{name:"Brock Foster",number:1},{name:"Layton Britt",number:3},{name:"Bryson Smith",number:4},{name:"Carter Salisbury",number:5},{name:"Logan Rinehart",number:11},{name:"Nevin Bolin",number:13},{name:"Luke Moon",number:14},{name:"Noah Harris",number:15},{name:"Jonah Johnson",number:21},{name:"Evan Eckberg",number:23},{name:"Carter Balensiefen",number:24},{name:"Brady Higgins",number:25},{name:"Alessandro Bertolani",number:31},{name:"Adam Johnson",number:33},{name:"Elija Kruse",number:34},{name:"Drew Spencer",number:35}],[{name:"Seneca"},{name:"B. Roe",number:3},{name:"C. O'boyle",number:4},{name:"A. Stiegler",number:5},{name:"G. Siegel",number:10},{name:"T. Cahill",number:11},{name:"C. Underhill",number:12},{name:"N. Quigley",number:14},{name:"B. Krause",number:20},{name:"T. Hauch",number:21},{name:"T. Van Ness",number:22},{name:"C. Carey",number:23},{name:"C. Hauch",number:24},{name:"T. Thorsen",number:35}],[{name:"SBA Girls (Varsity)"},{name:"Teghan Tillman",number:4},{name:"Payton Giordano",number:5},{name:"Erin Gray",number:11},{name:"Grace Maschmann",number:12},{name:"Leah Smudzinski",number:13},{name:"Mia Waters",number:20},{name:"Lia Bosnich",number:21},{name:"Abbie George",number:23},{name:"Renn Ludford",number:24},{name:"Miranda Mazzorana",number:33},{name:"Ryann Stoudt",number:34},{name:"Rylee McGunnigal",number:40},{name:"Jaden Hart",number:44}],[{name:"Seneca Girls (Varsity)"},{name:"Cassidy Draves",number:2},{name:"Lauren Silvola",number:3},{name:"Ella Gilbertson",number:4},{name:"Kloey Lind",number:5},{name:"Brooklyn Giertz",number:10},{name:"Addison Olson",number:11},{name:"Brooke Roseland",number:12},{name:"Madison Bromberek",number:13},{name:"Mara Bruno",number:14},{name:"Arberita Jashari",number:15},{name:"Emma Smith",number:20},{name:"Carly Greve",number:21},{name:"Marie Chesharek",number:23},{name:"Kennedy Hartwig",number:24},{name:"Allie Arwood",number:30}],[{name:"Mendota"},{name:"Emiliano Arteaga",number:1},{name:"Chris Sandoval",number:2},{name:"Gavin Glazebrook",number:3},{name:"Jae Shaun Hughes",number:5},{name:"Abraham Guzman",number:10},{name:"Cole Stremlau",number:11},{name:"Josue Arteaga",number:14},{name:"Krew Bond",number:15},{name:"Trent Stamberger",number:24},{name:"Alexis Quintana",number:33},{name:"Mauricio Escatel",number:35},{name:"Aaron Schmidt",number:44},{name:"Rafa Romero",number:45}],[{name:"DePue Girls"},{name:"Julie Perez",number:1},{name:"Jasmine Rosales",number:10},{name:"Azucena Villagomez",number:11},{name:"Pamela Mejia",number:12},{name:"Lupita Hurtado",number:14},{name:"Summer Hayes",number:21},{name:"Maggie Gavina",number:22},{name:"Emily Marquez",number:33},{name:"Amy Munoz",number:35}],[{name:"LaSalle-Peru"},{name:"John Riva",number:1},{name:"Jack Scheri",number:2},{name:"Michael Jereb",number:3},{name:"Hunter Larson",number:4},{name:"Trenton Hancock",number:5},{name:"Alex Lenkaitis",number:12},{name:"Alex Newman",number:14},{name:"Tyler Hartman",number:20},{name:"Jarrett Skinner",number:21},{name:"Brayden Porter",number:22},{name:"Drake Weber",number:23},{name:"Nick Kreiser",number:30},{name:"Latrell Coulter",number:35}],[{name:"Putnam County Girls"},{name:"Savannah Tucker",number:1},{name:"Olivia Lamis",number:3},{name:"Erin Brooker",number:4},{name:"Caitlyn Cioni",number:5},{name:"Avery Lamis",number:12},{name:"Zofia Uzella",number:21},{name:"Chloe Linton",number:23},{name:"Sophia Harris",number:32},{name:"Emily Bruch",number:33},{name:"Molly Boyd",number:44}],[{name:"Aurora Christian Girls"},{name:"A. Weeks",number:1},{name:"L. Anderson",number:2},{name:"M. Gardner",number:3},{name:"O. Plant",number:4},{name:"L. Lamanna",number:11},{name:"K. Carter",number:13},{name:"A. Griffin",number:14},{name:"M. Richert",number:21},{name:"F. Allgood",number:22},{name:"S. Iversen",number:35},{name:"M. Moore",number:44},{name:"T. Luse",number:54}],[{name:"Putnam County"},{name:"Jacob Williams",number:1},{name:"Luke Pederson",number:2},{name:"Jacob Wiesbrock",number:3},{name:"Jakob Pyszka",number:4},{name:"Matthew Liebhart",number:5},{name:"Luke Olson",number:10},{name:"Stephen Mecagni",number:12},{name:"Nick Mattern",number:14},{name:"Adam Currie",number:15},{name:"Drake Smith",number:21},{name:"Jackson McDonald",number:23},{name:"Peyton Williams",number:24}],[{name:"Midland"},{name:"Brady Hattan",number:1},{name:"Riley McFadden",number:2},{name:"Brad Weber",number:3},{name:"Brett Smith",number:10},{name:"Riccardo Rizzi",number:12},{name:"Will Meliska",number:21},{name:"Brandon Collins",number:23},{name:"Ryan Bella",number:24},{name:"Ryan Bigger",number:32},{name:"Billy Poignant",number:33},{name:"Ryan Riddell",number:34},{name:"David Rosa",number:35},{name:"Matt Shreffler",number:40},{name:"Hunter Benson",number:43}],[{name:"GSW"},{name:"Ty Johnson",number:2},{name:"Caydan Landry",number:3},{name:"Chris Ruiz",number:5},{name:"Nolan Perkins",number:12},{name:"Kevin Ferrari",number:15},{name:"Riley Morris",number:20},{name:"Dylan Hill",number:21},{name:"Nate Wise",number:23},{name:"Donovan Garcia",number:24},{name:"Michael Ashley",number:25},{name:"Brandon States",number:32},{name:"Chris Bexson",number:33},{name:"Aaron Tramutolo",number:34},{name:"Conner Steichen",number:35}],[{name:"Bureau Valley Girls"},{name:"Kam Kolb",number:1},{name:"Lexi Marquez",number:2},{name:"Paige Wagner",number:11},{name:"Kyra Stoller",number:14},{name:"Jennifer Etheridge",number:20},{name:"Kaleen Carlson",number:22},{name:"Aspen Balensiefen",number:23},{name:"Ashley Nordstrom",number:24},{name:"Jaimie Schutz",number:30},{name:"Madison Dye",number:34}]]},e.componentDidMount=function(){},e.sendLivegame=function(){console.log("sending livegame")},e.recieveLivegame=function(){y.a.get("".concat(v,"/livegame"),e.state.dateInfo).then((function(a){e.setState(a.data)}))},e.responseGoogle=function(a){console.log(a),"j@mesperona.com"===a.Qt.Au?(alert("Authentication Success"),e.setState({isAuth:!0})):alert("Improper Authentication")},e.updateTeams=function(a){var n=e.state.rosters;if(a){var t=n[document.getElementById("homeInput").value],r=t.slice(1).map((function(e){return e}));e.setState({homeTeam:r,homeName:t[0].name},(function(){e.sendLivegame()}))}else{var m=n[document.getElementById("awayInput").value],o=m.slice(1).map((function(e){return e}));e.setState({awayTeam:o,awayName:m[0].name},(function(){e.sendLivegame()}))}},e.incrementQuarter=function(a,n){var t=e.state,r=t.isAuth,m=t.quarter,o=t.outData,u=t.homeName,l=t.homeScore,s=t.awayName,c=t.awayScore,i=t.quarterCurrent,b=t.quarterData;if(r){var h=e.state.quarterData;if(n.preventDefault(),a&&m<4){var d=[],y=[];Object.keys(i.home).forEach((function(e){d.push(String.fromCharCode(9)+" ".concat(e,": Twos - ").concat(i.home[e].twos,", Threes - ").concat(i.home[e].threes,", Total Points - ").concat(2*i.home[e].twos+3*i.home[e].threes+i.home[e].makes))})),Object.keys(i.away).forEach((function(e){y.push(String.fromCharCode(9)+" ".concat(e,": Twos - ").concat(i.away[e].twos,", Threes - ").concat(i.away[e].threes,", Total Points - ").concat(2*i.away[e].twos+3*i.away[e].threes+i.away[e].makes))}));var p="End of ".concat(["1st","2nd","3rd","4th","Final"][m]," quarter: ").concat(u,": ").concat(l," | ").concat(s,": ").concat(c);h[m+1]=i,e.setState({quarter:m+1,outData:o.concat([p,"Home:"],d,["Away:"],y),quarterData:h,quarterCurrent:{home:{},away:{}}})}else!a&&m>0&&(h[m-1]=i,e.setState({quarter:m-1,quarterCurrent:b[m-1],quarterData:h}))}},e.incrementHome=function(a){var n=e.state.homeScore;e.setState({homeScore:n+a},(function(){e.sendLivegame()}))},e.incrementAway=function(a){var n=e.state.awayScore;e.setState({awayScore:n+a},(function(){e.sendLivegame()}))},e.incrementTeamTotals=function(a,n,t,r){var m=e.state,o=m.homeMakes,s=m.homeMisses,c=m.homeTwos,i=m.homeThrees,b=m.awayMakes,h=m.awayMisses,d=m.awayTwos,y=m.awayThrees,p=m.quarterCurrent,w={};if(a){var f=p;r in p.home||(f=Object(l.a)(Object(l.a)({},p),{},{home:Object(l.a)(Object(l.a)({},p.home),{},Object(u.a)({},r,{misses:0,makes:0,twos:0,threes:0}))})),e.setState({quarterCurrent:f},(function(){w=e.state.quarterCurrent,0===n?e.setState({homeMisses:s+t,quarterCurrent:Object(l.a)(Object(l.a)({},w),{},{home:Object(l.a)(Object(l.a)({},w.home),{},Object(u.a)({},r,Object(l.a)(Object(l.a)({},w.home[r]),{},{misses:w.home[r].misses+t})))})}):1===n?e.setState({homeMakes:o+t,quarterCurrent:Object(l.a)(Object(l.a)({},w),{},{home:Object(l.a)(Object(l.a)({},w.home),{},Object(u.a)({},r,Object(l.a)(Object(l.a)({},w.home[r]),{},{makes:w.home[r].makes+t})))})}):2===n?e.setState({homeTwos:c+t,quarterCurrent:Object(l.a)(Object(l.a)({},w),{},{home:Object(l.a)(Object(l.a)({},w.home),{},Object(u.a)({},r,Object(l.a)(Object(l.a)({},w.home[r]),{},{twos:w.home[r].twos+t})))})}):3===n&&e.setState({homeThrees:i+t,quarterCurrent:Object(l.a)(Object(l.a)({},w),{},{home:Object(l.a)(Object(l.a)({},w.home),{},Object(u.a)({},r,Object(l.a)(Object(l.a)({},w.home[r]),{},{threes:w.home[r].threes+t})))})})})),e.sendLivegame()}else{var E=p;r in p.away||(E=Object(l.a)(Object(l.a)({},p),{},{away:Object(l.a)(Object(l.a)({},p.away),{},Object(u.a)({},r,{misses:0,makes:0,twos:0,threes:0}))})),e.setState({quarterCurrent:E},(function(){w=e.state.quarterCurrent,0===n&&e.setState({awayMisses:h+t,quarterCurrent:Object(l.a)(Object(l.a)({},w),{},{away:Object(l.a)(Object(l.a)({},w.away),{},Object(u.a)({},r,Object(l.a)(Object(l.a)({},w.away[r]),{},{misses:w.away[r].misses+t})))})}),1===n&&e.setState({awayMakes:b+t,quarterCurrent:Object(l.a)(Object(l.a)({},w),{},{away:Object(l.a)(Object(l.a)({},w.away),{},Object(u.a)({},r,Object(l.a)(Object(l.a)({},w.away[r]),{},{makes:w.away[r].makes+t})))})}),2===n&&e.setState({awayTwos:d+t,quarterCurrent:Object(l.a)(Object(l.a)({},w),{},{away:Object(l.a)(Object(l.a)({},w.away),{},Object(u.a)({},r,Object(l.a)(Object(l.a)({},w.away[r]),{},{twos:w.away[r].twos+t})))})}),3===n&&e.setState({awayThrees:y+t,quarterCurrent:Object(l.a)(Object(l.a)({},w),{},{away:Object(l.a)(Object(l.a)({},w.away),{},Object(u.a)({},r,Object(l.a)(Object(l.a)({},w.away[r]),{},{threes:w.away[r].threes+t})))})})})),e.sendLivegame()}},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,a=this.state,n=a.isAuth,t=a.homeScore,m=a.awayScore,o=a.awayThrees,u=a.awayTwos,l=a.awayMakes,s=a.awayMisses,c=a.homeThrees,i=a.homeTwos,b=a.homeMakes,d=a.homeMisses,y=a.quarter,p=a.homeName,f=a.awayName,v=a.homeTeam,k=a.awayTeam,g=a.outData,S=a.rosters,C=new Date;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"FullBoard"},r.a.createElement("div",{className:"GameInfo"},r.a.createElement("div",{className:"GameName"},p," vs. ",f,", ",C.toDateString()),r.a.createElement("div",{className:"ScoresTimes"},r.a.createElement("div",{className:"ScoreCounter"},t),r.a.createElement("div",{className:"QuarterCount",onClick:function(a){return e.incrementQuarter(!0,a)},onContextMenu:function(a){return e.incrementQuarter(!1,a)}},["1st","2nd","3rd","4th","Final"][y]),r.a.createElement("div",{className:"ScoreCounter"},m))),r.a.createElement("div",{className:"Rosters"},r.a.createElement("div",{className:"HomeRoster"},r.a.createElement("table",{className:"RosterHeader",onContextMenu:function(e){return e.preventDefault()}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Total"),r.a.createElement("th",null,"2s Made"),r.a.createElement("th",null,"3s Made"),r.a.createElement("th",null,"FT Made"),r.a.createElement("th",null,"FT Miss"),r.a.createElement("th",null,"FT %"))),r.a.createElement("tbody",null,v.map((function(a,t){return r.a.createElement(h,{key:t,name:a.name,number:a.number,homeUp:e.incrementHome,awayUp:e.incrementAway,totalUp:e.incrementTeamTotals,home:!0,controller:n})}))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("th",null,"--"),r.a.createElement("th",null,p),r.a.createElement("th",null,t),r.a.createElement("th",null,i),r.a.createElement("th",null,c),r.a.createElement("th",null,b),r.a.createElement("th",null,d),r.a.createElement("th",null,d+b!==0?(100*b/(d+b)).toFixed(0):0))))),r.a.createElement("div",{className:"AwayRoster"},r.a.createElement("table",{className:"RosterHeader"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Total"),r.a.createElement("th",null,"2s Made"),r.a.createElement("th",null,"3s Made"),r.a.createElement("th",null,"FT Made"),r.a.createElement("th",null,"FT Miss"),r.a.createElement("th",null,"FT %"))),r.a.createElement("tbody",null,k.map((function(a,t){return r.a.createElement(h,{key:t,name:a.name,number:a.number,homeUp:e.incrementHome,awayUp:e.incrementAway,totalUp:e.incrementTeamTotals,home:!1,controller:n})}))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("th",null,"--"),r.a.createElement("th",null,f),r.a.createElement("th",null,m),r.a.createElement("th",null,u),r.a.createElement("th",null,o),r.a.createElement("th",null,l),r.a.createElement("th",null,s),r.a.createElement("th",null,s+l!==0?(100*l/(s+l)).toFixed(0):0))))))),n?r.a.createElement("div",{className:"Input"},r.a.createElement("div",{className:"Selects"},r.a.createElement("div",null,"Home Team: \xa0",r.a.createElement("select",{defaultValue:"default",id:"homeInput",onChange:function(a){return e.updateTeams(!0)}},r.a.createElement("option",{hidden:!0,disabled:!0,value:"default"}," -- select a team -- "),S.map((function(e,a){return r.a.createElement("option",{key:a,value:a},e[0].name)})))),r.a.createElement("div",null,"Away Team: \xa0",r.a.createElement("select",{defaultValue:"default",id:"awayInput",onChange:function(a){return e.updateTeams(!1)}},r.a.createElement("option",{hidden:!0,disabled:!0,value:"default"}," -- select a team -- "),S.map((function(e,a){return r.a.createElement("option",{key:a,value:a},e[0].name)}))))),r.a.createElement("div",{className:"InfoDump"},g.map((function(e,a){return r.a.createElement("div",{key:a},e)}))),r.a.createElement(w,null)):void 0,r.a.createElement(E.a,{clientId:"679888380619-6k6qu0ms1dnjm4rc5blpi3j99a670sgd.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(a){return e.responseGoogle(a)},onFailure:function(a){return e.responseGoogle(a)},cookiePolicy:"single_host_origin"}))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.ed37b43e.chunk.js.map