import React from "react";
import NewTweetForm from "./components/NewTweetForm";
import TweetList from "./components/TweetList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }

  handleOnNewTweet(newTweet) {
    this.setState((prevState) => {
      return { tweets: [...prevState.tweets, newTweet] };
    });
  }

  render() {
    const { tweets } = this.state;

    return (
      <div>
        <NewTweetForm
          onNewTweet={(newTweet) => {
            this.handleOnNewTweet(newTweet);
          }}
        />
        <TweetList tweets={tweets}></TweetList>
      </div>
    );
  }
}
export default App;
