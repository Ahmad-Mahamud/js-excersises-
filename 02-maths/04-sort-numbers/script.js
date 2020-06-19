/* becode/javascript
*
* /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
*
* coded by leny@BeCode
* started at 26/10/2018
*/
// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function() {

// to get the value of an input: document.getElementById("element-id").value
document.getElementById("run").addEventListener("click", function() {
// your code here
let input = document.getElementById("numbers").value;
let arr = input.split(",").sort(function(a, b){
		return a - b
});
for(let i = 0; i < arr.length; i++){
	console.log(arr[i]);
}
// console.log(arr);
document.getElementById("numbers").value = arr;
								

});



})();