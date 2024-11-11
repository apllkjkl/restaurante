let likesCount = 2;
let dislikesCount = 1;
let commentsCount = 4;

function openPhotoDetails(id) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-img").src = `photo${id}.jpg`;
    document.getElementById("modal-title").innerText = `Título do prato 0${id}`;
    document.getElementById("modal-location").innerText = `Local 0${id} - Maceió-AL`;
    updateModalCounts();
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function toggleLike() {
    likesCount++;
    document.querySelector(".photo-post button").innerText = `👍 ${likesCount}`;
}

function toggleDislike() {
    dislikesCount++;
    document.querySelector(".photo-post button").innerText = `👎 ${dislikesCount}`;
}

function toggleComments() {
    alert("Exibir comentários...");
}

function addComment() {
    const commentInput = document.getElementById("comment-input");
    const comment = commentInput.value.trim();
    if (comment) {
        commentsCount++;
        const commentsList = document.getElementById("comments-list");
        const commentElement = document.createElement("p");
        commentElement.innerText = comment;
        commentsList.appendChild(commentElement);
        commentInput.value = "";
        updateModalCounts();
    }
}

function updateModalCounts() {
    document.getElementById("modal-likes").innerText = likesCount;
    document.getElementById("modal-dislikes").innerText = dislikesCount;
    document.getElementById("modal-comments").innerText = commentsCount;
}
