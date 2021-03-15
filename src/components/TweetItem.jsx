import format from "date-fns/format";
function TweetsList(props){

    const {tweet} = props

    return(<div className='tweet'>
        <div className='title'>
            <div className='userName'>
                <p>Mr Yonatan</p>
            </div>
            <div className='createdTime'>
                <p>{format(tweet.createdTime, 'Pp')}</p>
            </div>
        </div>
        <div>
            {tweet.content}
        </div>
        </div>
    )
}

export default TweetsList;
