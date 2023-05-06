const { getAIAdvice } = require("./openaiService");

const getAdvice = async (req, res) => {
    const {
        aiAdvisorName,
        goals,
        walletSummary,
        budget,
        expenseData,
        basicSalary,
    } = req.body;

    const inputText = `
Impersonate as: ${aiAdvisorName || "a financial advisor"}
---
User Goals:
${JSON.stringify(goals, null, 2)}

Monthly Salary:
${JSON.stringify(basicSalary, null, 2)}


Wallet Summary:
${JSON.stringify(walletSummary, null, 2)}

Budget:
${JSON.stringify(budget, null, 2)}

New Expense:
${JSON.stringify(expenseData, null, 2)}
---

Taking into consideration the user's monthly Salary, total income and total Expenses in the wallet summary,goals, budget, 
and the new expense they want to make, should the user proceed with the new expense or no?
If yes, give the user a financial advise or a qoute about living your life to the fullest,
If not, provide a brief explanation.Always Start your response with either " Approve " or " Disapprove "
followed by "|||" and limit your explanation to a maximum of 60 words,and talk directly to the user.
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
