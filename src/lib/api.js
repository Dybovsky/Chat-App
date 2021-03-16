import axios from "axios";

const url =
  "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com";

export async function callTweetList() {
  const response = await axios.get(`${url}/tweet`);
  return response.data.tweets;
  //this.setState(() => ({ tweets: data }));
}

export async function postTweet(tweet) {
  const response = await axios.post(`${url}/tweet`);
  if (response.statusCode > 200) {
    throw new Error(response.message);
  }
}
// try {
//   const response = await axios.post(`${url}/tweet`);
// } catch (e) {
//   console.log(`not today: ${response.message}`);
// }
// }
//   if (response.statusCode > 200) {
//     throw new Error("response.data.message");
//   }
// }
