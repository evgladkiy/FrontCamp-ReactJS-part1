import React, { Component } from 'react';

class TweetFooter extends Component {
    constructor(props) {
        super();
        this.pressButtonHandler = this.pressButtonHandler.bind(this);
        this.state = {
            likes: props.likes,
            retweets: props.retweets,
            isLikePressed: false,
            isRetweetPressed: false,
        };
    }

    pressButtonHandler(isPressed, prop) {
        this.setState((prevState) => {
            prevState[isPressed] ?
                prevState[prop]-- :
                prevState[prop]++;

            return Object.assign({}, prevState, {
                [isPressed]: !prevState[isPressed],
            });
        });
    }

    render() {
        const { likes, retweets } = this.state;
        const { id, deleteTweet, comments } = this.props;

        return (
            <div className="tweet-footer">
                <button
                  className={`likes ${this.state.isLikePressed ? 'active' : ''}`}
                  onClick={() => this.pressButtonHandler('isLikePressed', 'likes')}>
                    <i className="far fa-heart with-tooltip"></i>
                    <span className="tooltip">Like</span>
                    {likes}
                </button>
                <button className="commnts">
                    <i className="far fa-comment with-tooltip"></i>
                    <span className="tooltip">Reply</span>
                    {comments.length}
                </button>
                <button
                  className={`retweets ${this.state.isRetweetPressed ? 'active' : ''}`}
                  onClick={() => this.pressButtonHandler('isRetweetPressed', 'retweets')}>
                    <i className="fas fa-retweet with-tooltip"></i>
                    <span className="tooltip">Retweet</span>
                    {retweets}
                </button>
                <button className="btn btn_small" onClick={() => deleteTweet(id)}>
                    <i className="far fa-trash-alt"></i>
                    to trash
                </button>
            </div>
        );
    }
}

export default TweetFooter;
