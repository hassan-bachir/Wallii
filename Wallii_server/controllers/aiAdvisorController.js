const { getAIAdvice } = require("./openaiService");

const getAdvice = async (req, res) => {
    const { aiAdvisorName, goals, walletSummary, budget, expenseData } =
        req.body;

    const inputText = `
    Impersonate as: ${aiAdvisorName || "a financial advisor"}
    User Goals: ${JSON.stringify(goals)}
    Wallet Summary: ${JSON.stringify(walletSummary)}
    Budget: ${JSON.stringify(budget)}
    New Expense: ${JSON.stringify(expenseData)}

    Taking into consideration the user's goals, wallet summary, budget, 
    and the new expense they want to make, should the user proceed with the transaction? 
    If not, provide a brief explanation. Start your response with either "approve" or "disapprove" 
    followed by "|||" and limit your explanation to a maximum of 90 words.

    `;

    try {
        const adviceResponse = await getAIAdvice(inputText);
        const [decision, explanation] = adviceResponse.split("|||");

        res.json({
            decision: decision.trim(),
            explanation: explanation.trim(),
        });
    } catch (error) {
        console.error("Error fetching AI advice:", error);
        res.status(500).json({ error: "Error fetching AI advice." });
    }
};

module.exports = {
    getAdvice,
};
