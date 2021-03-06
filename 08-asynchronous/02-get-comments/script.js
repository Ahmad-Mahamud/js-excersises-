/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.querySelector('#run').addEventListener('click',() => {
    	window.lib.getPosts(
    		(_, posts) =>{
    			console.log(posts);
    			posts.forEach((post) => {
    				console.log(posts);
    				window.lib.getComments(post.id, (_, comments) =>{
    					post.comments = comments;
    					console.log(comments);
    				});
    			});
    		})
    })
})();
