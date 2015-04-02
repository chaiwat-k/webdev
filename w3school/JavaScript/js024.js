// js024_jsTiming UI logic
// Depends on jsMainLib.js

function printLine(line){
	printLineOnDiv("printDiv",line);
}

function init(){
	var windowBox = document.getElementById("windowBox");
	var intvl = setInterval(function(){
		var topStyle = windowBox.style.top;
		var t = Number(topStyle.substr(0,topStyle.length - 2));
		
		if(t > 300){
			clearInterval(intvl);
			return;
		}
		
		t += 10;		
		windowBox.style.top = t + 'px';
	}, 1 * 1000);
}

window.onload = init;