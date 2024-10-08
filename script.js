// Show login modal
document.getElementById('login-btn').addEventListener('click', () => {
    document.getElementById('login-modal').style.display = 'flex';
});

// Close login modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('login-modal').style.display = 'none';
});

// Show register modal
document.getElementById('register-link').addEventListener('click', () => {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('register-modal').style.display = 'flex';
});

// Close register modal
document.getElementById('close-register-modal').addEventListener('click', () => {
    document.getElementById('register-modal').style.display = 'none';
});

// Like button functionality (one like per user)
const likeButtons = document.querySelectorAll('.like-btn');
likeButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (btn.getAttribute('data-liked') === 'false') {
            const likeCount = e.target.nextElementSibling;
            let likes = parseInt(likeCount.innerText);
            likeCount.innerText = `${likes + 1} likes`;
            btn.setAttribute('data-liked', 'true');
        }
    });
});

// Open modal for commenting and viewing photo details
const photoPosts = document
