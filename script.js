let tweets = [];
let currentUser = "Lukas";
let uniqueID = 0;
let commentId = 0;

let render = () => {
  tweets.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.time) - new Date(a.time);
  });
  console.log("list", tweets);
  let tweetHTML = tweets
    .map((item, index) => {
      if (item.isliked == false) {
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
                            <i  class="fas fa-comment" onclick="toggleCommentSection(${
                              item.id
                            })"></i>    
                            <i onclick="Retweet(${
                              item.id
                            })" class="fas fa-retweet"></i>
                            <i class="far fa-heart" id="heart" onclick="like(${index})"> </i>                           
                            <i onclick="postTweet()" class="far fa-edit"></i>
                            <i onclick="deleteTweet(${
                              item.id
                            })" class="far fa-trash-alt"></i>
                    </div>
                    <div class="commentSection" id="commentSection${item.id}">
                     <div class="commentPosted" id="commentPosted${item.id}">
                     
                     
                     </div>
                     <div class="commentPost">
                         <div class="roundFrame"><img class="imgComment" src="https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"/></div>
                         <input id="commentInput${
                           item.id
                         }" class="commentInput" type="text" placeholder="say something">
                         <button type="button" class="commentButton" id="commentButton${
                           item.id
                         }" onclick="renderComment(${item.id})">Send</button>
                     </div>
                 </div>
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
                  <i  class="fas fa-comment"></i>    
                  <i onclick="Retweet(${item.id})" class="fas fa-retweet"></i>
                  <i class="far fa-heart" id="heart"onclick="like(${index})"> </i>      
                  <i onclick="postTweet()" class="far fa-edit"></i>
                  <i onclick="deleteTweet(${
                    item.id
                  })" class="far fa-trash-alt"></i>
          </div>
          <div class="commentSection" hidden></div>
           
      </div>
  `;
        }
      } else {
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
                                  <i class="fas fa-heart" id="heart" style="color:red"
                                  onclick="like(${index})">
                                  <span id="heartQty">1</span></i>
                                    <i onclick="postTweet()" class="far fa-edit"></i>
                                  <i onclick="deleteTweet(${
                                    item.id
                                  })" class="far fa-trash-alt"></i>
                          </div>
                          <div class="commentSection"> </div>
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
                        <i onclick="Retweet(${
                          item.id
                        })" class="fas fa-retweet"></i>
                        <i class="fas fa-heart" id="heart" style="color:red"
                        onclick="like(${index})">
                        <span id="heartQty">1</span></i>
                        <i onclick="postTweet()" class="far fa-edit"></i>
                        <i onclick="deleteTweet(${
                          item.id
                        })" class="far fa-trash-alt"></i>
      
      
                
                </div>
                <div class="commentSection" hidden> </div>
            </div>
        `;
        }
      }
    })
    .join("");

  document.getElementById("feed").innerHTML = tweetHTML;
};

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
  console.log("tweeted");
  uniqueID++;
  let text = document.getElementById("postInput").value;
  let postUser = currentUser;
  let postHashTag = getHashTag(text);
  let tweetObject = {
    user: postUser,
    content: text,
    isliked: false,
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
    isliked: false,
    time: Date.now(),
    isRetweet: true,
    hastag: "postHashTag",
    comment: [],
    id: uniqueID,
    parent: [],
  };
  tweets.push(retweetObject);
  //   below is clearing the input and reset wordcount value
  document.getElementById("postInput").value = "";
  document.getElementById("wordCount").innerHTML = 140;
  //   ---------------------------------------------------
  render();
};
let tweetFinder = (id) => {
  return tweets.findIndex((item) => item.id === id);
};

// below is word count function
document.getElementById("wordCount").innerHTML = 140;
let count = () => {
  let input = document.getElementById("postInput").value;
  let inputLetter = input.split("");
  document.getElementById("wordCount").innerHTML = 140 - inputLetter.length;
};
// ---------------------------------------------------

// below is for like function
let like = (index) => {
  tweets[index].isliked = !tweets[index].isliked;
  console.log(tweets[index].isliked);
  render(tweets);
};
// ---------------------------------------------------

//below is the script for COMMENT SECTION by Lukas

let renderCommentSection = (index) => {
  let stringCommentSection = `
<div class="commentPosted"></div>
<div class="commentPost">
    <div class="roundFrame"><img class="imgComment" src= "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png%22%3E"></div>
    <input class="commentInput" type="text" placeholder="say something">
</div>
    `;
  document.getElementsByClassName(
    "commentSection"
  ).innerHTML = stringCommentSection;
};

let toggleCommentSection = (tweetId) => {
  let commentSectionId = document.getElementById(`commentSection${tweetId}`);
  if (commentSectionId.style.display === "none") {
    commentSectionId.style.display = "block";
  } else {
    commentSectionId.style.display = "none";
  }
};

let createCommentObject = () => {
  let commentObject = {
    id: commentId,
    user: currentUser,
    content: "",
  };
  commentId++;
  return commentObject;
};

let renderComment = (tweetId) => {
console.log("begin");
  let tweetObj = tweets[tweetFinder(tweetId)];
  let commentObject = createCommentObject();
  let commentContent = document.getElementById(`commentInput${tweetObj.id}`).value;
  commentObject.content = commentContent;
  tweetObj.comment.push(commentObject);
  let commentString = `<div class="comment" id="comment${commentObject.id}">
        <div class="commentContent">
            <div class="roundFrame">
                <img class="imgComment" src="https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"/>
            </div>
            <div class="commentText">
                <span class="commentHeader">
                    <span class="commentUserName"><strong>${commentObject.user}</strong></span>
                    <span class="commentSetting">
                        <i class="far fa-edit" ></i>
                        <i class="fas fa-trash-alt" ></i>
                    </span>
                </span>
                <span class="commentSay" id="commentSay${commentObject.id}">${commentContent}</span>
            </div>
        </div>
    </div> `;

  document.getElementById(
    `commentPosted${tweetObj.id}`
  ).innerHTML += commentString;
  console.log("The end of comment render fucntion");
};

// Event Listener for Comment section

//----------------------------------------
