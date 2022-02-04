'use strict';

//Get elements
let container__input = document.querySelector(".container__input");
let container__btn = document.querySelector(".container__btn");
let container__answear = document.querySelector(".container__answear");
let div__btn = document.querySelector(".div__btn");
let div__btn__answear = document.querySelector(".div__btn__answear");

//array with emojis
let icons = ["😙","😃","🙂","😋","😅","😆","😎"];


function checkIfThere(){
	let userAnswear = container__input.value;

    if(icons.indexOf(userAnswear) !== -1){
		container__answear.innerHTML = `I do have it. Thank you!`
    } else{
        container__answear.innerHTML = `It was not here. But now it is. Thanks!`;
		icons.push(userAnswear);
    };
};

div__btn.addEventListener("click", function(){
	div__btn__answear.innerHTML = icons;
});

container__btn.addEventListener("click", checkIfThere);


