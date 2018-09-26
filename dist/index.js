"use strict";

function check_for_vowel() {
	var current_shown = document.querySelector(".show a");
	var n = document.querySelector("span.n");
	var vowels = ["a", "e", "i", "o", "u"];
	if (vowels.indexOf(current_shown.textContent[0]) >= 0) {
		n.style.visibility = "visible";
	}
	else {
		n.style.visibility = "hidden";
	}
}

function next_option() {
	var current_shown = document.querySelectorAll(".show")[0];
	var next_shown = current_shown.nextElementSibling;
	if (next_shown === null) {
		next_shown = document.querySelectorAll(".options li")[0];
	}

	current_shown.classList.add("hide");
	current_shown.classList.remove("show");

	next_shown.classList.remove("hide");
	next_shown.classList.add("show");
	check_for_vowel();
}

function prev_option() {
	var current_shown = document.querySelectorAll(".show")[0];
	var next_shown = current_shown.previousElementSibling;
	if (next_shown === null) {
		var num_options = document.querySelectorAll(".options li").length;
		next_shown = document.querySelectorAll(".options li")[num_options - 1];
	}

	current_shown.classList.add("hide");
	current_shown.classList.remove("show");

	next_shown.classList.remove("hide");
	next_shown.classList.add("show");
	check_for_vowel();
}

(function() {
	// hide all options initially
	var options = document.querySelectorAll(".options li");
	Array.prototype.forEach.call(options, function(el, i){
		el.classList.add("hide");
	});

	// show the first one
	options[0].classList.remove("hide");
	options[0].classList.add("show");
	check_for_vowel();

	// set a timer to choose the next option
	var interval = window.setInterval(next_option, 3000);

	// allow shifting of selections
	document.querySelector(".shifter.next").onclick = function() {
		window.clearInterval(interval);
		next_option();	
	}
	document.querySelector(".shifter.prev").onclick = function() {
		window.clearInterval(interval);
		prev_option();	
	}


})();