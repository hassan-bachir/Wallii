const budgetSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    amount: { type: Number, required: true },
    startDate: Date,
    endDate: Date,
});

const Budget = mongoose.model("Budget", budgetSchema);
