import React from "react";
import NewTweet from "./components/NewTweet";
import TweetsList from "./components/TweetsList";
import { callTweetList } from "./lib/api";
import Loading from "./components/Loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      isLoading: false,
      newName: "",
    };
  }

  onNewTweet(tweet) {
    this.setState((prevState) => {
      return { tweets: [tweet, ...prevState.tweets] };
    });
  }

  onChangeName = (name) => {
    this.setState({ newName: name });
  };

  async loadTweets() {
    this.setState({ isLoading: true });
    const tweets = await callTweetList();
    this.setState({ tweets, isLoading: false });
  }

  componentDidMount() {
    this.loadTweets();
    setInterval(() => {
      this.loadTweets();
    }, 10000);
  }

  render() {
    const { tweets, isLoading } = this.state;

    return (
      <div>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <NewTweet
                newName={this.state.newName}
                onNewTweet={(tweet) => {
                  this.onNewTweet(tweet);
                }}
                isLoading={this.state.isLoading}
              />

              {isLoading ? <Loading /> : <div className="helper"></div>}

              <TweetsList tweets={tweets} />
            </Route>
            <Route path="/profile">
              <Profile onChangeName={this.onChangeName} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
