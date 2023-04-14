const goalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    description: String,
    targetAmount: Number,
    targetDate: Date,
});

const FinancialGoal = mongoose.model("Goal", financialGoalSchema);
