![Header](images/header.png)


# Visual AI Flow 🚀
![FlyRank AI Internship](https://img.shields.io/badge/FlyRank_AI_Internship-blue?style=for-the-badge&logo=microsoft)
![Backend AI Engineering](https://img.shields.io/badge/Track-Backend_AI_Engineering-purple?style=for-the-badge&logo=node.js)
![Build an AI Decision Flow with React Flow + Inngest](https://img.shields.io/badge/Project-Build_an_AI_Decision_Flow_with_React_Flow_+_Inngest-black?style=for-the-badge&logo=openai)
![Assignment](https://img.shields.io/badge/Assignment-BE--09-green?style=for-the-badge&logo=github)
![Track](https://img.shields.io/badge/Track-Backend_AI_Engineering-purple?style=for-the-badge&logo=node.js)
![Phase](https://img.shields.io/badge/Phase-Build%2B-orange?style=for-the-badge&logo=react)
![Week](https://img.shields.io/badge/Week-7-yellow?style=for-the-badge&logo=calendar)
![Workload](https://img.shields.io/badge/Workload-2h-lightgrey?style=for-the-badge&logo=clockify)


An event-driven AI workflow built with **Next.js**, **Inngest**, and **OpenAI**.  
Each node represents an AI decision step (YES/NO) and workflows are executed via Inngest while visualized in React Flow.

---

## ✨ Features
- Visual workflow editor powered by React Flow.
- Event-driven execution with Inngest.
- AI-powered branching logic using OpenAI GPT-4o-mini.
- Local development with Inngest dev server.

---

## ⚙️ Setup

1. **Clone and install dependencies**
   ```bash
   git clone https://github.com/your-username/visual-ai-flow.git
   cd visual-ai-flow
   npm install



---


### 2. Add environment variables in .env.local:

env
```bash
OPENAI_API_KEY=your-openai-key
INNGEST_EVENT_KEY=dev
```

### 3. Start Next.js:

```bash
npm run dev

```

### 4. Start Inngest dev server (attach to Next.js route):

```bash
npx inngest dev -u http://localhost:3000/api/inngest
```

---

## 🧪 Testing
Run the test script to send an event:

```bash
npx tsx scripts/test-event.ts
```

- Expected output:

- Event logged in Inngest dev server terminal.

Workflow executed with AI decision returned.


---

## 🛠️ Troubleshooting
- **Timeouts**: Ensure dev server is attached to Next.js route 
```bash
npx inngest dev -u http://localhost:3000/api/inngest

```

- **No events received**: Confirm `/api/inngest` is reachable:

```bash
curl http://localhost:3000/api/inngest

```

---

## 📸 Workflow Execution Screenshot

![AI Decision Flow Run](docs/run-screenshot.png)

---

## 📦 Deployment
For production, configure Inngest cloud and update apiBaseUrl accordingly.

---



### 🌟 Portfolio Highlight

![Portfolio Highlight](images/portfolio-highlight.png)  
✅ **Backend AI Engineer** — I design and ship production AI systems — from optimized models and ML pipelines to full-stack React/Node apps running on automated, containerized infrastructure. I turn research into reliable, measurable software.

---

![Footer](images/footer.png)

© 2026 Leonard Phokane | All rights reserved.

