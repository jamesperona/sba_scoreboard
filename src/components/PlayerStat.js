import React, { Component } from 'react';
import './PlayerStat.css';

//TODO: dumping at end of quarter: a full summary of all players who had activity

export default class Player extends Component {
    state = {
        total: 0,
        twomakes: 0,
        threemakes: 0,
        ftmakes: 0,
        ftmisses: 0,
        fttotal: 0,
        percentage: 0,
        personalScore: 0
    }
    render() {
        return(
            <tr>
                <td>
                    {this.props.number}
                </td>
                <td>
                    {this.props.name}
                </td>
                <td>
                    {this.state.personalScore}
                </td>
                <td className="clickable" onClick={(event) => this.incrementTwos(1, event)} onContextMenu={(event) => this.incrementTwos(-1, event)}>
                    {this.state.twomakes}
                </td>
                <td className="clickable" onClick={(event) => this.incrementThrees(1, event)} onContextMenu={(event) => this.incrementThrees(-1, event)}>
                    {this.state.threemakes}
                </td>
                <td className="clickable" onClick={(event) => this.incrementFTMakes(1, event)} onContextMenu={(event) => this.incrementFTMakes(-1, event)}>
                    {this.state.ftmakes}
                </td>
                <td className="clickable" onClick={(event) => this.incrementFTMisses(1, event)} onContextMenu={(event) => this.incrementFTMisses(-1, event)}>
                    {this.state.ftmisses}
                </td>
                <td>
                    {this.state.percentage}
                </td>
            </tr>
        );
    }

    incrementFTMakes = (sign, event) => {
        const{
            total,
            ftmakes,
            personalScore,
            fttotal
        } = this.state;

        if (!this.props.controller) {
            return;
        }

        event.preventDefault();

        if (sign === -1 && ftmakes === 0) {
            return;
        }
        
        this.setState({
            total: total+sign,
            fttotal: fttotal+sign,
            ftmakes: ftmakes+sign,
            percentage: (fttotal+sign !== 0) ? (100*(ftmakes+sign)/(fttotal+sign)).toFixed(0) : 0,
            personalScore: personalScore+1*sign
        })  
        if (this.props.home) {
            this.props.homeUp(1*sign);
        } else {
            this.props.awayUp(1*sign);
        }
        this.props.totalUp(this.props.home, 1, sign, this.props.name);
    }

    incrementFTMisses = (sign, event) => {
        const{
            total,
            ftmakes,
            ftmisses,
            fttotal
        } = this.state;

        if (!this.props.controller) {
            return;
        }
        
        event.preventDefault();

        if (sign === -1 && ftmisses === 0) {
            return;
        }

        this.setState({
            total: total+sign,
            fttotal: fttotal+sign,
            ftmisses: ftmisses+sign,
            percentage: (fttotal+sign !== 0) ? (100*ftmakes/(fttotal+sign)).toFixed(0) : 0
        })
        this.props.totalUp(this.props.home, 0, sign, this.props.name);
    }

    incrementTwos = (sign, event) => {
        const{
            total,
            twomakes,
            personalScore
        } = this.state;

        if (!this.props.controller) {
            return;
        }

        event.preventDefault();

        if (sign === -1 && twomakes === 0) {
            return;
        }

        this.setState({
            total: total+sign,
            twomakes: twomakes+sign,
            personalScore: personalScore+2*sign
        })
        if (this.props.home) {
            this.props.homeUp(2*sign);
        } else {
            this.props.awayUp(2*sign);
        }
        this.props.totalUp(this.props.home, 2, sign, this.props.name);
    }

    incrementThrees = (sign, event) => {
        const{
            total,
            threemakes,
            personalScore
        } = this.state;

        if (!this.props.controller) {
            return;
        }

        event.preventDefault();

        if (sign === -1 && threemakes === 0) {
            return;
        }

        this.setState({
            total: total+sign,
            threemakes: threemakes+sign,
            personalScore: personalScore+3*sign
        })
        if (this.props.home) {
            this.props.homeUp(3*sign);
        } else {
            this.props.awayUp(3*sign);
        }
        this.props.totalUp(this.props.home, 3, sign, this.props.name);
    }
}