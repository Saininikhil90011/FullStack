const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");
const cors = require("cors");
const NodeCache = require("node-cache");

// Initialize NodeCache with a default TTL of 600 seconds (10 minutes)
const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 });

app.use(cors());

app.get("/", async (req, res) => {
  // Check if the data is in the cache
  const cachedData = cache.get("meeshoProducts");
  if (cachedData) {
    console.log("Cache hit");
    return res.json(cachedData); // Return cached data if available
  }

  console.log("Cache miss. Fetching data...");
  try {
    // Fetch data from the API if not in the cache
    const response = await axios.post("https://www.meesho.com/api/v1/products", {
      page_id: "3iy",
      page: 1,
      offset: 0,
      limit: 20,
      cursor: null,
      isNewPlpFlowEnabled: true,
    });

    const data = response.data;

    // Store the response in the cache
    cache.set("meeshoProducts", data);

    // Send the response to the client
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
