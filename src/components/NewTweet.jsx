import React from 'react';

class NewTweet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        content: ' ',
        chars: 0,
      };
    }

    handleSubmit(event){
      event.preventDefault()
      if(!this.state.content)
      return;
        let newTweet = {
          id: Date.now(),
          content: this.state.content,
          createdTime: Date.now(),
        

        }
        this.props.onNewTweet(newTweet)
        this.setState({content: ''})
    }


   


    render(){
        return(
            <div>
              <form onSubmit={(event) => this.handleSubmit(event)}>
                <textarea
                // id='content'
                // name='content'
                value={this.state.content}
                onChange={(event) => this.setState({content: event.target.value, chars: event.target.value.length })}
                ></textarea>

                <button
                disabled={
                  this.state.chars > 140 && true
                }
                >Tweet</button>
              
              </form>
            </div>
        )
    }

}

export default NewTweet;