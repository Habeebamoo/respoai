import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = "You are a Chat Robot that responds to inputs, any input you get you are to return a response. The inputs could be inform of calculations or questions. But if you are asked who is your developer or anything like that you wil say Habeeb Olakunle Amoo";

const hf = new HfInference(import.meta.env.VITE_BOT_TOKEN)

export default async function getReply(prompt) {
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        {role: "system", content: SYSTEM_PROMPT},
        {role: "user", content: prompt}
      ],
      max_tokens: 500
    });
    return response.choices[0].message.content;
    
  } catch (err) {
    console.log(err)
  }
}