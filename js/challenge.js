const counter = document.getElementById("counter")
const likesObj = {}

const timer = setInterval(function() {
    counter.innerHTML++}, 1000
);

const minusButton = document.getElementById("minus");
minusButton.addEventListener("click", function(event) {
    counter.innerHTML--
});

const plusButton = document.getElementById("plus");
plusButton.addEventListener("click", function(event) {
    counter.innerHTML++
});

const likeButton = document.getElementById("heart");
likeButton.addEventListener("click", function(event) {
    const likeList = document.getElementsByClassName("likes")[0]
    const newLike = document.createElement("li")
    const number = counter.innerHTML
    if (likesObj[number])
        likesObj[number]++
    else
        likesObj[number] = 1
    newLike.textContent = `${counter.innerHTML} has ${likesObj[number]} like!`
    likeList.appendChild(newLike)
});

const commentsList = document.getElementById("list");
const commentsForm = document.getElementById("comment-form");
commentsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const userInputField = event.target.querySelector("#comment-input");
    const userInputString = userInputField.value;
    const newComment = document.createElement("li");
    newComment.textContent = userInputString;
    commentsList.appendChild(newComment);
    commentsForm.reset();
});

const pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", function() {
    if (pauseButton.innerText === "pause") {
        clearInterval(timer)
        minusButton.disabled = true;
        plusButton.disabled = true;
        likeButton.disabled = true;
        pauseButton.innerText = "resume";
    }
    else {
        minusButton.disabled = false;
        plusButton.disabled = false;
        likeButton.disabled = false;
        pauseButton.innerText = "pause";
        const timer = setInterval(function() {
            counter.innerHTML++ 
        }, 1000);
    }
})