const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/SummerSchool", 
{useNewUrlParser: true, useUnifiedTopology: true}
).then(() => {console.log("Database Connected")})
.catch((e) => {console.log("Databse Connection Error: " + e)})