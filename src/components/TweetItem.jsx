

function TweetsList(props){

    const {tweet} = props

    return(<>
        <div>
            {tweet.content}
        </div>
        <div>
            {tweet.createdTime}
        </div>
        </>
    )
}

export default TweetsList;