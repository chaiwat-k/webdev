// External script for js002_externalSrc.html

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function init(){
	document.getElementById("execBtn").onclick = myFunction; 	
}

init();