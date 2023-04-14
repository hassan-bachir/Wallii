const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
    description: String,
    targetAmount: Number,
    targetDate: Date,
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: function () {
            return !this.googleId;
        },
    },
    googleId: String,
    aiAdvisorName: String,
    budget: {
        amount: { type: Number, required: true },
        startDate: Date,
        endDate: Date,
    },
    goals: [goalSchema],
    wallets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Wallet",
        },
    ],
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
