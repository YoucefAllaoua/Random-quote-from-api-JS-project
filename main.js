// the main js code :
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// declaration part
// ######################################################################
// ######################################################################
let quote_text_container = document.querySelector(".qute_text");
let quote_owner_text_container = document.querySelector(".quote_owner");
let btn = document.querySelector("button");
// ######################################################################
// ######################################################################

// get quote function
// ######################################################################
// ######################################################################

let getJoke = function () {
	fetch("https://type.fit/api/quotes")
		.then((data) => data.json())
		.then((data) => {
			// get a rando, index
			let index = getRandomNumbr(data.length);
			// add the qote text to the qote content container
			quote_text_container.innerText = data[index].text;
			// addd the quot author
			quote_owner_text_container.innerText = data[index].author;
		});
};

// ######################################################################
// ######################################################################

// get random numbefr function
// ######################################################################
// ######################################################################

function getRandomNumbr(length) {
	return Math.floor(Math.random() * length);
}

// ######################################################################
// ######################################################################

// window on load function
// ######################################################################
// ######################################################################

window.addEventListener("load", getJoke);

// ######################################################################
// ######################################################################

// btutton onclick function

// ######################################################################
// ######################################################################

btn.addEventListener("click", getJoke);

// ######################################################################
// ######################################################################

// end of the js code

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
