'use strict';
let container = document.querySelector(".container");

//array with emojis
let icons = ["🍌","🍌","🍏","🍌"];

//show it on the screen
let display = (text) => {
	container.append(text);
};

//show the icons on the screen
display(icons);