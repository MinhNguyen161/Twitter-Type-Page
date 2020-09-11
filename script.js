let tweets = [];

let render = () => {
  return;
};
render();

let getHashTag = (text) => {};

let postTweet = () => {
  let text = document.getElementById("postInput").value;
  let postUser = currentUser;
  let postHashTag = getHashTag(text);
  let tweetObject = {
    user: postUser,
    content: text,
    likes: 0,
    time: "",
    isExist: true,
    hastag: postHashTag,
    comment: [],
  };
  tweets.push(tweetObject);
  render();
};

let renderComment = () => {};

let postComment = () => {
  let commentContent = document.getElementById("");
};

document.getElementById("wordCount").innerHTML = 140;
let count = () => {
  let input = document.getElementById("postInput").value;
  let inputLetter = input.split("");
  document.getElementById("wordCount").innerHTML = 140 - inputLetter.length;
};
