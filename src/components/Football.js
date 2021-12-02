import React, { Component } from 'react';
import './Football.css'

export default class Football extends Component {
    state = {
        homeName: "",
        awayName: "",
        homeScore: 0,
        awayScore: 0,
        possessionHome: true,
        quarter: 0,
        hideshow: {top: true, a: false, b: false, c: false, aa: false, aaa: false, aab: false, aaaa: false, bb: false, ca: false, caa: false}
    }

    render() {
        return(

            <div className="AllRows">
                <button className ="FootballButton" onClick={() => this.reset()}>Reset</button>
                {this.state.hideshow.top ? <div className='ButtonRow' id='top'>
                    <div className="RowSegment">
                        <button className ="FootballButton" onClick={() => this.button_a()}>Scoring Play</button>
                        <button className ="FootballButton" onClick={() => this.button_b()}>Turnover</button>
                        <button className ="FootballButton" onClick={() => this.button_c()}>Return</button>
                        <button className ="FootballButton" onClick={() => this.button_d()}>End of Half</button>
                    </div>
                </div> : null}
                {this.state.hideshow.a ? <div className='ButtonRow' id='a'>
                    <div className="RowSegment">
                        <input className = "FootballInput" placeholder="Yardage"></input>
                        <button className ="FootballButton" onClick={() => this.button_aa()}>Touchdown</button>
                        <input className = "FootballInput" placeholder="Kicker"></input>
                        <button className ="FootballButton" onClick={() => this.button_ab()}>Field Goal</button>
                    </div>
                </div> : null}
                {this.state.hideshow.b ? <div className='ButtonRow'id='b'>
                    <div className="RowSegment">
                        <button className ="FootballButton" onClick={() => this.button_ba()}>Down</button>
                        <button className ="FootballButton" onClick={() => this.button_bb()}>Fumble</button>
                        <button className ="FootballButton" onClick={() => this.button_bc()}>Interception</button>
                        <button className ="FootballButton" onClick={() => this.button_bd()}>Missed Field Goal</button>
                        <button className ="FootballButton" onClick={() => this.button_be()}>Punt</button>
                    </div>
                </div> : null}
                {this.state.hideshow.c ? <div className='ButtonRow' id='c'>
                    <div className="RowSegment">
                        <button className ="FootballButton" onClick={() => this.button_ca()}>Fumble</button>
                        <button className ="FootballButton" onClick={() => this.button_cb()}>Interception</button>
                        <button className ="FootballButton" onClick={() => this.button_cc()}>Punt</button>
                        <button className ="FootballButton" onClick={() => this.button_cd()}>Kick</button>
                        <button className ="FootballButton" onClick={() => this.button_ce()}>Safety</button>
                    </div>
                </div> : null}
                {this.state.hideshow.aa ? <div className='ButtonRow' id='aa'>
                    <div className="RowSegment">
                        <button className ="FootballButton" onClick={() => this.button_aaa()}>Run</button>
                        <button className ="FootballButton" onClick={() => this.button_aab()}>Pass</button>
                    </div>
                </div> : null}
                {this.state.hideshow.aaa ? <div className='ButtonRow' id='aaa'>
                    <div className="RowSegment">
                        <input className = "FootballInput" placeholder="Runner"></input>
                        <button className ="FootballButton" onClick={() => this.button_aaaa()}>Submit</button>
                    </div>
                </div> : null}
                {this.state.hideshow.aab ? <div className='ButtonRow' id='aab'>
                    <div className="RowSegment">
                        <input className = "FootballInput" placeholder="Passer"></input>
                        <input className = "FootballInput" placeholder="Reciever"></input>
                        <button className ="FootballButton" onClick={() => this.button_aaba()}>Submit</button>
                    </div>
                </div> : null}
                {this.state.hideshow.aaaa ? <div className='ButtonRow' id='aaaa'>
                    <div className="RowSegment">
                        <input className = "FootballInput" placeholder="Kicker/Runner"></input>
                        <button className ="FootballButton" onClick={() => this.button_aaaaa()}>1 point</button>
                        <button className ="FootballButton" onClick={() => this.button_aaaab()}>2 point</button>
                        <button className ="FootballButton" onClick={() => this.button_aaaac()}>No extra point</button>
                    </div>
                </div> : null}
                {this.state.hideshow.bb ? <div className='ButtonRow' id='bb'>
                    <div className="RowSegment">
                        <input className = "FootballInput" placeholder="Reciever"></input>
                        <button className ="FootballButton" onClick={() => this.button_bba()}>Submit</button>
                    </div>
                </div> : null}
                {this.state.hideshow.ca ? <div className='ButtonRow' id='ca'>
                    <div className="RowSegment">
                        <input className = "FootballInput" placeholder="Yardage"></input>
                        <input className = "FootballInput" placeholder="Runner"></input>
                        <button className ="FootballButton" onClick={() => this.button_caa()}>Submit</button>
                    </div>
                </div> : null}
                {this.state.hideshow.caa ? <div className='ButtonRow' id='caa'>
                    <div className="RowSegment">
                        <input className = "FootballInput" placeholder="Kicker/Runner"></input>
                        <button className ="FootballButton" onClick={() => this.button_caaa()}>1 point</button>
                        <button className ="FootballButton" onClick={() => this.button_caab()}>2 point</button>
                        <button className ="FootballButton" onClick={() => this.button_caac()}>No extra point</button>
                    </div>
                </div> : null}
            </div>
        );
    }

    reset = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                top: true, a: false, b: false, c: false, aa: false, aaa: false, aab: false, aaaa: false, bb: false, ca: false, caa: false
            }
        }))
    }

    button_a = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                top: false,
                a: true
            }
        }))
    }
    button_b = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                top: false,
                b: true
            }
        }))
    }
    button_c = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                top: false,
                c: true
            }
        }))
    }
    button_d = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                top: false,
                d: true
            }
        }))
    }
    button_aa = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                a: false,
                aa: true
            }
        }))
    }
    button_ab = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                a: false,
                ab: true
            }
        }))
    }
    button_ba = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                b: false,
                ba: true
            }
        }))
    }
    button_bb = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                b: false,
                bb: true
            }
        }))
    }
    button_bc = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                b: false,
                bc: true
            }
        }))
    }
    button_bd = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                b: false,
                bd: true
            }
        }))
    }
    button_be = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                b: false,
                be: true
            }
        }))
    }
    button_ca = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                c: false,
                ca: true
            }
        }))
    }
    button_cb = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                c: false,
                cb: true
            }
        }))
    }
    button_cc = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                c: false,
                cc: true
            }
        }))
    }
    button_cd = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                c: false,
                cd: true
            }
        }))
    }
    button_ce = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                c: false,
                ce: true
            }
        }))
    }
    button_aaa = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                aa: false,
                aaa: true
            }
        }))
    }
    button_aab = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                aa: false,
                aab: true
            }
        }))
    }
    button_aaaa = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                aaa: false,
                aaaa: true
            }
        }))
    }
    button_aaba = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                aab: false,
                aaba: true
            }
        }))
    }
    button_aaaaa = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                aaaa: false,
                aaaaa: true
            }
        }))
    }
    button_aaaab = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                aaaa: false,
                aaaab: true
            }
        }))
    }
    button_aaaac = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                aaaa: false,
                aaaac: true
            }
        }))
    }
    button_bba = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                bb: false,
                bba: true
            }
        }))
    }
    button_caa = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                ca: false,
                caa: true
            }
        }))
    }
    button_caaa = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                caa: false,
                caaa: true
            }
        }))
    }
    button_caab = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                caa: false,
                caab: true
            }
        }))
    }
    button_caac = () => {
        this.setState(prevState => ({
            hideshow: {                   // object that we want to update
                ...prevState.hideshow,    // keep all other key-value pairs
                caa: false,
                caac: true
            }
        }))
    }
}