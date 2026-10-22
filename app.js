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
}

postForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  formError.textContent = "";

  const formData = new FormData(postForm);
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      formError.textContent = "Eroare " + response.status + ": " + errorText;
      return;
    }

    const newPost = await response.json();
    posts.unshift(newPost);
    statusEl.textContent = "";
    renderPosts(posts);
    postForm.reset();
  } catch (error) {
    formError.textContent = "Nu s-a putut trimite. Verifică conexiunea la internet.";
  }
});

searchInput.addEventListener("input", () => {
  const text = searchInput.value.trim().toLowerCase();

  const filtered = posts.filter((post) => {
    return post.title.toLowerCase().includes(text);
  });

  renderPosts(filtered);

  if (filtered.length === 0) {
    statusEl.textContent = "Nu s-a găsit nicio postare.";
  } else {
    statusEl.textContent = "";
  }
});

loadPosts();