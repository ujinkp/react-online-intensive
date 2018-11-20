// Core
import React, { Component } from 'react';

//Instruments
import Styles from './styles.m.css';


export default class StatusBar extends Component {
    render() {
        const {
            curentUserFirstName,
            curentUserLastName,
            avatar,
        } = this.props;

        return (
            <section  className = { Styles.statusBar }>
                <button>
                    <img src = { avatar } />
                    <span>{`${ curentUserFirstName }`}</span>
                    &nbsp;
                    <span>{`${ curentUserLastName }`}</span>
                </button>
            </section>
        );
    }
}
