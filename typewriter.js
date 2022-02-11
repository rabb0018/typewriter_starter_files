"use strict";

let maxNumberOfIterations;
let iterator;
const txt = document.getElementById("typewriter");
const gettingWords = txt.textContent;



initLoop();


function initLoop(){

    maxNumberOfIterations = gettingWords.length;
    iterator = 0;
    txt.textContent = "";

    loop();

}

function loop() {
    console.log("loop", gettingWords[iterator]);
    txt.textContent += gettingWords[iterator];
    iterator++; 

    if (iterator <= maxNumberOfIterations) {
    setTimeout(loop, 300);
    }else {
        initLoop();
    }
    


//  if (iterator === (maxNumberOfIterations-1)) {
//        initLoop();
//      }

 }



