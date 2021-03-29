import React from "react";
import NewTweet from "./components/NewTweet";
import TweetsList from "./components/TweetsList";
//import { callTweetList } from "./lib/api";
import Loading from "./components/Loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import TweetsContext from "./components/TweetsContext";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrLAVxwPos73UKdpbBB2Z2wybqOWwf3tc",
  authDomain: "tweeter-72142.firebaseapp.com",
  projectId: "tweeter-72142",
  storageBucket: "tweeter-72142.appspot.com",
  messagingSenderId: "171227249964",
  appId: "1:171227249964:web:67f4771806b4f2cff84089",
  measurementId: "G-QY5X9MMD3D",
};
firebase.initializeApp(firebaseConfig);

class App extends React.Component {
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

export default App;
