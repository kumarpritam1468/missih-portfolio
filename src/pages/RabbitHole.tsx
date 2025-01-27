import { useCallback, useState } from 'react';
import {
  ReactFlow,
  Controls,
  useNodesState,
  useEdgesState,
  // addEdge,
  Node,
  // Connection,
  NodeMouseHandler
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  // AlertDialogTrigger,
  // AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { contentData } from "../data/data"
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from "framer-motion";
import {initialNodes, initialEdges} from "@/lib/graphConfig.ts";


export default function RabbitHole(): JSX.Element {
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, _setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [direction, setDirection] = useState<"left" | "right">("left");

  // const onConnect = useCallback(
  //   (params: Connection) =>
  //     setEdges((eds) =>
  //       addEdge({ ...params, style: { stroke: "rgb(204, 255, 204)" } }, eds)
  //     ),
  //   [setEdges]
  // );

  const onNodeClick: NodeMouseHandler = useCallback((_event: any, node: Node) => {
    setSelectedNode(node);
    setIsModalOpen(true);
  }, []);

  const handlePrev = () => {
    if (!selectedNode) return;
    setDirection("right"); // Swipe direction
    const currentIndex = nodes.findIndex((node) => node.id === selectedNode.id);
    const prevIndex = (currentIndex - 1 + nodes.length) % nodes.length; // Loop back to last node if at the beginning
    setSelectedNode(nodes[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedNode) return;
    setDirection("left"); // Swipe direction
    const currentIndex = nodes.findIndex((node) => node.id === selectedNode.id);
    const nextIndex = (currentIndex + 1) % nodes.length; // Loop back to first node if at the end
    setSelectedNode(nodes[nextIndex]);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    // preventDefaultTouchmoveEvent: true, // Prevent scrolling while swiping
    trackTouch: true, // Tracks touch events
  });

  const variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "left" ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "left" ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="h-screen w-screen relative">
      <style>
        {`
          .react-flow__node-default {
            background: black;
            border: 2px solid rgb(89, 238, 95);
            box-shadow: 0 0 3rem rgba(34, 197, 94, .6);
            font-size: .8rem;
            padding: 10px;
            border-radius: 1rem;
            color: rgb(204, 255, 204);
            min-width: 150px;
            width: fit-content;
            cursor: pointer;
            transition: all .2s ease-in-out;
          }
        `}
      </style>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        onNodeClick={onNodeClick}
        fitView
      >
        <Controls />
      </ReactFlow>

      <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <AlertDialogContent
          className="w-[90vw] max-w-[90vw] h-[90vh] max-h-[90vh] px-10 py-10 flex flex-col items-center justify-end bg-black border-y-0 border-x-2 border-x-green-500 shadow-[20px_0_20px_-20px_#22c55e,-20px_0_20px_-20px_#22c55e]"
          style={{ borderRadius: "20px" }}
          {...swipeHandlers} // Add swipe handlers here
        >
          {/* Cancel Button */}
          <AlertDialogCancel
            className="absolute top-4 right-4 text-3xl bg-transparent border-none hover:bg-transparent hover:text-green-500 hover:scale-110"
          >
            ✕
          </AlertDialogCancel>

          {/* Animated Content */}
          <AnimatePresence initial={false} custom={direction} >
            {selectedNode && (
              <motion.div
                key={selectedNode.id}
                className="flex flex-1 absolute top-10 max-md:top-20 w-[90%] flex-col md:flex-row gap-8 items-center justify-center"
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.4 }}
              >
                <div className="w-[30%] max-md:w-[95%] max-md:h-[18vh] ">
                  <img
                    src={
                      contentData[selectedNode.id]?.imgSrc ||
                      "https://via.placeholder.com/150"
                    }
                    alt={contentData[selectedNode.id]?.title || "Node Image"}
                    className="w-full h-full object-cover rounded-lg border-2 border-green-500"
                  />
                </div>
                <div className="flex-1 overflow-y-auto">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-2xl font-bold">
                      {contentData[selectedNode.id]?.title}
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogDescription className="text-green-500 text-lg mt-4">
                    {contentData[selectedNode.id]?.content}
                  </AlertDialogDescription>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6 w-full">
            <button
              onClick={handlePrev}
              className="w-fit px-6 py-2 border-x-2 border-[#59EE5F] flex h-fit rounded-2xl gap-2 items-center shadow-[20px_0_20px_-20px_#22c55e,-20px_0_20px_-20px_#22c55e]"
            >
              <ArrowLeft />
              Prev
            </button>
            <button
              onClick={handleNext}
              className="w-fit px-6 py-2 border-x-2 border-[#59EE5F] flex h-fit rounded-2xl gap-2 items-center shadow-[20px_0_20px_-20px_#22c55e,-20px_0_20px_-20px_#22c55e]"
            >
              Next
              <ArrowRight />
            </button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}