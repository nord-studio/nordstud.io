import { Nord } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col justify-center w-full px-2 text-center h-snug">
            <div className="flex flex-col items-center justify-center gap-8">
                <Nord className="w-48 h-48" />
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-5xl font-extrabold">Nord Studio</h1>
                    <span className="text-neutral-500 dark:text-neutral-400">
                        A boutique studio building secure, speedy, and stylish
                        applications.
                    </span>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <Link href="/projects">
                        <Button>Our Work</Button>
                    </Link>

                    <Tooltip delayDuration={150} disableHoverableContent>
                        <TooltipContent sideOffset={10}>
                            Coming Soon
                        </TooltipContent>
                        <TooltipTrigger>
                            <Button variant="secondary" disabled>
                                Contact us
                            </Button>
                        </TooltipTrigger>
                    </Tooltip>
                </div>
            </div>
        </main>
    );
}
