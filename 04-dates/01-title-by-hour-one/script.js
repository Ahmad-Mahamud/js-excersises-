/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
let hour = new Date().getHours();
	let msg = "Hello ";
    let eMsg = "Good Evening ";
    let name = prompt("What is your Name?");
// between 6 AM and 6 PM respectively
if(hour >= 6 && hour <= 18) {
	// let name = prompt("What is you name?");
    document.getElementById("target").innerHTML = msg + name.toUpperCase();
} else {
	// let name = prompt("What is you name?");
    document.getElementById("target").innerHTML = eMsg + name.toUpperCase();
};

})();
