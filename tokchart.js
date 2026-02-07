import axios from "axios";
import * as cheerio from "cheerio";

async function testTokchart() {
  try {
    const url = "https://tokchart.com/top-songs";
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const $ = cheerio.load(data);
    const results = [];

    $(".chart-item").each((i, el) => {
      if (i >= 10) return;

      const title = $(el).find(".title").text().trim();
      const artist = $(el).find(".artist").text().trim();

      results.push({ rank: i + 1, title, artist });
    });

    console.log("Tokchart TOP-10:");
    console.log(results);

  } catch (err) {
    console.error("Tokchart error:", err.message);
  }
}

testTokchart();
