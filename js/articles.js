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
    const blogContainer = document.getElementById('post-container');

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

})

