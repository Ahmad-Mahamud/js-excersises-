/* becode/javascript
*
* /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
*
* coded by leny@BeCode
* started at 26/10/2018
*/
// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function() {
// your code here
let attr = document.getElementById('source').dataset.image;
let fig = document.getElementById('target');
// console.log(attr);
let image = document.createElement('img');
image.src = attr;
fig.appendChild(image);
// console.log(image.src);
let child = document.getElementById('source');
let parent = child.parentNode;
parent.removeChild(child);
// console.log(parent);
})();