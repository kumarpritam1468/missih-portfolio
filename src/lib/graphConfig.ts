import { Edge, Node } from "@xyflow/react";

export const initialNodes: Node[] = [
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

export const initialNodesMobile: Node[] = [
    // Main concepts with draggable set to false
    {
        id: '1',
        position: { x: 500, y: -400 },
        data: { label: 'Machine Learning' },
        className: 'custom-node',
        draggable: false
    },
    {
        id: '2',
        position: { x: 500, y: -50 },
        data: { label: 'Data Science' },
        className: 'custom-node',
        draggable: false
    },
    {
        id: '3',
        position: { x: 500, y: 350 },
        data: { label: 'AI Ethics' },
        className: 'custom-node',
        draggable: false
    },
    {
        id: '4',
        position: { x: 320, y: -220 },
        data: { label: 'Neural Networks' },
        className: 'custom-node',
        draggable: false
    },
    {
        id: '5',
        position: { x: 680, y: -220 },
        data: { label: 'Deep Learning' },
        className: 'custom-node',
        draggable: false
    },
    {
        id: '6',
        position: { x: 320, y: 150 },
        data: { label: 'Big Data' },
        className: 'custom-node',
        draggable: false
    },
    {
        id: '7',
        position: { x: 680, y: 150 },
        data: { label: 'Statistics' },
        className: 'custom-node',
        draggable: false
    },
    {
        id: '8',
        position: { x: 250, y: 500 },
        data: { label: 'Bias' },
        className: 'custom-node',
        draggable: false
    },
    {
        id: '9',
        position: { x: 450, y: 500 },
        data: { label: 'Privacy' },
        className: 'custom-node',
        draggable: false
    },
    {
        id: '10',
        position: { x: 700, y: 500 },
        data: { label: 'Fairness' },
        className: 'custom-node',
        draggable: false
    },
]

const initialEdgeStyle = { stroke: 'rgb(89, 238, 95)', strokeWidth: 2.5, strokeDasharray: 8, animation: 'dash 10s linear infinite' };

export const initialEdges: Edge[] = [
    { id: 'e1-4', source: '1', target: '4', style: initialEdgeStyle },
    { id: 'e1-5', source: '1', target: '5', style: initialEdgeStyle },
    { id: 'e2-6', source: '2', target: '6', style: initialEdgeStyle },
    { id: 'e2-7', source: '2', target: '7', style: initialEdgeStyle },
    { id: 'e3-8', source: '3', target: '8', style: initialEdgeStyle },
    { id: 'e3-9', source: '3', target: '9', style: initialEdgeStyle },
    { id: 'e3-10', source: '3', target: '10', style: initialEdgeStyle },
];