var fizzBuzz = function(){
	var n = prompt("Pick an upperbound for fizzBuzz");
	for(var i = 1; i <= n; i++){
		if(i%3 === 0 && i%5=== 0){
			document.getElementById('demo').innerHTML += "fizzBuzz <br>";
		}else if(i%3 ===0){
			document.getElementById('demo').innerHTML += "fizz <br>";
		}else if(i%5 ===0){
			document.getElementById('demo').innerHTML += "Buzz <br>";
		}else{
			document.getElementById('demo').innerHTML += i + "<br>";
		}
	}


}