// document.addEventListener("DOMContentLoaded",function(){
// })
//setInterval(timerIncrement, 100)
let incrementor = setInterval(secondIncrementor, 1000);

const timer = document.getElementById('counter');
const incrementButton = document.getElementById('plus');
incrementButton.disabled = false;
const decrementButton = document.getElementById('minus');
decrementButton.disabled = false;
const pauseButton = document.getElementById('pause');
const form = document.getElementById('comment-form');
const commentsContainer = document.querySelector('h3');
const likesContainer = document.getElementsByClassName('likes')[0];
const likeButton = document.getElementById('heart');
likeButton.disabled = false;
let counterOn = true;
let likeCount = 0;

function secondIncrementor() {
  if (timer.innerHTML > 59) {
    timer.innerHTML = -1;
  }
  if (counterOn){
      timer.innerHTML++;
  }
  
}

//////uses exact time seconds with Date//////
// function timerIncrement() {
//   const timer = document.getElementById('counter');
//   var d = new Date();
//   var t = d.getSeconds(); //if using d.toLocaleTimeString()
//   timer.innerHTML = t;
// }

function pauseTimer() {
    counterOn = !counterOn;
  !counterOn
    ? clearInterval(incrementor)
    : (incrementor = setInterval(secondIncrementor, 1000));
  counterOn
    ? (pauseButton.innerHTML = 'Pause')
    : (pauseButton.innerHTML = 'Resume');
  counterOn
    ? (incrementButton.disabled = false)
    : (incrementButton.disabled = true);
  counterOn
    ? (decrementButton.disabled = false)
    : (decrementButton.disabled = true);
  counterOn ? (likeButton.disabled = false) : (likeButton.disabled = true);
 
}
function renderComment() {
  event.preventDefault();
  //const unorderelist = document.createElement("ul")
  const comment = form[0].value;
  const listItem = document.createElement('li');
  listItem.innerHTML = `"${comment}"  submitted at: ${timer.innerHTML} seconds`;

  //unorderelist.append(listItem)
  commentsContainer.append(listItem);
  event.target.reset();
}
function renderLikes(e) {
  //if liked is on the list, increment the count
  //otherwise, create list item and set to 1
  const likedNum = timer.innerHTML;
  let like = document.getElementById(likedNum);

  if (!like) {
    let likeListItem = document.createElement('li');
    likeListItem.innerHTML = `${likeCount} at ${likedNum} seconds`;
    likeListItem.id = timer.innerHTML;
    likesContainer.append(likeListItem);
  } else {
    console.log(like.innerHTML);
    let count = parseInt(like.innerHTML) + 1;
    console.log(count);

    like.innerHTML = `${count} at ${likedNum} seconds`;
  }
}
///////////////////event listeners/////////////////////
incrementButton.addEventListener('click', secondIncrementor);
decrementButton.addEventListener('click', () => {
  timer.innerHTML--;
});
pauseButton.addEventListener('click', pauseTimer);
form.addEventListener('submit', renderComment);
likeButton.addEventListener('click', renderLikes);
