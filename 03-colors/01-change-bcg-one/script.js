/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let btn = document.querySelectorAll("button");
    for(let i=0; i<btn.length; i++){
    	btn[i].addEventListener("click",function(){
    		switch (i) {
    			case 0:
    				// red
    				document.body.style.backgroundColor = "red";
    				break;
    			case 1:
    				// green
    				document.body.style.backgroundColor = "green";
    				break;
    			case 2:
    				// yellow
    				document.body.style.backgroundColor = "yellow";
    				break;
    			case 3:
    				// blue
    				document.body.style.backgroundColor = "blue";
    				break;			
    			
    		};
    	})
    }


})();
