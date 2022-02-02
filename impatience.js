var impatiencerating = 0;
function newthings1() {
	if (impatiencerating >= 25) {
		document.getElementById("newthingstoread1").style.visibility = "visible";
	}
}
function increment_impatience(){
	impatiencerating = impatiencerating + 1;
	impatiencecounter.innerHTML = impatiencerating;
}