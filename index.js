//BUTTON PRESSES
for(var i=0; i <document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        makesound(this.innerHTML);

        buttonAnimation(this.innerHTML)
    });
}

//KEYBOARD PRESSES
document.addEventListener("keypress", function(event) {
    makesound(event.key);

    buttonAnimation(event.key);
});

//FUNCTION COMBINING BOTH
function makesound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        default:
            console.log("buttonInnerHTML");
            break;
    }
};

//BUTTON ANIMATION
function buttonAnimation(Currentkey){
    var active = document.querySelector("." + Currentkey);
    active.classList.add("pressed");

    setTimeout(function(){
        active.classList.remove("pressed");
    },100);


};















  