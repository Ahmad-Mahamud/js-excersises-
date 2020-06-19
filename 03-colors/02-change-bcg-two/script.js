/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

		// your code here

		// input and button
		
		let btn = document.getElementById("run");




		// EVENT LISTENER
		btn.addEventListener("click",function(){
			console.log(btn);
			let colr = document.getElementById("color").value;
			document.body.style.backgroundColor = colr;
		});

})();
