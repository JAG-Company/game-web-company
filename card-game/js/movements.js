function startCounter(){
	var movementText;
	movement++;
	movementText = movement;

	if(movement > levels[levelActual].movementMax && !modeRelax){
		gameOver();
		return;
	}

	if(movement < 10){
		movementText = "0" + movement;
	}
	document.querySelector("#mov").innerText = movementText;
}

function maxCounter(){
	var movementMaxText = levels[levelActual].movementMax;
	if (movementMaxText < 10){
		movementsMaxText = "0" + movementMaxText;
	}
	document.querySelector("#mov-total").innerText = movementMaxText;
}
