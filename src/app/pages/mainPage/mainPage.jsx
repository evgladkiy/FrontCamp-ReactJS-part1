import React, { Component } from 'react';

import Footer from './../../common/footer';
import Header from './../../common/header';
import TweetsList from './components/tweetsList';
import TweetsToolbox from './components/tweetsToolbox';
import NewTweetForm from './components/newTweetFrom';
import { initialData } from './initialData';

const data = initialData.sort((a, b) => (
    new Date(b.tweetDate) - new Date(a.tweetDate)
));

class MainPage extends Component {
    constructor() {
        super();
        this.deleteTweet = this.deleteTweet.bind(this);
        this.filterTwits = this.filterTwits.bind(this);
        this.addTweet = this.addTweet.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.state = {
            shouldShowForm: false,
            tweets: data,
            filtredTweets: [...data],
        };
    }

    deleteTweet(id) {
        this.setState((prevState) => {
            const filtredTweets = prevState.tweets
                .filter(tweet => tweet.id !== id);

            const filtredFiltredTweets = prevState.filtredTweets
                .filter(tweet => tweet.id !== id);

            return Object.assign({}, prevState, {
                tweets: filtredTweets,
                filtredTweets: filtredFiltredTweets,
            });
        });
    }

    filterTwits(filter) {
        this.setState((prevState) => {
            const filtredTweets = prevState.tweets
                .filter((tweet) => {
                    const mappedFilter = filter.trim().toLowerCase();

                    return tweet.tweetAuthor
                        .split(' ')
                        .some(word => (
                            word.toLowerCase().indexOf(mappedFilter) === 0
                        ));
                });

            return Object.assign({}, prevState, { filtredTweets });
        });
    }

    toggleForm() {
        this.setState(prevState => (
            Object.assign({}, prevState, {
                shouldShowForm: !prevState.shouldShowForm,
            })
        ));
    }

    addTweet(tweet) {
        this.setState(prevState => (
            Object.assign({}, prevState, {
                tweets: [tweet, ...prevState.tweets],
                filtredTweets: [tweet, ...prevState.filtredTweets],
            })
        ));
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    <TweetsToolbox
                      filterTwits={this.filterTwits}
                      toggleForm={this.toggleForm}
                      shouldShowForm={this.state.shouldShowForm}
                    />
                    {this.state.shouldShowForm ?
                        <NewTweetForm
                          addTweet={this.addTweet}
                          toggleForm={this.toggleForm}
                      /> :
                      ''
                    }
                    <TweetsList
                      tweets={this.state.filtredTweets}
                      deleteTweet={this.deleteTweet}
                    />
                </main>
                <Footer year="2018" />
            </React.Fragment>
        );
    }
}

export default MainPage;
