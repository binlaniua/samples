const { MongoClient } = require("mongodb");

const url = "mongodb://mongdb:27017";
const client = new MongoClient(url, { useNewUrlParser: true });

exports.helloWorld = async (req, res) => {
    await client.connect();
    console.log("连接成功");
    res.send("访问成功");
};
