let tweets = [];
let currentUser = "Lukas";

let render = (array) => {
  let tweetHTML = array
    .map((item, index) => {
      if (item.isliked == false) {
        return `
     <div class="card border-success mb-3">
                <div class="card-header bg-transparent border-success">
                    <img src="https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"/>
                    <div>UserName</div>
                    <div>${moment(item.time).fromNow()}</div>
                </div>
                <div class="card-body text-success">
                  <h5 class="card-title"></h5>
                  <p class="card-text">${item.content}</p>
                </div>
                <div class="card-footer bg-transparent border-success">
                    <i class="fas fa-comment"></i>
                    <i class="fas fa-retweet"></i>
                    <i class="far fa-heart" id="heart"
                    onclick="like(${index})">
                    <span id="heartQty"></span></i>
                    <i class="far fa-edit"></i>
                    <i class="fas fa-trash-alt"></i>
                </div>
              </div>
    `;
      } else {
        return `
          <div class="card border-success mb-3">
                     <div class="card-header bg-transparent border-success">
                         <img src="https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"/>
                         <div>UserName</div>
                         <div>${moment(item.time).fromNow()}</div>
                     </div>
                     <div class="card-body text-success">
                       <h5 class="card-title"></h5>
                       <p class="card-text">${item.content}</p>
                     </div>
                     <div class="card-footer bg-transparent border-success">
                         <i class="fas fa-comment"></i>
                         <i class="fas fa-retweet"></i>
                         <i class="fas fa-heart" id="heart" style="color:red"
                         onclick="like(${index})">
                         <span id="heartQty">1</span></i>
                         <i class="far fa-edit"></i>
                         <i class="fas fa-trash-alt" ></i>
                     </div>
                   </div>
         `;
      }
    })
    .join("");
  document.getElementById("feed").innerHTML = tweetHTML;
  console.log(tweets);
};

let getHashTag = (text) => {};

let postTweet = () => {
  console.log("tweeted");
  let text = document.getElementById("postInput").value;
  let postUser = currentUser;
  let postHashTag = getHashTag(text);
  let tweetObject = {
    user: postUser,
    content: text,
    isliked: false,
    time: moment().format(),
    isRetweet: false,
    hastag: postHashTag,
    comment: [],
  };
  tweets.push(tweetObject);
  console.log(tweets);
  //   below is clearing the input and reset wordcount value
  document.getElementById("postInput").value = "";
  document.getElementById("wordCount").innerHTML = 140;
  //   ---------------------------------------------------
  render(tweets);
};

let renderComment = () => {};

let postComment = () => {
  let commentContent = document.getElementById("");
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
