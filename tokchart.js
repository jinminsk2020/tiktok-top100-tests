import axios from "axios";

const urls = [
  "https://tokchart.com/top-songs",
  "https://tokchart.com/charts/top-songs",
  "https://tokchart.com/charts/top-100",
  "https://tokchart.com/top-100",
  "https://tokchart.com/"
];

async function testUrls() {
  for (const url of urls) {
    try {
      console.log("Testing:", url);
      const res = await axios.get(url, {
        headers: { "User-Agent": "Mozilla/5.0" }
      });
      console.log("Status:", res.status, "Length:", res.data.length);
    } catch (err) {
      console.log("Error:", err.response?.status || err.message);
    }
    console.log("-----");
  }
}

testUrls();
