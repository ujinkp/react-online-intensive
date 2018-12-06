// Core
import React, { Component } from 'react';
import moment from 'moment';
import { func, string, number, array } from 'prop-types';

//Components
import Like from 'components/Like';
import { Consumer } from 'components/HOC/withProfile';

//Instruments
import Styles from './styles.m.css';


export default class Post extends Component {
    static propTypes = {
        _likePost: func.isRequired,
        comment:   string.isRequired,
        created:   number.isRequired,
        id:        string.isRequired,
        likes:     array.isRequired,
    }

    render() {
        const { comment, created, _likePost, _deletePost, id, likes } = this.props;

        return (
            <Consumer>
                {(context) => (
                    <section  className = { Styles.post }>
                        <span>
                            className = { Styles.cross }
                            onClick = { _deletePost }
                        </span>
                        <img src = { context.avatar } />
                        <a>{`${ context.curentUserFirstName } ${ context.curentUserLastName }` }</a>
                        <time>
                            {moment.unix(created).format('MMMM D h:mm:ss a')}
                        </time>
                        <p>{comment}</p>
                        <Like
                            _likePost = { _likePost }
                            id = { id }
                            likes = { likes }
                            { ...context }
                        />
                    </section>
                )}
            </Consumer>

        );
    }
}
