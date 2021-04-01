
function TweetItem(props){

    const {tweet} = props
console.log('tweet', tweet)
    return(<div className='tweet'>
        <div className='title'>
            <div className='userName'>
                <p>{tweet.userName}</p>
            </div>
            
            <div className='createdTime'>
                <p>{tweet.date}</p>
            </div>
        </div>
        <div>
            {tweet.content}
        </div>
        </div>
    )
}

export default TweetItem;
