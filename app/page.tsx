import FlowCanvas from "@/components/FlowCanvas";  // ✅ absolute import

export default function Home() {
  return (
    <main style={{ height: "100vh", width: "100%" }}>
      <FlowCanvas />
    </main>
  );
}
