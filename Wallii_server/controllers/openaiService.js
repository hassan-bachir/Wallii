const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const getAIAdvice = async (inputText) => {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: inputText,
            temperature: 0.5,
            max_tokens: 200,
            n: 1,
            stop: null,
        });

        const decision = response.data.choices[0].text.trim();

        return decision;
    } catch (error) {
        console.error("Error getting AI advice:", error);
        throw error;
    }
};

module.exports = {
    getAIAdvice,
};
