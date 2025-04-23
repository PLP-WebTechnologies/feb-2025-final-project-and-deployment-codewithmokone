document.addEventListener('DOMContentLoaded', () => {
    // Article Data
    let posts = JSON.parse(localStorage.getItem('posts')) || [
        {
            image : '../assets/images/article-1.jpg',
            date : 'March 15, 2025',
            title : 'Getting Started with React Hooks',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate consequatur corporis.'
        },
    ]


    // Variables
    const postForm = document.getElementById('postForm');
    const blogContainer = document.getElementById('post-container');
    const postBlockContainer = document.getElementById('post-form-section');

    // Logic for displaying the list of post
    posts.forEach(post => {
        const card = document.createElement('article');
        card.className = 'article';
    
        card.innerHTML = `
            <div class="card-body">
                <p class="card-date">${post.date}</p>
                <h3 class="card-title">${post.title}</h3>
                <p class="card-description">${post.description}</p>
            </div>
        `;
    
        blogContainer.appendChild(card);
    });

    // Form for adding new posts
    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const title = document.getElementById('title').value.trim()
        const date = document.getElementById('date').value.trim()
        const description = document.getElementById('description').value.trim()
    
        if (!title || !description){
            alert("Please enter all fields")
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
    const loginSection = document.getElementById('login-section');
    const loginBtn = document.getElementById('login-button');
    const logoutBtn = document.getElementById('logout-button');
    // const welcomeMessage = document.getElementById('welcome-message');

    // User details
    const USER = {
        username: 'admin',
        password: '1234'
    }

    // Check login on page load
    function checkLogin() {
        const loggedInUser = localStorage.getItem('loggedInUser');
        
        if (loggedInUser){
            loginSection.style.display = 'none';
            postBlockContainer.classList.remove('hidden');
            blogContainer.classList.remove('hidden');
            logoutBtn.classList.remove('hidden')
            // welcomeMessage.textContent = `Welcome, ${loggedInUser}!`;
        }else{
            loginSection.style.display = 'block';
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

    checkLogin()
})

