document.addEventListener('DOMContentLoaded', function() {

    const postForm = 
        document.getElementById('postForm');
    const postSubmitBtn = 
        document.getElementById('postSubmitBtn');
    const postContainer = 
        document.querySelector('.post-container');
    

    postForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validation
        // const postCategory = 
        //     document.getElementById('postCategory').value;
        const postTitle = 
            document.getElementById('postTitle').value;
        const postDescription = 
            document.getElementById('postDescription').value;

        if(postTitle.trim() === '' || 
         postDescription.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Get the current date
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.toLocaleString('default',
        { month: 'short' });
        const year = currentDate.getFullYear();
        const formattedDate = day + ' ' + month + ' ' + year;

        // Create a new post element
        const newPost = document.createElement('div');
        newPost.className = 'post-box';
        newPost.innerHTML = `
        <article class="article">
            <div>
                <img class="article-image" src="" alt="" >
            </div>
            <span class="post-date">${formattedDate}</span>
            <h3 class="post-title" data-title="${postTitle}"
            data-date="${formattedDate}"
            data-description="${postDescription}">
                ${postTitle}</h3><br>
            <p class="post-description">
            ${postDescription.substring(0, 100)}...</p>
            <button class="delete-post" data-title="${postTitle}">
            Delete</button>
            <span class="load-more" data-title="${postTitle}" 
            data-date="${formattedDate}" 
            data-description="${postDescription}">
            Load more</span>
        </article>
        `;

        // Append the new post to the post container
        postContainer.insertBefore(newPost, 
            postContainer.firstChild);

    });

})