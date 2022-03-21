const { MongoClient } = require("mongodb");
const uri = "INSERT MONGO URI HERE";
const client = new MongoClient(uri);

exports.fetchUsers = async () => {
  await client.connect();

  const result = await client
    .db("sample_restaurants")
    .collection("restaurants")
    .findOne({ name: "Riviera Caterer" });

  client.close();
  return result;
};
