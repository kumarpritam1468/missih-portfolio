import React, { useCallback } from 'react';
import {
    ReactFlow,
    Controls,
    useNodesState,
    useEdgesState,
    addEdge,
    Connection,
    Edge,
    Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Define types for the input JSON data
interface GraphNode {
    id: string;
    label: string;
    children?: string[];
}

interface GraphData {
    nodes: GraphNode[];
}

// Input JSON describing the hierarchy
const graphData: GraphData = {
    nodes: [
        { id: '1', label: 'Machine Learning', children: ['4', '5'] },
        { id: '2', label: 'Data Science', children: ['6', '7'] },
        { id: '3', label: 'AI Ethics', children: ['8', '9', '10'] },
        { id: '4', label: 'Neural Networks' },
        { id: '5', label: 'Deep Learning' },
        { id: '6', label: 'Big Data' },
        { id: '7', label: 'Statistics' },
        { id: '8', label: 'Bias' },
        { id: '9', label: 'Privacy' },
        { id: '10', label: 'Fairness' },
    ],
};

// Generate nodes with automatic positioning
const generateNodes = (data: GraphData): Node[] => {
    const nodes: Node[] = [];
    const levelSpacing = 150; // Space between levels
    const nodeSpacing = 150; // Space between nodes in the same level

    // Recursive function to assign positions based on hierarchy
    const assignPosition = (nodeId: string, x: number, y: number): void => {
        const node = data.nodes.find((n) => n.id === nodeId);
        if (node) {
            nodes.push({
                id: node.id,
                position: { x, y },
                data: { label: node.label },
                className: 'custom-node',
            });
            if (node.children) {
                const childY = y + levelSpacing;
                const childCount = node.children.length;
                const startX = x - (childCount - 1) * (nodeSpacing / 2);
                node.children.forEach((childId, index) => {
                    assignPosition(childId, startX + index * nodeSpacing, childY);
                });
            }
        }
    };

    // Start from root nodes (nodes without parents)
    data.nodes
        .filter((node) => !data.nodes.some((n) => n.children?.includes(node.id)))
        .forEach((rootNode, index) => {
            assignPosition(rootNode.id, index * nodeSpacing * 3, 0);
        });

    return nodes;
};

// Generate edges
const generateEdges = (data: GraphData): Edge[] => {
    const edges: Edge[] = [];
    data.nodes.forEach((node) => {
        if (node.children) {
            node.children.forEach((childId) => {
                edges.push({
                    id: `e${node.id}-${childId}`,
                    source: node.id,
                    target: childId,
                    style: { stroke: 'rgb(176, 224, 255)' },
                });
            });
        }
    });
    return edges;
};

const RabbitHole: React.FC = () => {
    const initialNodes = generateNodes(graphData);
    const initialEdges = generateEdges(graphData);

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: any) =>
            setEdges((eds) =>
                addEdge({ ...params, style: { stroke: 'rgb(176, 224, 255)' } }, eds)
            ),
        [setEdges]
    );

    return (
        <div className="h-screen w-screen">
            <style>
                {`
          .custom-node {
            background: black;
            border: 2px solid rgb(0, 157, 255);
            padding: 10px;
            border-radius: 5px;
            color: rgb(176, 224, 255);
          }
          .react-flow__node-default {
            background: transparent;
            border: 2px solid rgb(0, 157, 255);
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
};

export default RabbitHole;
