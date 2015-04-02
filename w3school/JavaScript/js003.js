// UI logic script for js003_jsOutput.html

function displayWindowAlert(){
	window.alert("Window alert!!!");
}

function displayInnerHtml(){
	document.getElementById("innerHtmlDiv").innerHTML = "Inner HTML!!!";
}

function displayBrowserConsole(){
	console.log("Console log!!!");
}

function displayDocWrite(){
	document.write("Document Write!!!");
}

function init(){
	document.getElementById("winAlertBtn").onclick = displayWindowAlert;
	document.getElementById("innerHtmlBtn").onclick = displayInnerHtml;
	document.getElementById("browserConsoleBtn").onclick = displayBrowserConsole;
	document.getElementById("docWriteBtn").onclick = displayDocWrite;
}

init();