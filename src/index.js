require("dotenv").config(); // get `.env` vars (Shouldn't work like this 🤦)
const readline = require("node:readline");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const printToConsole = require("./printToConsole");

const gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const IO = { input: process.stdin, output: process.stdout };
const rl = readline.createInterface(IO);
const history = [];

const UP_NEXT = "\nBring It On Buddy 👋 😏 🫴 ...\n\n";
const HELLO_FRIEND = "\nHello Old Friend 👋, What's My Itinerary..?\n\n";

(async function analysis() {
  const genAI = gemini.getGenerativeModel({ model: "gemini-pro" });
  const question = history.length ? UP_NEXT : HELLO_FRIEND;

  rl.question(question, async (query) => {
    const result = await genAI.generateContent(query);
    const response = result.response.text();

    history.push({ user: query, gemini: response });
    await printToConsole(response);

    analysis(); // Loops back to next question
  });
})();
