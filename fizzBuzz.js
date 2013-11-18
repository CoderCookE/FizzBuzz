var printToScreen = function(text){
	document.getElementById('demo').innerHTML += text + "<br>";
}

var fizzBuzz = function(){
	var n = prompt("Pick an upperbound for fizzBuzz");
	for(var i = 1; i <= n; i++){
		if(i%3 === 0 && i%5=== 0){
			printToScreen("fizzBuzz")
		}else if(i%3 ===0){
			printToScreen("fizz");
		}else if(i%5 ===0){
			printToScreen("Buzz");
		}else{
			printToScreen(i);
		}
	}

}

