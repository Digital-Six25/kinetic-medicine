// download-images.js

const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");
const https = require("https");

const clientSite = "https://kineticmedicine.com.au/";
const outputDir = path.join(__dirname, "/images");

async function downloadImage(url, filename) {
  const filePath = path.join(outputDir, filename);
  const writer = fs.createWriteStream(filePath);

  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        res.pipe(writer);
        writer.on("finish", () => {
          writer.close(resolve);
        });
      })
      .on("error", reject);
  });
}

async function scrapeImages() {
  try {
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    const { data } = await axios.get(clientSite);
    const $ = cheerio.load(data);
    const imgUrls = [];

    $("img").each((_, img) => {
      const src = $(img).attr("src");
      if (src) {
        const absoluteUrl = new URL(src, clientSite).href;
        imgUrls.push(absoluteUrl);
      }
    });

    console.log(`Found ${imgUrls.length} images. Downloading...`);

    for (let url of imgUrls) {
      const filename = path.basename(new URL(url).pathname);
      await downloadImage(url, filename);
      console.log(`Downloaded: ${filename}`);
    }

    console.log("✅ Done!");
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

scrapeImages();
