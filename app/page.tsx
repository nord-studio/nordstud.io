import Icons from "@/components/icons";
import Image from "next/image";
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
                        <p className="items-center w-full text-2xl font-bold tracking-[0.010em] font-sora sm:text-4xl">
                            <Balancer>
                                a
                                <span className="text-neutral-500 italic pr-1">
                                    {" "}
                                    boutique
                                </span>{" "}
                                software studio building{" "}
                                <span className="text-neutral-500">
                                    robust
                                </span>{" "}
                                and{" "}
                                <span className="text-neutral-500">
                                    beautiful{" "}
                                </span>
                                apps. creators of{" "}
                                <Link
                                    href="https://campsite.chat"
                                    target="_blank"
                                    className="w-fit flex gap-2"
                                >
                                    <span className="">campsite</span>
                                    <Icons.Campsite className="w-full h-8 pt-2" />
                                </Link>
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
                <div className="grid grid-cols-3 grid-flow-row gap-4 w-full">
                    <button className="w-full border border-black/10 dark:border-white/10 flex flex-col p-0 m-0 rounded-lg text-start col-span-2">
                        <div className="top-0 left-0 right-0 w-full backdrop-blur">
                            <div className="absolute top-0 w-full p-6">
                                <h1 className="text-3xl font-bold text-white">
                                    Campsite
                                </h1>
                            </div>
                        </div>
                        <Image
                            src="/campsite-banner.png"
                            alt="blog post"
                            height={400}
                            width={800}
                            className="flex-1 w-full h-full object-cover rounded-lg"
                        />
                        <div className="bottom-0 left-0 right-0 w-full backdrop-blur">
                            <div className="absolute bottom-0 w-full p-4 text-white">
                                <p>
                                    Our first product, a modern and beautiful
                                    chat application.
                                </p>
                            </div>
                        </div>
                    </button>
                    <div className="flex flex-col gap-4 items-center">
                        <button className="w-full h-full border border-black/10 dark:border-white/10 flex flex-col p-0 m-0 rounded-lg text-start">
                            <div className="top-0 left-0 right-0 w-full backdrop-blur">
                                <div className="absolute top-0 w-full p-6">
                                    <h1 className="text-3xl font-bold text-white">
                                        Campsite
                                    </h1>
                                </div>
                            </div>
                            <Image
                                src="/campsite-banner.png"
                                alt="blog post"
                                height={400}
                                width={800}
                                className="flex-1 w-full h-full object-cover rounded-lg"
                            />
                            <div className="bottom-0 left-0 right-0 w-full backdrop-blur">
                                <div className="absolute bottom-0 w-full p-4">
                                    <p className="text-white">
                                        Our first product, a modern and
                                        beautiful chat application.
                                    </p>
                                </div>
                            </div>
                        </button>
                        <button className="w-full h-full border border-black/10 dark:border-white/10 flex flex-col p-0 m-0 rounded-lg text-start">
                            <div className="top-0 left-0 right-0 w-full backdrop-blur">
                                <div className="absolute top-0 w-full p-6">
                                    <h1 className="text-3xl font-bold text-white">
                                        History
                                    </h1>
                                </div>
                            </div>
                            <Image
                                src="/history/banner.png"
                                alt="blog post"
                                height={400}
                                width={800}
                                className="w-full h-full object-center object-cover rounded-lg"
                            />
                            <div className="bottom-0 left-0 right-0 w-full backdrop-blur">
                                <div className="absolute bottom-0 w-full p-4 text-white">
                                    <p>
                                        Our first product, a modern and
                                        beautiful chat application.
                                    </p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
