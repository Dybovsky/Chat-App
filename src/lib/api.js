import axios from "axios";

const url =
  "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com";

export async function callTweetList() {
  const response = await axios.get(`${url}/tweet`);
  return response.data.tweets;
  //this.setState(() => ({ tweets: data }));
}

export async function postTweet(tweet) {
  try {
    const response = await axios.post(`${url}/tweet`, tweet);
    return response;
  } catch (e) {
    alert(`not today: ${e.message}`);
  }
}
// const response = await axios.post(`${url}/tweet`, tweet);
// if (response.statusCode > 200) {
//   throw new Error(response.message);
// }
// }
//   if (response.statusCode > 200) {
//     throw new Error("response.data.message");
//   }
// }
