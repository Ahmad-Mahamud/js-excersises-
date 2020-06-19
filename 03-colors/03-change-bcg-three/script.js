/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
// let btn = document.getElementById("run");
// btn.addEventListener("click", function(){

// });
    // your code here
     const randomizer = () => {return Math.floor(Math.random() * 256)};
    function giveColour(){
        return `rgb(${randomizer()}, ${randomizer()}, ${randomizer()}`
}
    document.getElementById("run").addEventListener("click", () => {
        document.body.style.backgroundColor = giveColour();
    })

})();
