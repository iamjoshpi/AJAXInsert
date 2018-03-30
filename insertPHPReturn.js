function insert(div,page){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		document.getElementById(div).innerHTML = this.responseText;
	}//function ends here
	xmlhttp.open("GET", page);
	xmlhttp.send();
}
