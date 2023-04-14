const transactionSchema = new mongoose.Schema({
    walletId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Wallet",
    },
    type: { type: String, required: true, enum: ["expense", "income"] },
    category: { type: String, required: true },
    amount: Number,
    date: Date,
    description: String,
    isRecurring: Boolean,
    recurringPeriod: String,
    receiptImageUrl: String,
});

const Transaction = mongoose.model("Transaction", transactionSchema);
