"use client";

const Masonry: ComponentType<MasonryProps<Item>> = dynamic(
	() => import('masonic').then((mod) => mod.Masonry),
	{ ssr: false },
);
import * as items from "../projects.json";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React, { ComponentType } from "react";
import { MasonryProps } from "masonic";
import dynamic from "next/dynamic";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export interface Item {
	asset: string;
	url?: string;
}

export function ChildItem({ index, width, data }: { index: number; width: number; data: Item }) {
	return (
		<div className="flex flex-col items-center border rounded-md w-fit h-fit p-2 bg-neutral-100 dark:bg-neutral-900" key={index}>
			<Image src={data.asset} alt="Miru" className={`w-[${width}] h-fit object-cover rounded-md`} width={width} height={900} unoptimized />
			{data.url && (
				<Link href={data.url} target="_blank" className="w-full">
					<Button variant="outline" className="w-full mt-2">
						view site <ExternalLink className="size-4" />
					</Button>
				</Link>
			)}
		</div>
	)
}

export default function MasonryGrid({ className }: { className?: string }) {
	return (
		<>
			<ScrollArea className={cn("w-full h-full md:h-screen p-4", className)}>
				<Masonry
					items={items}
					columnGutter={16}
					maxColumnCount={2}
					className="h-full"
					render={ChildItem}
					style={{ height: "100%", maxHeight: "100%" }}
				/>
			</ScrollArea>
		</>
	)
}