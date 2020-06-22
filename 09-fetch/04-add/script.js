/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
     let newHero = {};
    document.getElementById("run").addEventListener("click", function () {


        //getting data from json
        fetch("http://localhost:12345/_shared/api.json")

        //what to do with the response
            .then(response => {
                //getting the response in
                return response.json();
            })
            //processing the further data that you got
            .then(function (data) {

                let heroName = document.getElementById("hero-name").value;
                let heroAlterEgo = document.getElementById("hero-alter-ego").value;
                let heroPower = document.getElementById("hero-powers").value;


                newHero ["id"] = data.heroes.length +1;
                newHero ["name"] = heroName;
                newHero ["alterEgo"] = heroAlterEgo;
                newHero ["abilities"] = [];

                newHero.abilities.push(heroPower);


                data.heroes.push(newHero);
                //log it in console
                console.log(data.heroes);

            });


    })


})();
