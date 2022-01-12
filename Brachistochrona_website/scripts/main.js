const myButton = document.getElementById("animation_b");
const divtag = document.querySelector(".myhearts");
let l = -1;
divtag.style.margin = "0";

let myhearts = [];
let k = 1;
function createHeart() {
  if (l === 1) {
    if (myhearts.length >= 5) {
      divtag.removeChild(myhearts[myhearts.length - 5]);
      myhearts.shift(myhearts[myhearts.length - 5]);
    }

    let myheart = document.createElement("i");
    //myheart.style.animationIterationCount = 'one';
    myheart.setAttribute("class", "fa fa-heart");
    myheart.style.position = "fixed";
    myheart.style.bottom = "-10px";
    myheart.style.color = "rgb(158, 128, 207)";
    myheart.style.animation = "Effect";
    myheart.style.animationDuration = "1.5s";
    

    if (k === 1) {
      myheart.style.left = (Math.random() * 10).toString() + "%";
    } else {
      myheart.style.right = (Math.random() * 10).toString() + "%";
    }
    k *= -1;
    divtag.appendChild(myheart);
    myhearts.push(myheart);
    setTimeout(createHeart, 150);
  } else {
    setTimeout(() => {
      for (let c = myhearts.length - 1; c >= myhearts.length - 5; c--) {
        divtag.removeChild(myhearts[c]);
      }
      myhearts = [];
    }, 750);
  }
}

function condheart() {
  l *= -1;
  if (l === 1) {
    myButton.textContent = "End";
    createHeart();
  } else {
    myButton.textContent = "Hearts";
  }
}
myButton.addEventListener("click", condheart);
