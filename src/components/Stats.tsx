import { useState, useEffect } from "react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"; // adjust import paths as needed
import { Eye, BookOpenCheck, CodeXml } from "lucide-react"; // or your icon library

// A wrapper component that shows the tooltip on click for mobile devices
const MobileAwareTooltip = ({ children, tooltipContent }: { children: React.ReactNode, tooltipContent: React.ReactNode }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // adjust breakpoint as needed
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // On mobile, toggle the tooltip on click; otherwise, let the tooltip handle hover/focus
    const triggerProps = isMobile
        ? {
            onClick: (e: React.MouseEvent) => {
                e.stopPropagation(); // prevent other click handlers
                setOpen((prev) => !prev);
            },
        }
        : {};

    return (
        <Tooltip open={isMobile ? open : undefined} onOpenChange={isMobile ? setOpen : undefined}>
            <TooltipTrigger asChild {...triggerProps}>
                {children}
            </TooltipTrigger>
            <TooltipContent className="text-base border border-green-600 text-green-500 bg-black">
                {tooltipContent}
            </TooltipContent>
        </Tooltip>
    );
};

export default function Stats() {
    return (
        <div className="flex gap-6 items-center">
            <TooltipProvider>
                <MobileAwareTooltip tooltipContent={<p>Views : 1,754</p>}>
                    <Eye className="cursor-pointer" />
                </MobileAwareTooltip>
            </TooltipProvider>
            <TooltipProvider>
                <MobileAwareTooltip tooltipContent={<p>Books Read : 17</p>}>
                    <BookOpenCheck className="cursor-pointer" />
                </MobileAwareTooltip>
            </TooltipProvider>
            <TooltipProvider>
                <MobileAwareTooltip tooltipContent={<p>Programming Languages Known : 7</p>}>
                    <CodeXml className="cursor-pointer" />
                </MobileAwareTooltip>
            </TooltipProvider>
        </div>
    );
}
