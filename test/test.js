const { fetchAnime } = require('./api');

test('fetchAnime returns data', async () => {
  const data = await fetchAnime("naruto");
  expect(data.length).toBeGreaterThan(0);
});