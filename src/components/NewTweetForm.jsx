import React from 'react';

class NewTweetForm extends React.Component{
constructor(props){
  super(props);
  this.state = {
    content: '',
  }
}


handleOnFormSubmit(event){
  event.preventDefault();
 
  if(!this.state.content){
    return;
  }
  // const { tweet } = this.props;
  const newTweet = {
    content: this.state.content,
    id: Date.now(),
    createdDate: Date.now()
  };
  this.props.onNewTweet(newTweet);

}

render(){
  return(
    <div>
      <form onSubmit={event => this.handleOnFormSubmit(event)}>
        <div>
          <textarea
          placeholder='What you have on mind'
          id='content'
          name='content'
          value={this.state.content}
          onChange={event => this.setState({content: event.target.value})}
          ></textarea>
        </div>
        <div>
          <button>Tweet</button>
        </div>


      </form>
    </div>
  )
}
}

export default NewTweetForm;