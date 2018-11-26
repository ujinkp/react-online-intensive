// Core
import React, { Component } from 'react';

//Components
import { Consumer } from 'components/HOC/withProfile';

//Instruments
import Styles from './styles.m.css';

export default class Composer extends Component {
    render() {
        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.composer }>
                        <img src = { context.avatar } />
                        <form>
                            <textarea placeholder = { `What\'s on your mind, ${context.curentUserFirstName}` }/>
                            <input
                                type = 'submit'
                                value = 'Post'
                            />
                        </form>
                    </section>
                )}
            </Consumer>

        );
    }
}