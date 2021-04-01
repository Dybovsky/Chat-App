import React from "react";
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
import Loading from "./Loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Profile from "./Profile";
import TweetsContext from "./TweetsContext";
import firebase from "firebase/app";
import "firebase/firestore";

class TweetRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      isLoading: false,
      newName: "",
      unsubscribe: null,
    };
  }

  async onNewTweet(tweet) {
    this.setState({ isLoading: true });
    await firebase.firestore().collection("tweets").add(tweet);
    this.setState({ isLoading: false });
  }

  onChangeName = (name) => {
    this.setState({ newName: name });
  };

  loadTweets() {
    const unsubscribe = firebase
      .firestore()
      .collection("tweets")
      .orderBy("date", "desc")
      .onSnapshot((snap) => {
        const tweets = snap.docs.map((doc) => ({
          ...doc.data(),
          // , id: doc.id
        }));
        this.setState({ tweets });
      });

    this.setState({ unsubscribe });
  }

  componentDidMount() {
    this.loadTweets();
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }

  render() {
    const { isLoading } = this.state;

    return (
      <TweetsContext.Provider value={this.state}>
        <div>
          <Router>
            <NavBar></NavBar>
            <Switch>
              <Route exact path="/">
                <NewTweet
                  onNewTweet={(tweet) => {
                    this.onNewTweet(tweet);
                  }}
                  //isLoading={this.state.isLoading}
                />

                {isLoading ? <Loading /> : <div className="helper"></div>}

                <TweetsList />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
          </Router>
        </div>
      </TweetsContext.Provider>
    );
  }
}

export default TweetRoom;
