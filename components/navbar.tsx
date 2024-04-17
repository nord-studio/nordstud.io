import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Nord } from "./icons";

export default function Navbar() {
    return (
        <>
            <div className="flex flex-row items-center justify-center w-full p-3 border-b border-black/10 dark:border-white/10">
                <div className="flex flex-row justify-start">
                    <span className="sr-only">Nord</span>
                    <Nord className="w-8 h-8" />
                </div>
                <div className="flex flex-row justify-center w-full gap-3">
                    <Link href="/" passHref>
                        <Button variant="link">About</Button>
                    </Link>
                    <Link href="/projects" passHref>
                        <Button variant="link">Projects</Button>
                    </Link>
                </div>
                <div className="flex flex-row justify-end">
                    <ThemeToggle />
                </div>
            </div>
        </>
    );
}
