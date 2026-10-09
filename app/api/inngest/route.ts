import { serve } from "inngest/next";
import { aiWorkflow } from "@/inngest/workflow";

export const { GET, POST } = serve({
  functions: [aiWorkflow],
});
