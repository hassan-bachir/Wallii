const transactionSchema = new mongoose.Schema({
    walletId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Wallet",
    },
    type: { type: String, required: true, enum: ["expense", "income"] },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    description: String,
    isRecurring: Boolean,
    recurringPeriod: String,
    receiptImageUrl: String,
});

const Transaction = mongoose.model("Transaction", transactionSchema);
