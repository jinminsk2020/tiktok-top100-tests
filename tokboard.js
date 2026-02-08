import axios from "axios";
import * as cheerio from "cheerio";

async function testTokboard() {
  try {
    console.log("tokboard.js started");

    const url = "https://tokboard.com/top-songs";
    const { data } = await axios.get(url, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });

    console.log("HTML length:", data.length);
    console.log("HTML preview:", data.slice(0, 500));

    const $ = cheerio.load(data);
    const items = $(".song-item, .chart-item");

    console.log("Found items:", items.length);

    const results = [];

    items.each((i, el) => {
      if (i >= 10) return;

      const title =
        $(el).find(".title, .song-title").text().trim();
      const artist =
        $(el).find(".artist, .song-artist").text().trim();

      results.push({ rank: i + 1, title, artist });
    });

    console.log("Tokboard TOP-10:");
    console.log(results);

  } catch (err) {
    console.error("Tokboard error:", err.message);
  }
}

testTokboard();
