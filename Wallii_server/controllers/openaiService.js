const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
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

        return response.choices[0].text.trim();
    } catch (error) {
        console.error("Error getting AI advice:", error);
        throw error;
    }
};

module.exports = {
    getAIAdvice,
};
