/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let word = document.querySelector('#target').innerHTML;
    let word1 = document.querySelector('#target').innerHTML = '';
    const sizes = [10, 12, 14, 16, 18];
    let counter = 0;

    for(let i = 0; i <= word.length; i++){
    	// let 
    	// console.log(word[0]);
    	if(sizes.length === counter){
    		sizes= sizes.reverse();
    		counter = 0;
    	}
    	let span = document.createElement('span');
    	span.style.fontSize = sizes[++counter] + "px";
    	document.querySelector("#target").appendChild(span);
    };

})();
