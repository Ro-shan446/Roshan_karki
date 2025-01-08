function editSection(sectionId) {
    const section = document.getElementById(sectionId);
    const newText = prompt("Edit the content:", section.innerHTML);
    if (newText) {
        section.innerHTML = newText + `<button onclick="editSection('${sectionId}')">Edit Section</button>`;
    }
}

// Add new blog post
document.getElementById('addPostBtn').addEventListener('click', () => {
    const newPostTitle = prompt('Enter the title of your new post:');
    const newPostContent = prompt('Enter the content of your new post:');
    const newPostImage = prompt('Enter the URL of an image for your post (optional):');
    const newPostVideo = prompt('Enter the URL of a video for your post (optional):');

    if (newPostTitle && newPostContent) {
        const blogPosts = document.getElementById('blogPosts');
        const newPost = document.createElement('article');

        newPost.innerHTML = `
            <h3>${newPostTitle}</h3>
            <p>${newPostContent}</p>
            ${newPostImage ? `<img src="${newPostImage}" alt="Blog Image" style="max-width: 100%;">` : ''}
            ${newPostVideo ? `<video src="${newPostVideo}" controls style="max-width: 100%;"></video>` : ''}
        `;
        blogPosts.appendChild(newPost);
    }
});
