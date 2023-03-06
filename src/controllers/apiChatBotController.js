const getResponseGpt = require("../gpt3/getResponseWithGpt");

module.exports = class apiChatBotController {
    static async chatBot(req, res) {
        const {message} = req.body;
        console.log(message);
        const response = await getResponseGpt(message);

        if (!response) {
            return res.status(500).json({error: "Internal Server Error"});
        }

        res.status(200).json({response: response});
    }
}