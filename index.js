"use strict";

(function() {
	var list_els = document.querySelectorAll(".selector li");
	Array.prototype.forEach.call(list_els, function(el, i){
		el.classList.add("hide");
	});
	list_els[0].classList.remove("hide");
	list_els[0].classList.add("show");

	window.setInterval(function(options) {
		var current_shown = document.querySelector(".show");
		var next_shown = current_shown.nextElementSibling;
		if (next_shown === null) {
			next_shown = document.querySelectorAll(".selector li")[0];
		}

		current_shown.classList.remove("show");
		current_shown.classList.add("hide");

		next_shown.classList.remove("hide");
		next_shown.classList.add("show");
	}, 5000, list_els);

})();