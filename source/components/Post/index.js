// Core
import React, { Component } from 'react';
import moment from 'moment';

//Instruments
import Styles from './styles.m.css';


export default class Post extends Component {
    render() {
        const {
            curentUserFirstName,
            curentUserLastName,
            avatar,
        } = this.props;

        return (
            <section  className = { Styles.post }>
                <img src = { avatar } />
                <a>{`${ curentUserFirstName } ${ curentUserLastName }` }</a>
                <time>{moment().format('MMMM D h:mm:ss a')}</time>
                <p>Howdy!</p>
            </section>
        );
    }
}
