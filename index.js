import axios from "axios";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const cheerio = require("cheerio");

const urlToScrape = "https://example.com"; // Replace with the real website URL you want to scrape
const apiEndpoint = `https://api.allorigins.win/get?url=${encodeURIComponent(urlToScrape)}`;

async function scrape() {
  try {
    const response = await axios.get(apiEndpoint);
    const html = response.data.contents;
    const $ = cheerio.load(html);
    const headings = [];
    $("h1").each((i, el) => {
      headings.push($(el).text().trim());
    });
    console.log("H1 headings found:");
    console.log(headings);
  } catch (error) {
    console.error("Error fetching the page:", error.message);
  }
}

scrape();
