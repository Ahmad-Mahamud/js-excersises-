/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click",function () {
        let inputval = document.getElementById("hero-id").value-1;

        fetch("http://localhost:12345/_shared/api.json")
            .then(response => {
                return response.json();
            }).then(function (data) {



                if (inputval >= data.heroes.length) {
                    target.innerHTML ="test"
                } else {
                    const tmpl = document.getElementById('tpl-hero').content.cloneNode(true);
                    tmpl.querySelector('.name').innerText = data.heroes[inputval].name;
                    tmpl.querySelector('.alter-ego').innerText = data.heroes[inputval].alterEgo;
                    tmpl.querySelector('.powers').innerText = data.heroes[inputval].abilities;

                    document.getElementById("target").appendChild(tmpl);

                }

            })
})();
