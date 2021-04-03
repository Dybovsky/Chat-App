import { useEffect, useState, useContext } from "react"
import {firestore} from '../lib/ApiFire'
import { AuthContext } from "./AuthContext";



const TweetItem = (props) => {
    const authContext = useContext(AuthContext);
    const {authUser} = authContext;
     
    const [sender, setSender] = useState(null);
    const {tweet} = props;
    const {senderId} = tweet;
    
  
    console.log(props.isShow)

    const isTweetFromAuthUser = senderId === authUser.uid;
    useEffect(() => {
        firestore
        .collection('users')
        .doc(senderId)
        .get()
        .then(doc => {
            const sender = {
                ...doc.data(),
                id: doc.id,
            }
            setSender(sender)
        })

    },[senderId]);
    return(
        (props.isShow && isTweetFromAuthUser) &&
    <div className='tweet'>
        <div className='title'>
            <div className='userName'>
                <p>{sender ? sender.userName : ''}</p>
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