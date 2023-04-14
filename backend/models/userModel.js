const mongoose = require(mongoose);

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
    wallets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Wallet",
        },
    ],
});

const User = mongoose.model("User", userSchema);
