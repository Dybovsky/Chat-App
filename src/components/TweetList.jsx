import TweetItem from './TweetItem';

const TweetList = (props) => {
    const { tweets } = props;
    
    return(
        <div>
   
            {tweets.map((tweet) => 
            
                <TweetItem 
                key={tweet.id} 
                tweet={tweet}
                
                />
                )}
        </div>
    )
}

export default TweetList;