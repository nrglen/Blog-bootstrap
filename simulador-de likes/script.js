const form = document.getElementById("postForm");
const titleInput = document.getElementById("titleInput");
const descInput = document.getElementById("descInput");
const imgInput = document.getElementById("imgInput");
const feed = document.getElementById("feed");

// ----- Cargar publicaciones guardadas -----
let posts = JSON.parse(localStorage.getItem("posts")) || [];
renderPosts();

// ----- Evento de SUBMIT -----
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = titleInput.value;
    const desc = descInput.value;
    const imgFile = imgInput.files[0];

    if (!title || !desc || !imgFile) {
        alert("Completa todos los campos");
        return;
    }

    const imgURL = URL.createObjectURL(imgFile);

    const newPost = {
        id: Date.now(),
        title,
        desc,
        imgURL,
        likes: 0
    };

    posts.unshift(newPost);
    saveAndRender();
    form.reset();
});

// ----- Guardar en localStorage -----
function saveAndRender() {
    localStorage.setItem("posts", JSON.stringify(posts));
    renderPosts();
}

// ----- Renderizar todas las cards -----
function renderPosts() {
    feed.innerHTML = "";

    posts.forEach(post => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${post.imgURL}">
            <h3>${post.title}</h3>
            <p>${post.desc}</p>

            <button class="likeBtn ${post.likes ? "red" : ""}">❤️</button>
            <span class="likeCount">${post.likes}</span>
        `;

        // SISTEMA DE LIKES
        const likeBtn = card.querySelector(".likeBtn");
        const likeCount = card.querySelector(".likeCount");

        likeBtn.addEventListener("click", () => {
            post.likes++;
            likeCount.textContent = post.likes;
            likeBtn.classList.add("red");
            localStorage.setItem("posts", JSON.stringify(posts));
        });

        feed.appendChild(card);
    });
}
