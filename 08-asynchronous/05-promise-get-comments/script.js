/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.querySelector('#run').addEventListener('click',() => {
    	// window.lib.getPosts(
    	// 	(_, posts) =>{
    	// 		console.log(posts);
    	// 		posts.forEach((post) => {
    	// 			console.log(posts);
    	// 			window.lib.getComments(post.id, (_, comments) =>{
    	// 				post.comments = comments;
    	// 				console.log(comments);
    	// 			});
    	// 		});
    	// 	});
    	let promise = window.lib.getPosts();
    	promise.then(posts) =>{
    		posts.forEach((post)=>{
    			let innerPromise = window.lib.getComments(post,id);
    			innerPromise.then((comments) =>{
    				console.log(comments);
    			});
    		}

    	},()=>{
    		alert('ERROR');
    	}.then ()
    });
})();
