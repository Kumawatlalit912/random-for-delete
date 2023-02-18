const { Client } = require("@elastic/elasticsearch");
const client = new Client({
  cloud: {
    id: process.env.CLOUD_ID,
  },
  auth: {
    ApiKey: process.env.API_KEY,
  },
});

const someData = async () => {
  try {
    const some = await client.search({
      body: {
        query: {
          match: {},
        },
      },
    });
    return some.hits.hits;
  } catch (e) {
    return e.message;
  }
};

someData();
