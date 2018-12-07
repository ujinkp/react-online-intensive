// Core
import React, { Component } from 'react';
import moment from 'moment';

//Components
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';

//Instruments
import Styles from './styles.m.css';
import { getUniqueID, delay } from 'instruments';


export default class Feed extends Component {
    constructor () {
        super();

        this._createPost = this._createPost.bind(this);
        this._setPostFetchingState = this._setPostFetchingState.bind(this);
        this._likePost = this._likePost.bind(this);
        this._deletePost = this._deletePost.bind(this);
    }

    state = {
        posts: [
            {
                id:      '123',
                comment: 'Hi there!',
                created: 1526825076849,
                likes:   [],
            },
            {
                id:      '456',
                comment: 'Привет',
                created: 1526825076855,
                likes:   [] },
        ],
        fetching: false,
    }

    _setPostFetchingState (state) {
        this.setState({
            fetching: state,
        });
    }

    async _createPost (comment) {
        this._setPostFetchingState(true);

        const post = {
            id:      getUniqueID(),
            created: moment.utc(),
            comment,
            likes:   [],
        };

        await delay(1200);

        this.setState(({ posts }) => ({
            posts:    [ post, ...posts ],
            fetching: false,
        }));
    }

    async _likePost (id) {
        const { curentUserFirstName, curentUserLastName } = this.props;
        this._setPostFetchingState(true);

        await delay(1200);

        const newPosts = this.state.posts.map((post) => {
            if (post.id === id) {
                return {
                    ...post,
                    likes: [
                        {
                            id:        getUniqueID(),
                            firstName: curentUserFirstName,
                            lastName:  curentUserLastName,
                        },
                    ],
                };
            }

            return post;
        });

        this.setState({
            posts:    newPosts,
            fetching: false,
        });
    }

    async _deletePost (id) {
        this._setPostFetchingState(true);

        await delay(1200);

        this.setState(({ posts }) => ({
            posts:    posts.filter((post) => post.id !== id),
            fetching: false,
        }));
    }

    render() {
        const { posts, fetching } = this.state;

        const postsJSX = posts.map((post) => {
            return (
                <Post
                    key = { post.id }
                    { ...post }
                    _deletePost = { this._deletePost }
                    _likePost = { this._likePost }
                />
            );
        });

        return (
            <section className = { Styles.feed }>
                <Spinner isSpinning = { fetching } />
                <StatusBar />
                <Composer _createPost = { this._createPost } />
                { postsJSX }
            </section>
        );
    }
}
