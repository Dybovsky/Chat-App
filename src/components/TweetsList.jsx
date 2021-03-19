
import React from 'react';
import TweetItem from './TweetItem';
import {useContext} from 'react'
import TweetsContext from './TweetsContext';

function TweetsList(){

    const tweetList = useContext(TweetsContext)
    return(
        <div className="tweets">
            
            {tweetList.tweets.map(tweet => 
            <TweetItem 
            tweet={tweet}
            key={tweet.id}
            />
            )}
        </div>
    )

}

export default TweetsList;