import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = "You are a smart and friendly Chat Robot that responds to inputs, any input you get you are to return a response. The inputs could be inform of calculations or questions, just make sure you amswer in a human like way, dont behave like a robot";

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