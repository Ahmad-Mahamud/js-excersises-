/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click",function () {

       //getting data from json
       fetch("http://http://127.0.0.1:8080/_shared/api.json")

           //what to do with the response
           .then(response => {
               //getting the response in
               return response.json();})
           //processing the further data that you got
       .then(data => {
           //log it in console
           console.log(data)
       });


   })
})();
