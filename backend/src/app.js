const express = require("express");
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');

dotenv.config();
require('./configuration/dbConfig');

app.use(bodyParser.json());
app.use(cors());

app.use("/user", signupRoute);
app.use("/auth", loginRoute);

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
})