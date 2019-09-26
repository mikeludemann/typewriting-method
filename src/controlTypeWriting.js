var text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
var delay = 50;
var currentChar = 1;
var destination = "[none]";
var typeTimer = null;
var typing = true;

function type(tick){

	var dest = document.getElementById(destination);

	if (!typing) return;

	if (dest)	{

		dest.innerHTML=text.substr(0, currentChar)+"_";
		currentChar++;

		if (currentChar > text.length) {

			currentChar = 1;
			tick = 5000;

		}

		typeTimer = setTimeout(function() { 
      
      type(delay); 
    
    }, tick);

	}

}

function startTyping(textParam, delayParam, destinationParam){

	if (currentChar > 1) {

		typing = true;

		return type();

	}

	text = textParam;
	delay = delayParam;
	currentChar = 1;
  destination = destinationParam;
  
	type(delay);

}

function pauseTyping(){

	typing = false;

}

document.getElementById("XXX").addEventListener("click", function(){

	if ( this.classList.contains('play') ) {

		startTyping(text, 50, "ElementWriting");

		this.setAttribute('class', 'pause');
		this.innerHTML = "Pause";

	} else {

		pauseTyping();

		this.setAttribute('class', 'play');
		this.innerHTML = "Play";

	}

});
