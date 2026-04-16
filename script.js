const container = document.getElementById("anime-container");
const searchInput = document.getElementById("search");

async function loadAnime(query = "naruto") {
  container.innerHTML = "Loading...";
  const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
  const data = await res.json();

  container.innerHTML = "";

    data.data.forEach(anime => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${anime.images.jpg.image_url}" />
        <h3>${anime.title}</h3>
        <p>Score: ${anime.score}</p>
      `;
      container.appendChild(card);
    });
}

searchInput.addEventListener("input", (e) => {
  loadAnime(e.target.value);
});

loadAnime();