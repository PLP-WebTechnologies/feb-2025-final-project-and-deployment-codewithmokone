document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const postForm = document.getElementById('postForm');
    const postContainer = document.getElementById('form-container');
    const formHeader = document.getElementById('form-heading');

    // Form for adding new posts
    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const title = document.getElementById('title').value.trim();
        const date = document.getElementById('date').value.trim();
        const description = document.getElementById('description').value.trim();
    
        if (!title || !description){
            alert("Please enter all fields");
        }
    
        const newPost = {
            date: new Date(date).toDateString(),
            title: title,
            description: description
        };
    
        posts.push(newPost);

        localStorage.setItem('posts', JSON.stringify(posts)); // add the new post to local storage
    
        postForm.reset(); // reset the form
    });

    // Logic for login in the user
    const loginContainer = document.getElementById('login-container');
    const loginBtn = document.getElementById('login-form-button');
    const logoutBtn = document.getElementById('logout-button');

    // User details
    const USER = {
        username: 'admin',
        password: '1234'
    }

    // Check login on page load
    function checkLogin() {
        const loggedInUser = localStorage.getItem('loggedInUser');
        
        if (loggedInUser){
            loginContainer.style.display = 'none';
            postContainer.classList.remove('hidden-form');
            formHeader.classList.remove('hidden-form');
            logoutBtn.classList.remove('hidden');
        }else{
            loginContainer.style.display = 'flex';
            logoutBtn.classList.add('hidden');
            postForm.style.display = 'none';
        }
    }

    // Handles the login logic
    loginBtn.addEventListener('click', () => {
        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value;

        if (username === USER.username && password === USER.password){
            localStorage.setItem('loggedInUser', username);
            checkLogin();
        }else{
            alert('Invalid credentials.');
        }
    })

    // Handles loging out and clearing the local storage
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        checkLogin();
    });

    checkLogin();
})

