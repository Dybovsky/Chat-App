import React from 'react';
import { postTweet } from '../lib/api'


class NewTweet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        content: ' ',
        chars: 0,
        
      };
    }

   async handleSubmit(event){
     const dateCreated = new Date()
      event.preventDefault()
      if(!this.state.content)
      return;
        let newTweet = {
          userName: localStorage.getItem('newName') ? localStorage.getItem('newName') : 'Incognito',
         // id: Date.now(),
          content: this.state.content,
          date: dateCreated.toISOString(),
          
        
        }
        postTweet(newTweet)
         this.props.onNewTweet(newTweet)
        this.setState({content: ''})
    }


   


    render(){
        return(
            <div
            className='formDiv'>
              <form 
              onSubmit={(event) => this.handleSubmit(event)}
              className='form'
              >
                <textarea
                placeholder=' What is on your mind'
                value={this.state.content}
                onChange={(event) => this.setState({content: event.target.value, chars: event.target.value.length })}
                ></textarea>
          
                <button
                type='submit'
                className='tweetBtn'
                disabled={
                  ((this.state.chars > 140) || (this.props.isLoading)) && true
                }
                >Tweet</button>
              
              </form>
            </div>
        )
    }

}

export default NewTweet;
