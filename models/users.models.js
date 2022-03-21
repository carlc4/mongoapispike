const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://carl:Password123@cluster0.tmfnh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
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
