const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());
const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

const userRoutes = require("./routes/user.routes");
app.use("/user", userRoutes);

const walletRoutes = require("./routes/wallet.routes");
app.use("/wallet", walletRoutes);

const transactionRoutes = require("./routes/transaction.routes");
app.use("/transaction", transactionRoutes);

const aiRoutes = require("./routes/ai.routes");
app.use("/ai", aiRoutes);

app.listen(process.env.PORT, (err) => {
    if (err) console.error(err);
    console.log("sever is running on port", process.env.PORT);
    require("./configs/db.config");
});
