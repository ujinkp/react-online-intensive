// Core
import React, { Component } from 'react';

//Components
import { Consumer } from 'components/HOC/withProfile';

//Instruments
import Styles from './styles.m.css';


export default class StatusBar extends Component {
    render() {
        return (
            <Consumer>
                {(context) =>(
                    <section  className = { Styles.statusBar }>
                        <button>
                            <img src = { context.avatar } />
                            <span>{`${ context.curentUserFirstName }`}</span>
                            &nbsp;
                            <span>{`${ context.curentUserLastName }`}</span>
                        </button>
                    </section>
                )}
            </Consumer>
        );
    }
}
