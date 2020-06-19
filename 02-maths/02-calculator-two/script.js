/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function test(operator) {
	let op1 = parseFloat(document.getElementById("op-one").value);
    let op2 = parseFloat(document.getElementById("op-two").value);


   switch (operator) {
		case "add":
			// statements_1
			  return op1+op2
			
			case "sub":
			// statements_1
			  return op1-op2
			
			
			case "mult":
			// statements_1
			  return op1*op2
			
			
			case "div":
			// statements_1
			  return op1/op2
	}
   
}

(function() {
	
	document.getElementById("addition").addEventListener("click", function(){
		
		alert(test("add"))
	});
    document.getElementById("substraction").addEventListener("click", function (){
    	alert(test("sub"))

    });
    document.getElementById("multiplication").addEventListener("click", function(){
    	alert(test("mult"))

    } );
    document.getElementById("division").addEventListener("click", function(){
    	alert(test("div"))

    });
    
})();
