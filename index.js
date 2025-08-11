import axios from "axios";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const cheerio = require("cheerio");

const url = "https://example.com";

async function scrape() {
  try {
    const response = await axios.get(url, {
      timeout: 15000, // 15 seconds
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
      },
    });

    const $ = cheerio.load(response.data);
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
