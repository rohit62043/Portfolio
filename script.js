//Smooth-Scroll

var navMenuAnchorTag = document.querySelectorAll(".nav-menu a");

var interval;
for (var i = 0; i < navMenuAnchorTag.length; i++) {
    navMenuAnchorTag[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);

        //interval=setInterval(scrollVertically,20,targetSection);
        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 20);
    });
}

function scrollVertically(targetSection) {
    var targetPos = targetSection.getBoundingClientRect();
    if (targetPos.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}

//Skill-section

var progressBar = document.querySelectorAll(".skills-progress>div");

var skillSection = document.getElementById('progress');

window.addEventListener('scroll', checkScroll);
let animationDone = false;

function initilizeBar() {
    for (let bar of progressBar) {
        bar.style.width = 0 + '%';
    }
}

function fillBar() {
    for (let bar of progressBar) {
        let targetWidth = bar.getAttribute('skill-level');
        let currentWidth = 0;

        let interval = setInterval(function () {
            if (currentWidth > targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 5);
    }
}

function checkScroll() {

    let coordinate = skillSection.getBoundingClientRect();
    if (!animationDone && coordinate.top < window.innerHeight) {
        console.log("visible");
        animationDone = true;
        fillBar();

    }
    else if (coordinate.top > window.innerHeight) {
        animationDone = false;
        initilizeBar();
    }

}

function navMenuOpner() {
    menuWrapper.style.visibility = "visible";
}


let menuButton = document.querySelector(".menu-button");
let menuWrapper = document.querySelector(".menu-wrapper");
let closeButton = document.querySelector(".close-navBar");
menuButton.addEventListener("click", () => {
    menuWrapper.style.visibility = "visible";
    menuButton.style.visibility = "hidden";
});
closeButton.addEventListener("click", () => {
    menuWrapper.style.visibility = "hidden";
    menuButton.style.visibility = "visible";
});
