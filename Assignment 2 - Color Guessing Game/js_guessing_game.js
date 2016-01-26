var target;
var guess_input;
var guess_input_text;
var finished = false;
var guesses = 0;
function do_game(){
	var random_number = Math.random()*100;
	var random_number_integer = Math.floor(random_number);
	target = random_number_integer+1;
	while(!finished){
		guess_input_text = prompt("give a number in range 1-100:")
		guess_input = parseInt(guess_input_text);
		guesses+=1;
		finished = check_guess();
	}
}
function check_guess(){
	if(isNaN(guess_input)){
		alert("it is not a number!");
		return false;
	}
	if((guess_input<1)||(guess_input>100)){
		alert("it is out of range");
		return false;
	}
		if(guess_input<target){
		alert("it is too small");
		return false;
	}
	if(guess_input>target){
		alert("it is too large");
		return false;
	}
	alert("You got the number! "+"The number is "+ target+"\n it took you "+guesses+" guesses!");
	return true;
}
