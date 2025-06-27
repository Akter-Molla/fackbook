// Sample data for our social media app
const samplePosts = [
    {
        id: 1,
        user: "John Doe",
        avatar: "https://via.placeholder.com/50",
        content: "Just finished my new project! So excited to share it with everyone.",
        time: "2 hours ago",
        likes: 15,
        comments: 5
    },
    {
        id: 2,
        user: "Jane Smith",
        avatar: "https://via.placeholder.com/50",
        content: "Beautiful day at the park today. Nature is truly healing.",
        image: "https://via.placeholder.com/500x300",
        time: "5 hours ago",
        likes: 42,
        comments: 12
    },
    {
        id: 3,
        user: "Mike Johnson",
        avatar: "https://via.placeholder.com/50",
        content: "Does anyone have recommendations for good JavaScript frameworks in 2023?",
        time: "1 day ago",
        likes: 8,
        comments: 14
    }
];

const sampleEvents = [
    { id: 1, name: "Tech Conference 2023", date: "June 15, 2023" },
    { id: 2, name: "Community Meetup", date: "June 22, 2023" },
    { id: 3, name: "Web Development Workshop", date: "July 5, 2023" }
];

const sampleFriends = [
    { id: 1, name: "Sarah Williams", status: "Online" },
    { id: 2, name: "David Brown", status: "Online 30m ago" },
    { id: 3, name: "Emily Davis", status: "Online" },
    { id: 4, name: "Robert Wilson", status: "Online 1h ago" }
];

// Function to render posts
function renderPosts() {
    const postsContainer = document.getElementById('posts-container');
    
    samplePosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        
        let imageHtml = '';
        if (post.image) {
            imageHtml = `<img src="${post.image}" alt="Post image" class="post-image">`;
        }
        
        postElement.innerHTML = `
            <div class="post-header">
                <img src="${post.avatar}" alt="${post.user}" class="post-avatar">
                <span class="post-user">${post.user}</span>
                <span class="post-time">${post.time}</span>
            </div>
            <div class="post-content">
                <p>${post.content}</p>
                ${imageHtml}
            </div>
            <div class="post-actions">
                <button>Like (${post.likes})</button>
                <button>Comment (${post.comments})</button>
                <button>Share</button>
            </div>
        `;
        
        postsContainer.appendChild(postElement);
    });
}

// Function to render events
function renderEvents() {
    const eventsList = document.getElementById('events-list');
    
    sampleEvents.forEach(event => {
        const eventElement = document.createElement('li');
        eventElement.innerHTML = `
            <strong>${event.name}</strong>
            <p>${event.date}</p>
        `;
        eventsList.appendChild(eventElement);
    });
}

// Function to render friends
function renderFriends() {
    const friendsList = document.getElementById('friends-list');
    
    sampleFriends.forEach(friend => {
        const friendElement = document.createElement('li');
        friendElement.innerHTML = `
            <span>${friend.name}</span>
            <span class="status">${friend.status}</span>
        `;
        friendsList.appendChild(friendElement);
    });
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', function() {
    renderPosts();
    renderEvents();
    renderFriends();
    
    // Add event listener for the post button
    const postButtons = document.querySelectorAll('.post-actions button');
    postButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Functionality to be implemented!');
        });
    });
    
    // Simple form submission handler
    const postForm = document.querySelector('.post-form textarea');
    const postButton = document.querySelector('.post-form button:last-child');
    
    postButton.addEventListener('click', function() {
        if (postForm.value.trim() !== '') {
            alert(`Post created: "${postForm.value}"`);
            postForm.value = '';
        } else {
            alert('Please write something to post!');
        }
    });
});
