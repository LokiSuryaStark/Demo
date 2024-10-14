const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";
const Client = new MongoClient(url);

async function database(){
    const connect = await Client.connect();
    return connect.db("React+Express");
}
module.exports = database;