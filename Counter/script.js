// var counter = document.querySelector(".counter");
// var followers = document.querySelector(".followers");

// let count = 1;

// setInterval(() => {
//     if(count <= 1000){
//         counter.innerText = count;
//         count++;
//     }
// }, 1);

// setTimeout(() => {
//     followers.innerText = "Followers on Instagram!"
// }, 8000);


// var counter = document.getElementsByClassName("counter")[0];
// var followers = document.getElementsByClassName("followers")[0];

// var counter = document.getElementsByTagName("h1")[0];
// var followers = document.getElementsByTagName("p")[0];

var counter = document.getElementById("count");
var followers = document.getElementById("text");

let count = 1;

setInterval(() => {
    if(count <= 1000){
        counter.innerText = count;
        count++;
    }
}, 0.1);

setTimeout(() => {
    followers.innerText = "Followers on Instagram!"
}, 5000);