/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
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
        fetch("http://localhost:12345/_shared/api.json")

        //what to do with the response
            .then(response => {
                //getting the response in
                return response.json();
            })
            //processing the further data that you got
            .then(data => {

                //
                let input = document.getElementById("hero-id").value -1;
                data.heroes.splice(input,1);
                console.log(data)
            });


    })

})();
