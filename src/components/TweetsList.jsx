import React from 'react';
import TweetItem from './TweetItem'

function TweetsList(props){

    const {tweets} = props;
    return(
        <div>
            {tweets.map(tweet => 
            <TweetItem 
            tweet={tweet}
            key={tweet.id}
            />)}
        </div>
    )

}

export default TweetsList;