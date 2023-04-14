const express = require("express");
const app = express();
require("dotenv").config();
require("./configs/db.config");

app.listen(process.env.PORT, (err) => {
    if (err) return err;
    console.log("sever is running on port", process.env.PORT);
});
