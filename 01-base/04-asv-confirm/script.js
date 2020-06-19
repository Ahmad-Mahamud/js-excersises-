/* becode/javascript
*
* /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
*
* coded by leny@BeCode
* started at 26/10/2018
*/
// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function() {
// your code here
// QUESTIONS
function agt(){
	let age = prompt("What is your age?");
	let gender = prompt("What is your gender?");
	let town = prompt("Which town do you live in currently?");

	// confirm
	let x = confirm(`Are these statements correct? \n you are ${age} old \n you are ${gender} \n you live in ${town}`);

// reRUNNING QUESTIONS
if (x == true){
	alert("thank you");
	
} else {
	agt();
}
};
agt();

})();