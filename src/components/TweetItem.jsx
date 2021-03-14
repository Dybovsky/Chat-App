const TweetItem = (props) => {
    const { tweet } = props;
    return(
        <div>
            {tweet.content}
        </div>
        
    ); 
}

export default TweetItem;