import Icons from "@/components/icons";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col gap-8 px-2 py-8 w-full">
                <div className="flex flex-row gap-2 sm:gap-4">
                    <div className="flex flex-col items-start">
                        <small className="text-sm text-neutral-500">
                            Since 2020 • aka Nordic Studio
                        </small>
                        <p className="items-center w-full text-2xl font-bold tracking-[0.010em] sm:text-4xl font-display font max-w-[800px]">
                            <Balancer>
                                a
                                <span className="text-neutral-500">
                                    {" "}
                                    boutique
                                </span>{" "}
                                software studio building{" "}
                                <span className="text-neutral-500">
                                    robust and beautiful
                                </span>{" "}
                                <span className="text-neutral-500"> </span>
                                apps. creators of{" "}
                                <span className="text-neutral-500">
                                    Campsite
                                </span>
                            </Balancer>
                        </p>
                    </div>
                </div>

                <div className="flex-row justify-between hidden pt-4 sm:flex grid-cols-3 gap-28">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 items-center w-fit">
                            <Icons.Shield />
                            <p className="text-xl font-semibold">Security</p>
                        </div>
                        <p className="text-neutral-500 dark:text-neutral-400">
                            Everything that we build uses modern security
                            standards. We take security very seriously.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 items-center w-fit">
                            <Icons.Pencil />
                            <p className="text-xl font-semibold">Design</p>
                        </div>
                        <p className="text-neutral-500 dark:text-neutral-400">
                            We strive to make our products as bold as possible.
                            We believe that design in a key factor in the
                            success of a project.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 items-center w-fit">
                            <Icons.Zap />
                            <p className="text-xl font-semibold">Speed</p>
                        </div>
                        <p className="text-neutral-500 dark:text-neutral-400">
                            Just because our products are beautiful, doesn't
                            mean they're slow. You get the best of both worlds.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
