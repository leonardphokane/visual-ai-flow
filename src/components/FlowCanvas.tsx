import React from "react";
import ReactFlow, { Background, Controls } from "react-flow-renderer";

const initialNodes = [
  { id: "1", type: "input", data: { label: "Start" }, position: { x: 250, y: 5 } },
];

const initialEdges: any[] = [];

export default function FlowCanvas() {
  return (
    <ReactFlow nodes={initialNodes} edges={initialEdges} fitView>
      <Background />
      <Controls />
    </ReactFlow>
  );
}
