"use strict";

var indicator1 = document.getElementById("indicator1");
var clock = document.getElementById("clock");
var background = document.getElementById("background");

function updateClock() {
	var date = new Date;

	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	var angle = ((hours + (minutes + seconds / 60) / 60) / 24) * 360 + 180;

	indicator1.style.transform="rotate(" + angle +  "deg)";	
	background.style.transform="rotate(" + (-angle + 180) +  "deg)";	


}

updateClock();
setInterval(updateClock, 10000);


var tickTemplate = document.getElementById("tickTemplate").innerHTML.trim();

function createTick(angle, width, height) {
	var templateElement = document.createElement("template");
	templateElement.innerHTML = tickTemplate;

	var tick = templateElement.content.firstChild;

	tick.style.transform = "rotate(" + angle + "deg)"
	if (typeof width !== undefined) {
		tick.getElementsByClassName("tick")[0].style.width = width + "px";
	}
	if (typeof height !== undefined) {
		tick.getElementsByClassName("tick")[0].style.height = height + "px";
	}
	clock.appendChild(tick);
}

let steps = 4;

for (let i = 0; i < 24 * steps; ++i) {
	var angle = i / steps * 360 / 24;
	if (i % (steps * 6) == 0) {
		createTick(angle, 8, 10);
	}
	else if (i % steps == 0) {
		createTick(angle, 6, 7)	
	}
	else {
		createTick(angle)
	}
}

let starWrapper = document.getElementById("starWrapper");

function createStars() {
	starWrapper.innerHTML = "";
	for (let i = 0; i < 100; ++i) {
		let div = document.createElement("div");
		div.classList.add("star");
		div.style.left = "100px";
		div.style.left = Math.random() * window.innerWidth + "px";
		div.style.top = Math.random() * window.innerHeight + "px";
		if (i < 10) {
			div.style.width = "3px";
			div.style.height = "3px";
		}
		starWrapper.appendChild(div);
	}
}

createStars();

window.addEventListener("resize", function() {
	createStars();
});

