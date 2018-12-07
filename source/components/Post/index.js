// Core
import React, { Component } from 'react';
import moment from 'moment';
import { func, string, number, array } from 'prop-types';

//Components
import Like from 'components/Like';
import { withProfile } from 'components/HOC/withProfile';

//Instruments
import Styles from './styles.m.css';

@withProfile
export default class Post extends Component {
    static propTypes = {
        _likePost:   func.isRequired,
        _deletePost: func.isRequired,
        comment:     string.isRequired,
        created:     number.isRequired,
        id:          string.isRequired,
        likes:       array.isRequired,
    }

    _deletePost = () => {
        const { _deletePost, id } = this.props;

        _deletePost(id);
    }

    render() {
        const { comment, created, _likePost, id, likes } = this.props;
        const { avatar, curentUserFirstName, curentUserLastName } = this.props;

        return (
            <section  className = { Styles.post }>
                <span
                    className = { Styles.cross }
                    onClick = { this._deletePost }
                />
                <img src = { avatar } />
                <a>{`${ curentUserFirstName } ${ curentUserLastName }` }</a>
                <time>
                    {moment.unix(created).format('MMMM D h:mm:ss a')}
                </time>
                <p>{comment}</p>
                <Like
                    _likePost = { _likePost }
                    id = { id }
                    likes = { likes }
                />
            </section>
        );
    }
}
