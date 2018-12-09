// Core
import React, { Component } from 'react';
import cx from 'classnames';

//Components
import { withProfile } from 'components/HOC/withProfile';

//Instruments
import Styles from './styles.m.css';
import { socket } from 'socket/init';

@withProfile
export default class StatusBar extends Component {
    state = {
        online: false,
    };

    componentDidMount () {
        socket.on('connect', () => {
            this.setState({
                online: true,
            });
        });

        socket.on('disconnect', () => {
            this.setState({
                online: false,
            });
        });
    }

    componentWillUnmount() {
        socket.removeListenet('connect');
        socket.removeListenet('disconnect');
    }

    render() {
        const {
            avatar,
            curentUserFirstName,
            curentUserLastName,
        } = this.props;
        const { online } = this.state;

        const statusStyle = cx(Styles.status, {
            [ Styles.online ]:  online,
            [ Styles.offline ]: !online,
        });

        const statusMassage = online ? 'Online' : 'Offline';

        return (
            <section  className = { Styles.statusBar }>
                <div className = { statusStyle }>
                    <div>{statusMassage}</div>
                    <span/>
                </div>
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
