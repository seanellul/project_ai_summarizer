const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const resp = await openai.createTranscription(
  fs.createReadStream("audio.mp3"),
  "whisper-1"
);
