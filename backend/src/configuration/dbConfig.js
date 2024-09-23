const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/jwt_db");
mongoose.connect("mongodb+srv://FarmToDoor-user:ZsXv12AOHha8VvwR@cluster0.oxeryx3.mongodb.net/FarmToDoor?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
    console.log(`MongoDB connection error: ${err}`)
})

module.exports = mongoose;