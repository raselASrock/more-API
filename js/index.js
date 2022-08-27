function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    // .then( data => console.log(data))
    .then( data => displayUsers2(data))
}

function displayUsers2(data){
    // console.log(data)
    // for ( const user of data){
    //     console.log(user)
        // console.log(user.name)
        // console.log(user.email)
        // console.log(user.username)
        const ul = document.getElementById('users-list')
        for( const user of data){
            console.log(user.name);
            const li =document.createElement('li');
            li.innerText = user.name
            ul.appendChild(li);
        }
    }