
function fadeOut(element) {
    var op = 1; // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = "none";
        }
        element.style.opacity = op;
        element.style.filter = "alpha(opacity=" + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
}

function fadeIn(element) {
    var op = 0.1; // initial opacity
    element.style.display = "inline-block";
    element.style.opacity = op;
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = "alpha(opacity=" + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

var imgs = ["bren_suit.jpg", "bren_moon.JPG", "bren_snow.jpg"];
var current = 0;

function rotateLeft(element) {
    current -= 1;
    if (current < 0) {
        current = imgs.length - 1;
    }
    element.src = "res/aboutme/" + imgs[current];
}

function rotateRight(element) {
    current += 1;
    if (current > imgs.length - 1) {
        current = 0;
    }
    element.src = "res/aboutme/" + imgs[current];
}

window.onload = function() {
    var bannerDiv = $("div[class='banner']")[0];
    var bannerImg = $("img[id='bannerImg']")[0];
    var leftArrow = $("img[src*='left']")[0];
    var rightArrow = $("img[src*='right']")[0];

    bannerDiv.addEventListener("mouseenter", e => {
        fadeIn(leftArrow);
        fadeIn(rightArrow);
    });
    bannerDiv.addEventListener("mouseleave", e => {
        fadeOut(leftArrow);
        fadeOut(rightArrow);
    });

    leftArrow.addEventListener("click", e => {
        rotateLeft(bannerImg);
    });
    rightArrow.addEventListener("click", e => {
        rotateRight(bannerImg);
    });
}
