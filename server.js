const { Client } = require("@elastic/elasticsearch");
const dotenv = require("dotenv");
dotenv.config();
const client = new Client({
  cloud: {
    id: process.env.CLOUD_ID,
  },
  auth: {
    apiKey: process.env.API_KEY,
  },
});

const someData = async () => {
  try {
    const some = await client.search({
      index: "netflix",
      body: {
        query: {
          match: {
            release_year: 2020,
          },
        },
      },
    });
    console.log(some.hits.hits);
  } catch (e) {
    console.log("some error occurred while searching", e);
  }
};
someData();
