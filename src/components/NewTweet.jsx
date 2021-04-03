import { useContext, useState } from 'react';
import { AuthContext } from "./AuthContext";



const NewTweet = (props) => {
        
    const authContext = useContext(AuthContext);
    const { onNewTweet } = props;
    const [content, setContent] = useState('');
    const [chars, setChars] = useState(0);

   const handleSubmit = (event) => {
      const dateCreated = new Date()
      event.preventDefault()
      if(!content) return;
   
        const newTweet = {
          userName: authContext.authUser.displayName, 
          //localStorage.getItem('newName') ? localStorage.getItem('newName') : 'Incognito',
         // id: Date.now(),
          content: content,
          date: dateCreated.toISOString(),
          senderId: authContext.authUser.uid,
        }
        onNewTweet(newTweet);
        setContent(''); 
    }
  

        return(
            <div className='formDiv'>
              <form 
                onSubmit={(event) => handleSubmit(event)}
                className='form'
              >
                <textarea
                  placeholder=' What is on your mind'
                  value={content}
                  onChange={(event) => {
                    setContent(event.target.value);
                    setChars(event.target.value.length)
                  }}
                >

                </textarea>
          
                <button
                  type='submit'
                  className='tweetBtn'
                  disabled={
                  ((chars > 140) || (props.isLoading)) && true
                }
                >
                  Tweet
                </button>
              </form>
            </div>
        )
    }


export default NewTweet;
