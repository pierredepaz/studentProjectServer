var counter = 0;
var minutesUntilSwitchProject = 1;
var timer;

var load = function(){
	setInfo();
	resetTimer();
}

var switchProject = function(){
	counter = (counter+1) % urls.length;
	setInfo();	
	resetTimer();
}

var previousProject = function(){
	counter -= 1;
	if (counter < 0) counter = urls.length-1;
	if (counter >= urls.length) counter = 0;
	setInfo();
	resetTimer();	
}

var resetTimer = function(){
	window.clearInterval(timer);
	//millis * seconds * minutes (minutes is imporant part, change that above)
	timer = setInterval(switchProject, 1000*60*minutesUntilSwitchProject);
}

var setInfo = function(){
	setUrl();
	setText();
}

var setUrl = function(){
	document.getElementById('frame').src = urls[counter];
}

var setText = function(){
	var text = "Decoding Nature Class Work: ";
	text += names[counter];
	document.getElementById('text').innerHTML = text;
}