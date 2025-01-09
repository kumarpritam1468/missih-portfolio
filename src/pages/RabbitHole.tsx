import { useCallback, useState } from 'react';
import {
  ReactFlow,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  Connection,
  NodeMouseHandler
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { contentData } from "../data/data"

const initialNodes: Node[] = [
  // Main concepts with draggable set to false
  {
    id: '1',
    position: { x: 400, y: 30 },
    data: { label: 'Machine Learning' },
    className: 'custom-node',
    draggable: false
  },
  {
    id: '2',
    position: { x: 100, y: 180 },
    data: { label: 'Data Science' },
    className: 'custom-node',
    draggable: false
  },
  {
    id: '3',
    position: { x: 780, y: 180 },
    data: { label: 'AI Ethics' },
    className: 'custom-node',
    draggable: false
  },
  // Sub concepts
  {
    id: '4',
    position: { x: 300, y: 150 },
    data: { label: 'Neural Networks' },
    className: 'custom-node',
    draggable: false
  },
  {
    id: '5',
    position: { x: 500, y: 150 },
    data: { label: 'Deep Learning' },
    className: 'custom-node',
    draggable: false
  },
  {
    id: '6',
    position: { x: 0, y: 300 },
    data: { label: 'Big Data' },
    className: 'custom-node',
    draggable: false
  },
  {
    id: '7',
    position: { x: 200, y: 300 },
    data: { label: 'Statistics' },
    className: 'custom-node',
    draggable: false
  },
  {
    id: '8',
    position: { x: 600, y: 300 },
    data: { label: 'Bias' },
    className: 'custom-node',
    draggable: false
  },
  {
    id: '9',
    position: { x: 800, y: 300 },
    data: { label: 'Privacy' },
    className: 'custom-node',
    draggable: false
  },
  {
    id: '10',
    position: { x: 1000, y: 300 },
    data: { label: 'Fairness' },
    className: 'custom-node',
    draggable: false
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-4', source: '1', target: '4', style: { stroke: 'rgb(204, 255, 204)' } },
  { id: 'e1-5', source: '1', target: '5', style: { stroke: 'rgb(204, 255, 204)' } },
  { id: 'e2-6', source: '2', target: '6', style: { stroke: 'rgb(204, 255, 204)' } },
  { id: 'e2-7', source: '2', target: '7', style: { stroke: 'rgb(204, 255, 204)' } },
  { id: 'e3-8', source: '3', target: '8', style: { stroke: 'rgb(204, 255, 204)' } },
  { id: 'e3-9', source: '3', target: '9', style: { stroke: 'rgb(204, 255, 204)' } },
  { id: 'e3-10', source: '3', target: '10', style: { stroke: 'rgb(204, 255, 204)' } },
];

export default function RabbitHole(): JSX.Element {
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params, style: { stroke: 'rgb(204, 255, 204)' } }, eds)),
    [setEdges],
  );

  const onNodeClick: NodeMouseHandler = useCallback((_event: any, node: any) => {
    setSelectedNode(node);
    setIsModalOpen(true);
  }, []);

  return (
    <div className="h-svh w-screen relative">
      <style>
        {`
          .custom-node {
            padding: 10px;
            border-radius: 5px;
            color: rgb(204, 255, 204);
            cursor: pointer;
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
        onNodeClick={onNodeClick}
        fitView
      >
        <Controls />
      </ReactFlow>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} >
        <DialogContent className="w-[90vw] max-w-[90vw] h-[90vh] max-h-[90vh] px-10 bg-black border-y-0 border-x-2 border-x-green-500 shadow-[20px_0_20px_-20px_#22c55e,-20px_0_20px_-20px_#22c55e]" style={{ borderRadius: '20px'}}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedNode && contentData[selectedNode.id]?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 overflow-y-auto">
            {selectedNode && contentData[selectedNode.id]?.content}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}