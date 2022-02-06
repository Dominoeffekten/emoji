'use strict';

//Get elements
let container = document.querySelector(".container");

//array with emojis
let icons = ["🍌","🍌","🍏","🍌"];
//show it on the screen
let display = (text) => {
	container.append(text);
};

//	display(icons);
//	display(icons.length);
/*
	icons.push("🥝"); 
	display(icons);
*/
/*
	icons.forEach(function(item, index) {
		console.log(item, index)
	});
*/

//icons.forEach(element => display(`${element} is a fruit`));

/*
let icon = icons.map(element => {
	return "🍏";
});
display(icon);

*/