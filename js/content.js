document.addEventListener('DOMContentLoaded', () => {
    // Article Data
    let posts = JSON.parse(localStorage.getItem('posts')) 
    || [
        {
            image : '../assets/images/article-1.jpg',
            date : 'March 15, 2025',
            title : 'Getting Started with React Hooks',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate consequatur corporis.'
        },
        // {
        //     image : '../assets/images/article-2.jpg',
        //     date : 'Jan 5, 2025',
        //     title : 'Web Development',
        //     description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate consequatur corporis.'
        // },
        // {
        //     image : '../assets/images/article-3.jpg',
        //     date : 'April 10, 2024',
        //     title : 'Master CSS',
        //     description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate consequatur corporis.'
        // },
    ]
    



    // Variables
    const postForm = document.getElementById('postForm');
    const blogContainer = document.getElementById('post-container');
    
    console.log("Posts List:", posts);

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


})

