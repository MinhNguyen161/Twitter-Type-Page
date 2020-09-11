let tweets = [];
let currentUser = "Lukas"

let render = () => {
    let tweetHTML = tweets.map((item)=>`
     <div class="card border-success mb-3">
                <div class="card-header bg-transparent border-success">
                    <img src="https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"/>
                    <div>UserName</div>
                    <div>time post</div>
                </div>
                <div class="card-body text-success">
                  <h5 class="card-title"></h5>
                  <p class="card-text">${item.content}</p>
                </div>
                <div class="card-footer bg-transparent border-success">
                    <i class="fas fa-comment"></i>
                    <i class="fas fa-retweet"></i>
                    <i class="far fa-heart"></i>
                    <i class="far fa-edit"></i>
                </div>
              </div>
    `) 
    document.getElementById("feed").innerHTML = tweetHTML
    console.log(tweets)
}   

let getHashTag = (text) => {};

let postTweet = () => {
    console.log("tweeted")
    let text = document.getElementById("postInput").value;
    let postUser = currentUser;
    let postHashTag = getHashTag(text);
    let tweetObject = {
        user: postUser,
        content: text,
        likes: 0,
        time: Date.now(),
        isRetweet: false,
        hastag: postHashTag,
        comment: [] 
    };
    tweets.push(tweetObject);
    console.log(tweets)
    render();
}

let renderComment = () => {

}

let postComment = () => {
    let commentContent = document.getElementById("")
}

document.getElementById("wordCount").innerHTML = 140;
let count = () => {
  let input = document.getElementById("postInput").value;
  let inputLetter = input.split("");
  document.getElementById("wordCount").innerHTML = 140 - inputLetter.length;
};
