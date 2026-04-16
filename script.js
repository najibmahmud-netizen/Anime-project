const container = document.getElementById("anime-container");
const searchInput = document.getElementById("search");

async function loadAnime(query = "naruto") {
  container.innerHTML = "Loading...";
  const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
  const data = await res.json();
}
