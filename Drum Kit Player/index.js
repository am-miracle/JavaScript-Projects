
// event on buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", (x) => {
        var buttonInnerHTML = x.path[0].innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimate(buttonInnerHTML)
    });
}
// event on the keyboard
document.addEventListener("keydown", (event) => {
    makeSound(event.key)
    buttonAnimate(event.key)
});

function makeSound(key){

    switch (key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3').play();
            break;
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3').play();
            break;
        case "s":
            var snare = new Audio('sounds/snare.mp3').play();
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3').play();
            break;
        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3').play();
            break;
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3').play();
            break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3').play();
            break;
    
        default:
        break;
    }
}

function buttonAnimate(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}