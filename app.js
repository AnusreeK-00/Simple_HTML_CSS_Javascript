var images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
];
var emotion = [
    "happy",
    "sad", 
    "angry",
    "relieved",
    "tensed"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var para = document.getElementById("para");
var i = 0;
btn.addEventListener("click", function(){
    i = (i+1)%5;
    img.src = images[i];
    para.innerHTML = "I feel "+emotion[i]
});