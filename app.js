const API_URL = "https://jsonplaceholder.typicode.com/posts";

const postForm = document.querySelector("#post-form");
const formError = document.querySelector("#form-error");
const searchInput = document.querySelector("#search");
const statusEl = document.querySelector("#status");
const postsList = document.querySelector("#posts");

let posts = [];