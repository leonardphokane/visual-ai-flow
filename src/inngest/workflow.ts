import { Inngest } from "inngest";
import { openai } from "@/lib/openai";

const inngest = new Inngest({ id: "visual-ai-flow" });

export const aiWorkflow = inngest.createFunction(
  { id: "ai-workflow" },
  { event: "workflow/run" },
  async ({ event }) => {
    const { prompt } = event.data;
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });
    return { decision: response.choices[0].message?.content?.trim() };
  }
);
