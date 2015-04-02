// Updated 2015-01-26 Chaiwat K.

function printLineOnDiv(divId, line){
	if(line == null) return;
	if(line.length <= 0) return;
	var elem = document.getElementById(divId);
	if(elem == null) return;
	var content = elem.innerHTML;
	elem.innerHTML = content + line + "<br />";
}

function dateDiff(today,past) {
    var diff = Math.floor(today.getTime() - past.getTime());
    var day = 1000* 60 * 60 * 24;

    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);
	
	return { years: years, months: months, days: days };
}

function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

