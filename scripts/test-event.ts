import { Inngest } from "inngest";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const inngest = new Inngest({
  id: "visual-ai-flow",
  eventKey: process.env.INNGEST_EVENT_KEY || "dev",
  apiBaseUrl: "http://127.0.0.1:8288",   // ✅ force local dev server
});

async function main() {
  await inngest.send({
    name: "workflow/run",
    data: { prompt: "Is this a support request?" },
  });
  console.log("Event sent!");
}

main();
