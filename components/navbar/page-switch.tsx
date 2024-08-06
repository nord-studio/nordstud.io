"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

type Path = { w: number; offset: number }[];

export default function PageSwitch() {
    const [active, setActive] = useState(0);
    const [clipPaths, setClipPaths] = useState<Path>([]);
    const [hidden, setHidden] = useState(true);
    const tabRefs = useRef<HTMLButtonElement[]>([]);
    const path = usePathname();

    const tabs = useMemo(
        () => [
            {
                label: "About",
                url: "/",
            },
            {
                label: "History",
                url: "/history",
            },
            {
                label: "Projects",
                url: "/projects",
            },
            {
                label: "Blog",
                url: "/blog",
            },
        ],
        []
    );

    useEffect(() => {
        switch (path) {
            case "/history": {
                setActive(1);
                break;
            }
            case "/projects": {
                setActive(2);
                break;
            }
            case "/blog": {
                setActive(3);
                break;
            }
        }

        const newClipPaths = tabs.map((_, i) => {
            const rect = tabRefs.current[i].getBoundingClientRect();
            return {
                w: rect.width,
                offset:
                    rect.left - tabRefs.current[0].getBoundingClientRect().left,
            };
        });

        setClipPaths(newClipPaths);
        setHidden(false);
    }, [tabs, path]);

    const getClipPath = (i: number) => {
        if (clipPaths.length === 0) return "";
        const { offset, w } = clipPaths[i];
        return `inset(4px calc(100% - (${
            offset + 3.5
        }px + ${w}px)) calc(100% - (0px + 32px)) ${offset + 3.5}px round 20px)`;
    };

    return (
        <>
            <div
                className={clsx(
                    "relative flex w-fit items-center rounded-full px-4"
                )}
            >
                {tabs.map((item, i) => (
                    <Link href={item.url}>
                        <button
                            key={i}
                            ref={(el) => {
                                tabRefs.current[i] = el!;
                            }}
                            className={clsx(
                                "z-10 rounded-full px-3 py-1 text-sm text-neutral-500 transition-colors hover:text-neutral-500 dark:text-neutral-400"
                            )}
                            onClick={() => setActive(i)}
                        >
                            {item.label}
                        </button>
                    </Link>
                ))}
            </div>
            <motion.div
                style={{
                    clipPath: getClipPath(active),
                }}
                animate={{
                    clipPath: getClipPath(active),
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 29,
                    duration: 0.1,
                }}
                className={clsx(
                    "[will-change: clip-path] pointer-events-none absolute left-1/2 z-20 flex w-fit -translate-x-1/2 items-center bg-neutral-950 p-1 dark:bg-neutral-50",
                    hidden === true && "opacity-0"
                )}
                aria-hidden
            >
                {tabs.map((item, i) => (
                    <span
                        key={i}
                        className={clsx(
                            "z-20 rounded-full px-3 py-1 text-sm text-neutral-50 transition-colors dark:text-neutral-950"
                        )}
                        aria-hidden
                    >
                        {item.label}
                    </span>
                ))}
            </motion.div>
        </>
    );
}
