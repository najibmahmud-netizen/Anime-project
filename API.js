const BASE_URL = "https://api.jikan.moe/v4/anime";

async function fetchAnime(query) {
  const res = await fetch(`${BASE_URL}?q=${query}`);
  const data = await res.json();
  return data.data;
}

module.exports = { fetchAnime }; // for testing