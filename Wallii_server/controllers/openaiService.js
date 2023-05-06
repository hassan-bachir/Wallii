const getAIAdvice = async (inputText) => {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: inputText,
            temperature: 0.5,
            max_tokens: 50,
            n: 1,
            stop: null,
        });

        const adviceText = response.choices[0].text.trim();
        const decision = adviceText.includes("approve")
            ? "Approved"
            : "Not Approved";
        const explanation = adviceText;

        return {
            decision: decision,
            explanation: explanation,
        };
    } catch (error) {
        console.error("Error getting AI advice:", error);
        throw error;
    }
};

module.exports = {
    getAIAdvice,
};
