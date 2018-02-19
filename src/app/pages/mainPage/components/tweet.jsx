import React, { Component } from 'react';

import TweetFooter from './tweetFooter';
import CommentList from './commentList'

class Tweet extends Component {
    constructor(props) {
        super();
    }

    getTweetDate() {
        const options = {
            day: 'numeric',
            month: 'long',
        };

        return new Date(this.props.tweetInfo.tweetDate)
            .toLocaleString('en-US', options)
            .split(' ')
            .reverse()
            .join(' ');
    }

    getNikName() {
        return this.props.tweetInfo.email.split('@')[0];
    }

    getTweetText() {
        const text = this.props.tweetInfo.tweetText;
        return `${text[0].toUpperCase()}${text.slice(1)}`;
    }

    render() {
        const {
            avatar, tweetAuthor, id,
            comments, likes, retweets
        } = this.props.tweetInfo;

        return (
            <section className="tweet">
                <div className="tweet-header">
                    <img src={avatar} alt="author avatar" />
                    <div className="author-container">
                        <div className="author-name">{tweetAuthor} </div>
                        <div className="author-nikName">@{this.getNikName()} </div>
                    </div>
                    <span className="tweet-date">{this.getTweetDate()} </span>
                </div>
                <p className="tweetText">{this.getTweetText()}</p>
                <TweetFooter
                  likes={likes}
                  retweets={retweets}
                  comments={comments}
                  id={id}
                  deleteTweet={this.props.deleteTweet}
                />
            </section>
        );
    }
}

export default Tweet;
