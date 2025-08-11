import axios from "axios";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const cheerio = require("cheerio");

document.getElementById('scrapeForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const url = document.getElementById('url').value;
  const component = document.getElementById('component').value;
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = 'Fetching data...';

  const apiEndpoint = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

  try {
    const response = await axios.get(apiEndpoint);
    const html = response.data.contents;
    const $ = cheerio.load(html);
    const elements = [];

    $(component).each((i, el) => {
      elements.push($(el).text().trim());
    });

    if (elements.length > 0) {
      resultsContainer.innerHTML = elements.map(el => `<p>${el}</p>`).join('');
    } else {
      resultsContainer.innerHTML = 'No elements found.';
    }
  } catch (error) {
    resultsContainer.innerHTML = `Error fetching the page: ${error.message}`;
  }
});
