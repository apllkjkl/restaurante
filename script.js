// Modal functionality
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const photoModal = document.getElementById('photo-modal');
const loginBtn = document.getElementById('login-btn');
const registerLink = document.getElementById('register-link');
const closeButtons = document.querySelectorAll('.close');

loginBtn.onclick = () => loginModal.style.display = 'block';
registerLink.onclick = (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    registerModal.style.display = 'block';
};

closeButtons.forEach(btn => btn.onclick = () => {
    loginModal.style.display = 'none';
    registerModal.style.display = 'none';
    photoModal.style.display = 'none';
});

window.onclick = (e) => {
    if (e.target === loginModal || e.target === registerModal || e.target === photoModal) {
        e.target.style.display = 'none';
    }
};

// Like and comment functionality
document.querySelectorAll('.like-btn').forEach(likeBtn => {
    likeBtn.addEventListener('click', function () {
        let likeCount = this.nextElementSibling;
        let count = parseInt(likeCount.textContent);
        if (!this.classList.contains('liked')) {
            count++;
            this.classList.add('liked');
        } else {
            count--;
            this.classList.remove('liked');
        }
        likeCount.textContent = count;
    });
});

document.querySelectorAll('.comment-btn').forEach(commentBtn => {
    commentBtn.addEventListener('click', function () {
        let postId = this.closest('.photo-post').dataset.postId;
        openPhotoModal(postId);
    });
});

function openPhotoModal(postId) {
    photoModal.style.display = 'block';
    // Assuming you fetch photo details by postId, for now hardcoded:
    document.getElementById('modal-photo').src = `photo${postId}.jpg`;
    document.getElementById('photo-legend').textContent = `This is photo ${postId}`;
    document.getElementById('modal-like-count').textContent = document.querySelector(`[data-post-id="${postId}"] .like-count`).textContent;
}

// Posting a comment
document.getElementById('post-comment').addEventListener('click', function () {
    let commentInput = document.getElementById('comment-input');
    if (commentInput.value.trim() !== "") {
        let commentList = document.getElementById('comments-list');
        let newComment = document.createElement('li');
        newComment.textContent = commentInput.value;
        commentList.appendChild(newComment);
        commentInput.value = "";
    }
});
