import { ThemeToggle } from "./theme-toggle";
import Icons from "./icons";

export default function Navbar() {
    return (
        <>
            <div className="flex flex-row items-center justify-center w-full p-3 border-b border-black/10 dark:border-white/10">
                <div className="flex flex-row justify-start">
                    <span className="sr-only">Nord</span>
                    <Icons.Nord className="w-8 h-8" />
                </div>
                <div className="w-full" />
                <div className="flex flex-row justify-end">
                    <ThemeToggle />
                </div>
            </div>
        </>
    );
}
