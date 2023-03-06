const API_KEY = require("../../env")
const {Configuration, OpenAIApi} = require("openai");

const configuration = new Configuration({
    apiKey: API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = function getResponseGpt(prompt) {
    console.info("getResponseGpt::requesting the Openai API")
    return openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 1024,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: null,
    }).then((response) => {
        console.info("getResponseGpt::request successful")
        return response.data.choices[0].text.replace(/(\r\n|\n|\r)/gm, " ")
    }).catch((error) => {
        console.error("getResponseGpt::request failed")
        return null;
    });
}










