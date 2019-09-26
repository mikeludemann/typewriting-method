var i = 0, 
	text = "Hello", 
	speed = 50;

function getContext(context, indicator, speed){

	i = indicator;
	text = context;
	speed = speed;

	typeWriting();

}

function typeWriting() {

	if (i < text.length) {

		document.getElementById("demo").innerHTML += text.charAt(i);

		i++;

		setTimeout(typeWriting, speed);

	}

}
