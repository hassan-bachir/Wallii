const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
    description: String,
    targetAmount: Number,
    targetDate: Date,
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: String,
    email: { type: String, required: true, unique: true },
    role: String,
    password: {
        type: String,
        required: function () {
            return !this.googleId;
        },
    },
    defaultCurrency: String,
    googleId: String,
    aiAdvisorName: String,

    goals: [goalSchema],
    wallets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Wallet",
        },
    ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
