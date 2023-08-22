let drumButtons = document.querySelectorAll(".drum");

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

for (let i = 0; i <= drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {
        // this.style.color = "red";   // this => get the identity of the clicked button.
        let buttonClicked = this.textContent;

        makeSound(buttonClicked);
        buttonAnimation(buttonClicked);
    });
}

function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("./assets/sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            let tom2 = new Audio("./assets/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("./assets/sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("./assets/sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare = new Audio("./assets/sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash = new Audio("./assets/sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            let kick = new Audio("./assets/sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log("default triggered");
    }
}

function buttonAnimation(currentKey) {
    let activeKey = document.querySelector(`.${currentKey}-btn`);

    activeKey.classList.add("pressed");

    setTimeout(function () {
        activeKey.classList.remove("pressed");
    }, 100);
}