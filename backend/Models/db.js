const mongoose = require("mongoose");

mongoose.connect(process.env.MongoDB_URI, ["userlist"]);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB Connected Successfully!");
})

module.exports = connection; 