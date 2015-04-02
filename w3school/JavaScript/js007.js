// js007_jsScope UI logic
// Depends on jsMainLib.js

function printLine(line){
	printLineOnDiv("printDiv",line);
}

function handleBoundBtnClick(){
	printLine("A click from " + this.innerHTML);
}

function handleOnload(){
	printLine("Document's ready!");
}

function handleOnBeforeUnload(){
	return "Do you want to leave this page?";
}

function init(){

	document.getElementById("jsBoundBtn").onclick = handleBoundBtnClick;
	onload = handleOnload; // window.onload
	onbeforeunload = handleOnBeforeUnload;
}

init();