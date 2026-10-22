const API_URL = "https://jsonplaceholder.typicode.com/posts";

const postForm = document.querySelector("#post-form");
const formError = document.querySelector("#form-error");
const searchInput = document.querySelector("#search");
const statusEl = document.querySelector("#status");
const postsList = document.querySelector("#posts");

let posts = [];

function renderPosts(list) {
  postsList.textContent = "";

  list.forEach((post) => {
    const li = document.createElement("li");
    li.textContent = post.title;
    postsList.append(li);
  });
}

async function loadPosts() {
  statusEl.textContent = "Se încarcă...";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Eroare server: " + response.status);
    }

    posts = await response.json();

    if (posts.length === 0) {
      statusEl.textContent = "Nu există nicio postare încă.";
    } else {
      statusEl.textContent = "";
    }

    renderPosts(posts);
  } catch (error) {
    statusEl.textContent = "Nu s-au putut încărca postările. Încearcă din nou.";
  }

  postForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(postForm);
  const data = Object.fromEntries(formData);

  console.log(data);
});
}

loadPosts();