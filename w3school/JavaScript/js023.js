// js023_jsWindow UI logic
// Depends on jsMainLib.js

function printLine(line){
	printLineOnDiv("printDiv",line);
}

function handleWindowResize(){

	// Window size
	var w = window.innerWidth 
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	
	var h = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	
	var text = "(" + w + ", " + h + ")";
	var windowBox = document.getElementById("windowBox");
	if(windowBox == null){
		console.log(text);
		return;
	}
	windowBox.innerHTML = text;
	if(w >= 10) windowBox.style.width = w/2 + 'px';
	if(h >= 10) windowBox.style.height = h/2 + 'px';
	
}

function init(){
	window.onresize = handleWindowResize;
	var alertBtn = document.getElementById("alertBtn");
	var confirmBtn = document.getElementById("confirmBtn");
	
	alertBtn.onclick = function(){
		alert("Hello!\nYou have pressed alert button!");
	};
	
	confirmBtn.onclick = function(){
		var result = confirm("Press a button!");
		if(result) printLine("You pressed OK!");
		else printLine("You pressed Cancel!");
	};
	
	printLine("Screen Info");
	printLine("screen.width => " + screen.width);
	printLine("screen.height => " + screen.height);
	printLine("screen.availWidth => " + screen.availWidth);
	printLine("screen.availHeight => " + screen.availHeight);
	printLine("screen.colorDepth => " + screen.colorDepth);
	printLine("screen.pixelDepth => " + screen.pixelDepth);
	
	printLine("Location Info");
	printLine("location.href => " + location.href);
	printLine("location.hostname => " + location.hostname);
	printLine("location.pathname => " + location.pathname);
	printLine("location.protocol => " + location.protocol);
	
	printLine("Navigator Info");
	printLine("navigator.appName => " + navigator.appName);
	printLine("navigator.appCodeName => " + navigator.appCodeName);
	printLine("navigator.platform => " + navigator.platform);
	printLine("navigator.cookieEnabled => " + navigator.cookieEnabled);
	
	
}

init();