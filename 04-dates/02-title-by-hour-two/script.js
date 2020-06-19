/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value" 

     // your code here
   	let time = 17 * 60 + 30;
   	let hour=  new Date().getHours() * 60;
   	let min=  new Date().getMinutes();
   	let total = hour + min;
	let msg = "Hello, it's before 1730";
    let eMsg = "Good Evening ";
    
// between 6 AM and 5:30 PM respectively
if(time >= total){ 
    document.getElementById("target").innerHTML = msg;
   
} else {
	
    document.getElementById("target").innerHTML = eMsg;
};

})();
