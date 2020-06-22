/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
     document.getElementById("run").addEventListener("click",function () {
       fetch("http://localhost:8080/_shared/api.json")
           .then(response => {
               return response.json();
           }).then(function (data) {


            data.heroes.forEach(function (hero) {

                const tmpl = document.getElementById('tpl-hero').content.cloneNode(true);
                tmpl.querySelector('.name').innerText = hero.name;
                 tmpl.querySelector('.alter-ego').innerText = hero.alterEgo;
                 tmpl.querySelector('.powers').innerText = hero.abilities;

            })
           document.getElementById("target").appendChild(tmpl);
       })
    })
})();
