

// Global variables
let currentUser = null;

// Open the login modal
document.getElementById('login-btn').addEventListener('click', () => {
    document.getElementById('login-modal').style.display = 'flex';
});

// Close the login modal
document.getElementById('close-login-modal').addEventListener('click', () => {
    document.getElementById('login-modal').style.display = 'none';
});

// Switch to register modal
document.getElementById('register-link').addEventListener('click', () => {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('register-modal').style.display = 'flex';
});

// Close the register modal
document.getElementById('close-register-modal').addEventListener('click', () => {
    document.getElementById('register-modal').style.display = 'none';
});

// Open the photo modal on clicking the photo
const photoPosts = document.querySelectorAll('.photo-post');
photoPosts.forEach((post) => {
    const likeBtn = post.querySelector('.like-btn');
    const commentBtn = post.querySelector('.comment-btn');
    let likes = 0;
    let comments = 0;

    likeBtn.addEventListener('click', () => {
        likes++;
        post.querySelector('.like-count').innerText = `${likes} likes`;
    });

    commentBtn.addEventListener('click', () => {
        const modal = document.getElementById('photo-modal');
        const imgSrc = post.querySelector('.photo-img').src;
        modal.style.display = 'flex';
        document.getElementById('modal-photo').src = imgSrc;

        const newCommentButton = modal.querySelector('#add-comment');
        newCommentButton.onclick = () => {
            const newComment = modal.querySelector('#new-comment').value;
            if (newComment.trim() !== "") {
                const li = document.createElement('li');
                li.innerText = newComment;
                modal.querySelector('#comments-list').appendChild(li);
                modal.querySelector('#new-comment').value = ''; // Clear input
                comments++;
                post.querySelector('.comment-count').innerText = `${comments} comments`;
            }
        };
    });
});

// Close photo modal
document.getElementById('close-photo-modal').addEventListener('click', () => {
    document.getElementById('photo-modal').style.display = 'none';
});

// Register functionality (simulated)
document.getElementById('register-submit').addEventListener('click', () => {
    const nickname = document.getElementById('new-nickname').value;
    const password = document.getElementById('new-password').value;
    alert(`Registered as: ${nickname}`);
    document.getElementById('register-modal').style.display = 'none';
});

// Login functionality (simulated)
document.getElementById('login-submit').addEventListener('click', () => {
    const nickname = document.getElementById('nickname').value;
    document.getElementById('user-name').innerText = nickname; // Display logged-in user
    document.getElementById('login-modal').style.display = 'none';
});


