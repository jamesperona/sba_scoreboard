(this.webpackJsonpscoreboard=this.webpackJsonpscoreboard||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},15:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),m=a(8),l=a.n(m),o=(a(15),a(9)),s=a(1),c=a(2),u=a(4),i=a(3),h=a(5),p=(a(7),a(19),a(20),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),m=0;m<n;m++)r[m]=arguments[m];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={total:0,twomakes:0,threemakes:0,ftmakes:0,ftmisses:0,fttotal:0,percentage:0,personalScore:0},a.incrementFTMakes=function(e,t){var n=a.state,r=n.total,m=n.ftmakes,l=n.personalScore,o=n.fttotal;t.preventDefault(),-1===e&&0===m||(a.setState({total:r+e,fttotal:o+e,ftmakes:m+e,percentage:o+e!==0?(100*(m+e)/(o+e)).toFixed(0):0,personalScore:l+1*e}),a.props.home?a.props.homeUp(1*e):a.props.awayUp(1*e),a.props.totalUp(a.props.home,1,e))},a.incrementFTMisses=function(e,t){var n=a.state,r=n.total,m=n.ftmakes,l=n.ftmisses,o=n.fttotal;t.preventDefault(),-1===e&&0===l||(a.setState({total:r+e,fttotal:o+e,ftmisses:l+e,percentage:o+e!==0?(100*m/(o+e)).toFixed(0):0}),a.props.totalUp(a.props.home,0,e))},a.incrementTwos=function(e,t){var n=a.state,r=n.total,m=n.twomakes,l=n.personalScore;t.preventDefault(),-1===e&&0===m||(a.setState({total:r+e,twomakes:m+e,personalScore:l+2*e}),a.props.home?a.props.homeUp(2*e):a.props.awayUp(2*e),a.props.totalUp(a.props.home,2,e))},a.incrementThrees=function(e,t){var n=a.state,r=n.total,m=n.threemakes,l=n.personalScore;t.preventDefault(),-1===e&&0===m||(a.setState({total:r+e,threemakes:m+e,personalScore:l+3*e}),a.props.home?a.props.homeUp(3*e):a.props.awayUp(3*e),a.props.totalUp(a.props.home,3,e))},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.number),r.a.createElement("td",null,this.props.name),r.a.createElement("td",null,this.state.personalScore),r.a.createElement("td",{className:"clickable",onClick:function(t){return e.incrementTwos(1,t)},onContextMenu:function(t){return e.incrementTwos(-1,t)}},this.state.twomakes),r.a.createElement("td",{className:"clickable",onClick:function(t){return e.incrementThrees(1,t)},onContextMenu:function(t){return e.incrementThrees(-1,t)}},this.state.threemakes),r.a.createElement("td",{className:"clickable",onClick:function(t){return e.incrementFTMakes(1,t)},onContextMenu:function(t){return e.incrementFTMakes(-1,t)}},this.state.ftmakes),r.a.createElement("td",{className:"clickable",onClick:function(t){return e.incrementFTMisses(1,t)},onContextMenu:function(t){return e.incrementFTMisses(-1,t)}},this.state.ftmisses),r.a.createElement("td",null,this.state.percentage))}}]),t}(n.Component)),d=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),m=0;m<n;m++)r[m]=arguments[m];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={homeScore:0,awayScore:0,awayThrees:0,awayTwos:0,awayMakes:0,awayMisses:0,homeThrees:0,homeTwos:0,homeMakes:0,homeMisses:0,quarter:0,homeName:"N/A",awayName:"N/A",homeTeam:[],awayTeam:[],outData:[],rosters:[[{name:"Saint Bede Academy"},{name:"Kaden Monterastelli",number:2},{name:"Braden Damerell",number:5},{name:"Logan Griggs",number:10},{name:"Gunnar Jauch",number:13},{name:"Nathan Potthoff",number:14},{name:"Logan Link",number:22},{name:"Maks Sharshekeev",number:23},{name:"Luke Story",number:24},{name:"Paul Hart",number:30},{name:"Nick Pearse",number:31},{name:"Duncan Lawler",number:3}],[{name:"Newman Central Catholic"},{name:"N. Welty",number:3},{name:"L. Jungerman",number:10},{name:"E. Henkel",number:11},{name:"T. Powers",number:11},{name:"B. Newman",number:12},{name:"N. Britt",number:13},{name:"J. Ackman",number:14},{name:"G. Moran",number:14},{name:"C. Britt",number:15},{name:"S. Cheng",number:20},{name:"G. Koerner",number:20},{name:"C. McBride",number:21},{name:"G. Hunsberger",number:22},{name:"K. Brininger",number:23},{name:"A. Velasquez",number:23},{name:"K. Mullen",number:24},{name:"D. House",number:30},{name:"M. Williams",number:32},{name:"N. Neubauer",number:42}],[{name:"Streator"},{name:"C. Bedecker",number:1},{name:"J. Starkey",number:2},{name:"A. Ford",number:3},{name:"S. Good",number:4},{name:"M. Benning",number:5},{name:"A. Benning",number:12},{name:"P. Benning",number:13},{name:"A. Ward",number:21},{name:"J. Haynes",number:23},{name:"I. Beals",number:24},{name:"J. Tredway",number:30},{name:"M. Baker",number:33},{name:"L. Williamson",number:55}]]},a.updateTeams=function(e){var t=a.state.rosters;if(e){var n=t[document.getElementById("homeInput").value],r=n.slice(1);console.log(r);var m=r.map((function(e){return e}));a.setState({homeTeam:m,homeName:n[0].name})}else{var l=t[document.getElementById("awayInput").value],o=l.slice(1).map((function(e){return e}));a.setState({awayTeam:o,awayName:l[0].name})}},a.incrementQuarter=function(e,t){var n=a.state,r=n.quarter,m=n.outData,l=n.homeName,s=n.homeScore,c=n.awayName,u=n.awayScore;t.preventDefault(),e&&r<4&&a.setState({quarter:r+1,outData:[].concat(Object(o.a)(m),["End of ".concat(["1st","2nd","3rd","4th","Final"][r]," quarter: ").concat(l,": ").concat(s," | ").concat(c,": ").concat(u)])}),!e&&r>0&&a.setState({quarter:r-1})},a.incrementHome=function(e){var t=a.state.homeScore;a.setState({homeScore:t+e})},a.incrementAway=function(e){var t=a.state.awayScore;a.setState({awayScore:t+e})},a.incrementTeamTotals=function(e,t,n){var r=a.state,m=r.homeMakes,l=r.homeMisses,o=r.homeTwos,s=r.homeThrees,c=r.awayMakes,u=r.awayMisses,i=r.awayTwos,h=r.awayThrees;e?(0===t&&a.setState({homeMisses:l+n}),1===t&&a.setState({homeMakes:m+n}),2===t&&a.setState({homeTwos:o+n}),3===t&&a.setState({homeThrees:s+n})):(0===t&&a.setState({awayMisses:u+n}),1===t&&a.setState({awayMakes:c+n}),2===t&&a.setState({awayTwos:i+n}),3===t&&a.setState({awayThrees:h+n}))},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.homeScore,n=t.awayScore,m=t.awayThrees,l=t.awayTwos,o=t.awayMakes,s=t.awayMisses,c=t.homeThrees,u=t.homeTwos,i=t.homeMakes,h=t.homeMisses,d=t.quarter,E=t.homeName,b=t.awayName,f=t.homeTeam,w=t.awayTeam,y=t.outData,v=t.rosters,T=new Date;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"FullBoard"},r.a.createElement("div",{className:"GameInfo"},r.a.createElement("div",{className:"GameName"},E," vs. ",b,", ",T.toDateString()),r.a.createElement("div",{className:"ScoresTimes"},r.a.createElement("div",{className:"ScoreCounter"},a),r.a.createElement("div",{className:"QuarterCount",onClick:function(t){return e.incrementQuarter(!0,t)},onContextMenu:function(t){return e.incrementQuarter(!1,t)}},["1st","2nd","3rd","4th","Final"][d]),r.a.createElement("div",{className:"ScoreCounter"},n))),r.a.createElement("div",{className:"Rosters"},r.a.createElement("div",{className:"HomeRoster"},r.a.createElement("table",{className:"RosterHeader",onContextMenu:function(e){return e.preventDefault()}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Total"),r.a.createElement("th",null,"2s Made"),r.a.createElement("th",null,"3s Made"),r.a.createElement("th",null,"FT Made"),r.a.createElement("th",null,"FT Miss"),r.a.createElement("th",null,"FT %"))),r.a.createElement("tbody",null,f.map((function(t,a){return r.a.createElement(p,{name:t.name,number:t.number,homeUp:e.incrementHome,awayUp:e.incrementAway,totalUp:e.incrementTeamTotals,home:!0})}))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("th",null,"--"),r.a.createElement("th",null,E),r.a.createElement("th",null,a),r.a.createElement("th",null,u),r.a.createElement("th",null,c),r.a.createElement("th",null,i),r.a.createElement("th",null,h),r.a.createElement("th",null,h+i!==0?(100*i/(h+i)).toFixed(0):0))))),r.a.createElement("div",{className:"AwayRoster"},r.a.createElement("table",{className:"RosterHeader"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Total"),r.a.createElement("th",null,"2s Made"),r.a.createElement("th",null,"3s Made"),r.a.createElement("th",null,"FT Made"),r.a.createElement("th",null,"FT Miss"),r.a.createElement("th",null,"FT %"))),r.a.createElement("tbody",null,w.map((function(t,a){return r.a.createElement(p,{name:t.name,number:t.number,homeUp:e.incrementHome,awayUp:e.incrementAway,totalUp:e.incrementTeamTotals,home:!1})}))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("th",null,"--"),r.a.createElement("th",null,b),r.a.createElement("th",null,n),r.a.createElement("th",null,l),r.a.createElement("th",null,m),r.a.createElement("th",null,o),r.a.createElement("th",null,s),r.a.createElement("th",null,s+o!==0?(100*o/(s+o)).toFixed(0):0))))))),r.a.createElement("div",{className:"Input"},r.a.createElement("div",{className:"Selects"},r.a.createElement("div",null,"Home Team: \xa0",r.a.createElement("select",{id:"homeInput",onChange:function(t){return e.updateTeams(!0)}},r.a.createElement("option",{hidden:!0,disabled:!0,selected:!0,value:!0}," -- select a team -- "),v.map((function(e,t){return r.a.createElement("option",{key:t,value:t},e[0].name)})))),r.a.createElement("div",null,"Away Team: \xa0",r.a.createElement("select",{id:"awayInput",onChange:function(t){return e.updateTeams(!1)}},r.a.createElement("option",{hidden:!0,disabled:!0,selected:!0,value:!0}," -- select a team -- "),v.map((function(e,t){return r.a.createElement("option",{key:t,value:t},e[0].name)}))))),r.a.createElement("div",{className:"InfoDump"},y.map((function(e,t){return r.a.createElement("div",null,e)})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.e8b70b59.chunk.js.map