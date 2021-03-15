import React from "react";
import NewTweet from "./components/NewTweet";
import TweetsList from "./components/TweetsList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }

  onNewTweet(tweet) {
    this.setState((prevState) => {
      return { tweets: [tweet, ...prevState.tweets] };
    });
  }

  componentWillMount() {
    const tweets = JSON.parse(localStorage.getItem("myState"));
    if (localStorage.getItem("myState")) {
      this.setState({ tweets });
    } else {
      this.setState({ tweets: [] });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("myState", JSON.stringify(nextState.tweets));
  }

  render() {
    const { tweets } = this.state;

    return (
      <div>
        <NewTweet
          onNewTweet={(tweet) => {
            this.onNewTweet(tweet);
          }}
        />
        <TweetsList tweets={tweets} />
      </div>
    );
  }
}

export default App;
