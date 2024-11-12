let likesCount = [2]; // Para cada foto
let dislikesCount = [1]; // Para cada foto
let commentsCount = [4]; // Para cada foto

function openPhotoDetails(id) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-img").src = `photo${id}.jpg`;
    document.getElementById("modal-title").innerText = `Título do prato 0${id}`;
    document.getElementById("modal-location").innerText = `Local 0${id} - Maceió-AL`;
    updateModalCounts(id);
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function toggleLike(id) {
    likesCount[id-1]++;
    document.getElementById(`likes-${id}`).innerText = likesCount[id-1];
    document.getElementById("total-likes").innerText = likesCount.reduce((acc, count) => acc + count, 0);
}

function toggleDislike(id) {
    dislikesCount[id-1]++;
    document.getElementById(`dislikes-${id}`).innerText = dislikesCount[id-1];
    document.getElementById("total-dislikes").innerText = dislikesCount.reduce((acc, count) => acc + count, 0);
}

function toggleComments(id) {
    const commentsSection = document.getElementById(`comments-section-${id}`);
    commentsSection.style.display = commentsSection.style.display === "none" ? "block" : "none";
}

function addComment(id) {
    const commentInput = document.getElementById(`comment-input-${id}`);
    const comment = commentInput.value.trim();
    if (comment) {
        commentsCount[id-1]++;
        const commentsList = document.getElementById(`comments-list-${id}`);
        const commentElement = document.createElement("p");
        commentElement.innerText = comment;
        commentsList.appendChild(commentElement);
        commentInput.value = ""; // Limpa o campo de comentário
        document.getElementById(`comments-count-${id}`).innerText = commentsCount[id-1];
    }
}

function updateModalCounts(id) {
    document.getElementById("modal-likes").innerText = likesCount[id-1];
    document.getElementById("modal-dislikes").innerText = dislikesCount[id-1];
    document.getElementById("modal-comments").innerText = commentsCount[id-1];
}

function toggleLikeInModal() {
    likesCount[0]++;
    updateModalCounts(1);
}

function toggleDislikeInModal() {
    dislikesCount[0]++;
    updateModalCounts(1);
}

function toggleCommentsInModal() {
    const commentsSection = document.querySelector(".comments-section");
    commentsSection.style.display = commentsSection.style.display === "none" ? "block" : "none";
}

function addCommentInModal() {
    const commentInput = document.getElementById("comment-input-modal");
    const comment = commentInput.value.trim();
    if (comment) {
        commentsCount[0]++;
        const commentsList = document.getElementById("comments-list-modal");
        const commentElement = document.createElement("p");
        commentElement.innerText = comment;
        commentsList.appendChild(commentElement);
        commentInput.value = ""; // Limpa o campo de comentário
        updateModalCounts(1);
    }
}
