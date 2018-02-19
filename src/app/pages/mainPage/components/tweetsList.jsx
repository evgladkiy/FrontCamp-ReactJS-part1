import React from 'react';

import Tweet from './tweet';

const TweetsList = (props) =>(
    props.tweets.map(tweet => (
        <Tweet
          key={tweet.id}
          tweetInfo={tweet}
          deleteTweet={props.deleteTweet}
        />
    ))
);

export default TweetsList;
