/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    let btn = document.getElementById('next');
    let img  = document.getElementById("im");
    let imgIndex = 1;
	
   		
    
 	btn.addEventListener("click",function(){
			// console.log('hi there');
			img.setAttribute("src",gallery[imgIndex]);
            imgIndex++;
            if(imgIndex >= 5){
                imgIndex =0;
            };
			
		});

})();
