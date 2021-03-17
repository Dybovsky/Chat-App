import React from "react";
import NewTweet from "./components/NewTweet";
import TweetsList from "./components/TweetsList";
import { callTweetList } from "./lib/api";
import Loading from "./components/Loading";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      isLoading: false,
    };
  }

  onNewTweet(tweet) {
    this.setState((prevState) => {
      return { tweets: [tweet, ...prevState.tweets] };
    });
  }

  async loadTweets() {
    this.setState({ isLoading: true });
    const tweets = await callTweetList();
    this.setState({ tweets, isLoading: false });
  }

  componentDidMount() {
    this.loadTweets();
    setInterval(() => {
      this.loadTweets();
    }, 5000);
  }

  render() {
    const { tweets, isLoading } = this.state;

    return (
      <div>
        <NewTweet
          onNewTweet={(tweet) => {
            this.onNewTweet(tweet);
          }}
          isLoading={this.state.isLoading}
        />

        {isLoading && <Loading />}

        <TweetsList tweets={tweets} />
      </div>
    );
  }
}

export default App;
//  </div>
//       {item.title && <h3>{item.title}</h3>}
//       <div>
