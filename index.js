//Mayheptad solution

// select all the drum on the page 
let allDrum = document.querySelectorAll(".drum");

// add event listener to each of the drums
// check and determine the pressed drum and play the corresponding sound

allDrum.forEach((element) => element.addEventListener("click", function (event) {
        switch (element.innerHTML) {
            case "w":
                playSound("sounds/tom-1.mp3");
                addAndRemoveOpac(event.target);
                break;
            case "a":
                playSound("sounds/tom-2.mp3");
                addAndRemoveOpac(event.target);
                break;
            case "s":
                playSound("sounds/tom-3.mp3");
                addAndRemoveOpac(event.target);
                break;
            case "d":
                playSound("sounds/tom-4.mp3");
                addAndRemoveOpac(event.target);
                break;
            case "j":
                playSound("sounds/snare.mp3");
                addAndRemoveOpac(event.target);
                break;
            case "k":
                playSound("sounds/crash.mp3");
                addAndRemoveOpac(event.target);
                break;
            case "l":
                playSound("sounds/kick-bass.mp3");
                addAndRemoveOpac(event.target);
                break;
        }
    }

));

function playSound(fileToPlay) {
    const song = new Audio(fileToPlay);
    song.play();
}


function addAndRemoveOpac(element) {
    element.classList.add('opac');
    setTimeout(_ => element.classList.remove('opac'), 150);
}

// add eventListener to the body element
// whenever a key that correspond to the drum innertext got cliked, we play the respective sound

document.body.addEventListener("keypress", function (event) {
    switch (event.key) {
        case "w":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            addAndRemoveOpac(document.getElementsByClassName(event.key)[0]);
            break;
        case "a":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            addAndRemoveOpac(document.getElementsByClassName(event.key)[0]);
            break;
        case "s":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            addAndRemoveOpac(document.getElementsByClassName(event.key)[0]);
            break;
        case "d":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            addAndRemoveOpac(document.getElementsByClassName(event.key)[0]);
            break;
        case "j":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
            addAndRemoveOpac(document.getElementsByClassName(event.key)[0]);
            break;
        case "k":
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
            addAndRemoveOpac(document.getElementsByClassName(event.key)[0]);
            break;
        case "l":
            const kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            addAndRemoveOpac(document.getElementsByClassName(event.key)[0]);
            break;
    }
});



//Angela solution



// const allDrum = document.querySelectorAll(".drum");
//     allDrum.forEach( (element) => {
//         element.onclick = (event) => {
//             addAndRemoveOpac(event.target)
//            makeSound(event.target.innerHTML) 
//         }
//             }   
//     )

//     function addAndRemoveOpac (x) {
//         x.classList.add("opac")
//         setTimeout( () => {
//             x.classList.remove("opac");
//         }, 150)
//             }


//     const body =  document.body;
//     body.onkeypress = (event) => {
//         const classToAdd = document.querySelector("." + event.key) 
//        makeSound(event.key);
//        addAndRemoveOpac(classToAdd);
//     }

//            function makeSound (evt) {
//            switch(evt){
//                case "w" : const tom1 = new Audio("sounds/tom-1.mp3");
//                tom1.play();  
//                break;
//                case "a" : const tom2 = new Audio("sounds/tom-2.mp3");
//                tom2.play();
//                break;
//                case "s" : const tom3 = new Audio("sounds/tom-3.mp3");
//                tom3.play();
//                break;
//                case "d" : const tom4 = new Audio("sounds/tom-4.mp3");
//                tom4.play();
//                break;
//                case "j" : const snare = new Audio("sounds/snare.mp3");
//                snare.play();
//                break;
//                case "k" : const crash = new Audio("sounds/crash.mp3");
//                crash.play();
//                break;
//                case "l" : const kick = new Audio("sounds/kick-bass.mp3");
//                kick.play();
//                break;
//                default : console.log(evt.target.innerHTML);
//            }
//        }