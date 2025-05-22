import MasonryGrid from "@/app/masonry";
import Icons from "@/components/icons";
import { ThemeToggle } from "@/components/theme/toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-row justify-between w-full min-h-screen">
      <div className="flex flex-col min-h-screen-nav md:min-h-screen md:justify-between md:max-w-[500px] md:border-r">
        <div className="flex flex-row gap-2 items-center justify-between p-4 md:p-6 border-b md:border-0">
          <Icons.Nord className="size-8" />
          <ThemeToggle />
        </div>
        <div className="flex flex-col min-h-screen-nav md:min-h-fit h-full">
          <MasonryGrid className="flex md:hidden" />
          <div className="flex flex-col gap-8 items-start px-8 pb-8 pt-2 justify-end h-fit md:h-full">
            <div className="flex flex-col gap-4 items-start">
              <h1 className="text-5xl xs:text-6xl font-black tracking-tight">hi. we are <br /> nord studio.</h1>
              <p className="text-xl text-neutral-500 dark:text-neutral-400">
                a boutique software studio building <b>robust</b> and <span className="font-literata">beautiful</span> apps.
                lead by a group of developers who care.
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center w-full">
              <Link href="https://github.com/nord-studio" target="_blank" className="w-full">
                <Button className="w-full font-semibold">
                  our work
                </Button>
              </Link>
              <Link href="/discord" target="_blank" className="w-full">
                <Button className="w-full font-semibold" variant="outline">
                  join our community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MasonryGrid className="hidden md:flex" />
    </main>
  );
}
