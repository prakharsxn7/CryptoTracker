const mongoose = require("mongoose");

const uri =
  "mongodb+srv://prakharsxn7:KhJ4e5KbR7Z2tMuY@cluster0.9xrek.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose;

function dbConnection() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;
