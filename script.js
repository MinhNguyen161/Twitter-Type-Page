let tweets = [];
let commentHistory = [];
let currentUser = "Lukas";
let uniqueID = 0;
let commentId = 0;

// lukas suggests function update()
let update = () => {
  render();
  renderCommentSection();
  renderComment();
};

let render = () => {
  tweets.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.time) - new Date(a.time);
  });
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
                    <div class="commentSection" id="commentSection${
                      item.id
                    }"></div>
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
          <div class="commentSection" id="commentSection${item.id}"></div>
           
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
                          <div class="commentSection" id="commentSection${
                            item.id
                          }"></div>
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
                <div class="commentSection" id="commentSection${item.id}"></div>
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
  let parentList = obj.parent;
  let filtered = tweets.filter((item) => parentList.includes(item.id) == false);
  filtered = filtered.filter((item) => item.id !== id);
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

  update(); //changed from render()
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
  update(); // changed from render()
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
  update(); // changed from render()
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

let commentAttribute = (commentObject) => {
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
                        <i class="fas fa-trash-alt" id="commentDeleteButton${commentObject.id}" onclick="removeComment(${commentObject.id})"></i>
                    </span>
                </span>
                <span class="commentSay" id="commentSay${commentObject.id}">${commentObject.content}</span>
            </div>
        </div>
    </div> `;
  return commentString;
};

let commentSectionAttribute = (tweetObject) => {
  let commentSectionString = `
  <div class="commentPosted" id="commentPosted${tweetObject.id}"></div>
  <div class="commentPost">
      <div class="roundFrame"><img class="imgComment" src="https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"/></div>
      <input id="commentInput${tweetObject.id}" class="commentInput" type="text" placeholder="say something">
      <button type="button" class="commentButton" id="commentButton${tweetObject.id}" onclick="postComment(${tweetObject.id})">Send</button>
  </div>
  
  `;
  return commentSectionString;
};

let renderSingleCommentSection = (tweetObject) => {
  let commentSectionString = commentSectionAttribute(tweetObject);
  document.getElementById(
    `commentSection${tweetObject.id}`
  ).innerHTML = commentSectionString;
};

let renderCommentSection = () => {
  for (tweetObject of tweets) {
    renderSingleCommentSection(tweetObject);
  }
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

let addCommentToHistory = (commentObject) => {
  commentHistory.push(commentObject);
};

let postComment = (tweetId) => {
  let tweetObj = tweets[tweetFinder(tweetId)];
  let commentObject = createCommentObject();
  addCommentToHistory(commentObject);
  let commentContent = document.getElementById(`commentInput${tweetObj.id}`)
    .value;
  commentObject.content = commentContent;

  tweetObj.comment.push(commentObject);
  commentObject.inWhatTweet = tweetObj;
  let commentString = commentAttribute(commentObject);

  document.getElementById(
    `commentPosted${tweetObj.id}`
  ).innerHTML += commentString;
};

let renderSingleComment = (tweetObject, commentObject) => {
  let commentString = commentAttribute(commentObject);
  document.getElementById(
    `commentPosted${tweetObject.id}`
  ).innerHTML += commentString;
};
let renderComment = () => {
  for (tweetObject of tweets) {
    let commentsList = tweetObject.comment;
    for (commentObject of commentsList) {
      renderSingleComment(tweetObject, commentObject);
    }
  }
};

let removeComment = (commentId) => {
  for (commentObject of commentHistory) {
    if (commentObject.id == commentId) {
      let containerTweet = commentObject.inWhatTweet;
      let listComment = containerTweet.comment;
      console.log("list of comment", listComment);
      let remove = listComment.filter((commentObject) => {
        return commentObject.id != commentId;
      });
      containerTweet.comment = remove;
    }
  }
  update();
};

// Event Listener for Comment section

//----------------------------------------
