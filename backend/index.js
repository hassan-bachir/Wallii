const express = require("express");
const app = express();
require("dotenv").config();
require("./configs/db.config");
app.use(express.json());

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

const userRoutes = require("./routes/user.routes");
app.use("/user", userRoutes);

const walletRoutes = require("./routes/wallet.routes");
app.use("/wallet", walletRoutes);

app.listen(process.env.PORT, (err) => {
    if (err) console.error(err);
    console.log("sever is running on port", process.env.PORT);
});
