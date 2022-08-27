function loadPosts() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        // .then( data => console.log(data))
        .then(data => displayPosts(data))
}


/* 
1. get the container element where you want to add the new elements
2. Create Child Element
3. set innerText or innerHTML
4. appendChild
*/


function displayPosts(posts) {
    const postContainer = document.getElementById('post-container')
    for (const post of posts) {
        const postDiv = document.createElement('div')
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h4>User-${post.userId}</h4>
        <h5>Post:${post.title} </h5>
        <p>Post Description: ${post.body}</p>
        `
        postContainer.appendChild(postDiv)
    }

}


