let tweets = [];
let currentUser = "Lukas";
let uniqueID = 0;

let render = () => {
<<<<<<< HEAD
  tweets.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.time) - new Date(a.time);
  });
  console.log("list", tweets);
  let tweetHTML = tweets.map((item) => {
    if (!item.isRetweet) {
      return `
                <div class="card border-success mb-3">
                    <div class="card-header bg-transparent border-success">
                        <img src="https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"/>
                        <div>${item.user}</div>
                        <div>${moment(item.time).fromNow()}</div>
                    </div>
                    <div class="card-body text-success">
                    <h5 class="card-title"></h5>
                    <p class="card-text">${item.content}</p>
                    </div>
                    <div class="card-footer bg-transparent border-success">
                            <i onclick="postTweet()" class="fas fa-comment"></i>    
                            <i onclick="Retweet(${
                              item.id
                            })" class="fas fa-retweet"></i>
                            <i onclick="postTweet()" class="far fa-heart"> ${
                              item.likes
                            }</i>
                            <i onclick="postTweet()" class="far fa-edit"></i>
                            <i onclick="deleteTweet(${
                              item.id
                            })" class="far fa-edit"></i>


                    
                    </div>
                </div>
            `;
    } else {
      //change the format here to a retweet post
      return `
      <div class="card border-success mb-3">
          <div class="card-header bg-transparent border-success">
              <img src="https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"/>
              <div>${item.user}</div>
              <div>${moment(item.time).fromNow()}</div>
          </div>
          <div class="card-body text-success">
          <h5 class="card-title"></h5>
          <p class="card-text">${item.content}</p>
          </div>
          <div class="card-footer bg-transparent border-success">
                  <i onclick="postTweet()" class="fas fa-comment"></i>    
                  <i onclick="Retweet(${item.id})" class="fas fa-retweet"></i>
                  <i onclick="postTweet()" class="far fa-heart"> ${
                    item.likes
                  }</i>
                  <i onclick="postTweet()" class="far fa-edit"></i>
                  <i onclick="deleteTweet(${item.id})" class="far fa-edit"></i>


          
          </div>
      </div>
  `;
    }
  });
  document.getElementById("feed").innerHTML = tweetHTML;
};
=======
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
>>>>>>> da5bd3a7e4239d9d1f9f74da2ccc3cf1b14af301

let getHashTag = (text) => {};

let deleteTweet = (id) => {
  let obj = tweets.find((item) => item.id == id);
  console.log("ooo", obj);
  let parentList = obj.parent;

  let filtered = tweets.filter((item) => parentList.includes(item.id) == false);
  filtered = filtered.filter((item) => item.id !== id);

  console.log("way", filtered);

  tweets = filtered;
  //   let index = tweetFinder(id);

  //   console.log("deleteobj", tweets[index]);

  //   parentLength = tweets[index].parent.length;
  //   console.log("parentarray", tweets[index].parent);

  //   if (parentLength > 0) {
  //     for (let i = 0; i < parentLength; i++) {
  //       let currentTweet = tweets[index];
  //       console.log("current", currentTweet);

  //       [3]

  //       console.log("hoho", currentTweet.parent[i]);
  //       sonIndex = tweetFinder(tweets[index].parent[i]);
  //       tweets.splice(sonIndex, 1);
  //     }
  //   }

  render();
};

let postTweet = () => {
<<<<<<< HEAD
  console.log("tweeted");
  uniqueID++;
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
    comment: [],
    id: uniqueID,
    parent: [],
  };
  tweets.push(tweetObject);
  render();
};
let Retweet = (id) => {
  console.log("Retweeted");
  uniqueID++;
  tweets[tweetFinder(id)].parent.push(uniqueID);
  let postUser = currentUser;
  //   let postHashTag = getHashTag(text);
  let retweetObject = {
    user: postUser,
    content: "Retweet",
    likes: 0,
    time: Date.now(),
    isRetweet: true,
    hastag: "postHashTag",
    comment: [],
    id: uniqueID,
    parent: [],
  };
  tweets.push(retweetObject);
  render();
};
let tweetFinder = (id) => {
  return tweets.findIndex((item) => item.id === id);
};

let renderComment = () => {};

let postComment = () => {
  let commentContent = document.getElementById("");
};
=======
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
>>>>>>> da5bd3a7e4239d9d1f9f74da2ccc3cf1b14af301

document.getElementById("wordCount").innerHTML = 140;
let count = () => {
  let input = document.getElementById("postInput").value;
  let inputLetter = input.split("");
  document.getElementById("wordCount").innerHTML = 140 - inputLetter.length;
};
