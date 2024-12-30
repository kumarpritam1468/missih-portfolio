import {
  ReactFlow,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback } from 'react';

const initialNodes = [
  // Main concepts
  { id: '1', position: { x: 400, y: 30 }, data: { label: 'Machine Learning' }, className: 'custom-node' },
  { id: '2', position: { x: 100, y: 180 }, data: { label: 'Data Science' }, className: 'custom-node' },
  { id: '3', position: { x: 780, y: 180 }, data: { label: 'AI Ethics' }, className: 'custom-node' },
  
  // Sub concepts for Machine Learning
  { id: '4', position: { x: 300, y: 150 }, data: { label: 'Neural Networks' }, className: 'custom-node' },
  { id: '5', position: { x: 500, y: 150 }, data: { label: 'Deep Learning' }, className: 'custom-node' },
  
  // Sub concepts for Data Science
  { id: '6', position: { x: 0, y: 300 }, data: { label: 'Big Data' }, className: 'custom-node' },
  { id: '7', position: { x: 200, y: 300 }, data: { label: 'Statistics' }, className: 'custom-node' },
  
  // Sub concepts for AI Ethics
  { id: '8', position: { x: 600, y: 300 }, data: { label: 'Bias' }, className: 'custom-node' },
  { id: '9', position: { x: 800, y: 300 }, data: { label: 'Privacy' }, className: 'custom-node' },
  { id: '10', position: { x: 1000, y: 300 }, data: { label: 'Fairness' }, className: 'custom-node' },
];

const initialEdges = [
  // Connections from Machine Learning
  { id: 'e1-4', source: '1', target: '4', style: { stroke: 'rgb(204, 255, 204)' } },
  { id: 'e1-5', source: '1', target: '5', style: { stroke: 'rgb(204, 255, 204)' } },
  
  // Connections from Data Science
  { id: 'e2-6', source: '2', target: '6', style: { stroke: 'rgb(204, 255, 204)' } },
  { id: 'e2-7', source: '2', target: '7', style: { stroke: 'rgb(204, 255, 204)' } },
  
  // Connections from AI Ethics
  { id: 'e3-8', source: '3', target: '8', style: { stroke: 'rgb(204, 255, 204)' } },
  { id: 'e3-9', source: '3', target: '9', style: { stroke: 'rgb(204, 255, 204)' } },
  { id: 'e3-10', source: '3', target: '10', style: { stroke: 'rgb(204, 255, 204)' } },
];

export default function RabbitHole() {
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params:any) => setEdges((eds) => addEdge({ ...params, style: { stroke: 'rgb(204, 255, 204)' } }, eds)),
    [setEdges],
  );

  return (
    <div className="h-svh w-screen">
      <style>
        {`
          .custom-node {
            padding: 10px;
            border-radius: 5px;
            color: rgb(204, 255, 204);
          }
          .react-flow__node-default {
            background: black;
            border: 2px solid rgb(89, 238, 95);
            box-shadow: 0 0 1rem #22c55e;
          }
        `}
      </style>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
      </ReactFlow>
    </div>
  );
}