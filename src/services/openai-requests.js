const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function gptRequest(input, translation) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are a large language model using OpenAI GPT 3.5. Please look up the provided bible verse and try to make the wording sound like ${translation}. If you get a verse that doesn't exist, call the user a heathen and tell them to check again`,
      },
      {
        role: "user",
        content: `${input}`,
      },
    ],
    temperature: 0.7,
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
  return completion.choices[0];
}
