import Icons from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
	name,
	summary,
	year,
	img,
	deploy_url,
	github_url,
}: {
	name: string;
	summary: string;
	year: number;
	img: string;
		deploy_url: string;
		github_url?: string;
}) {
	return (
		<>
			<div className="border w-full m-0 text-start border-black/10 dark:border-white/10 rounded-lg p-0 flex flex-col">
				<Image
					src={img}
					width={768}
					// Half of 768
					height={384}
					alt="Project Image"
					className="rounded-t-lg"
				/>
				<div className="flex flex-col gap-1 p-3 border-t border-black/10 dark:border-white/10">
					<div className="flex flex-row gap-2 items-center justify-between w-full">
						<div className="flex flex-row gap-3 items-center">
							<h1 className="text-2xl font-bold font-display">{name}</h1>

							<code className="text-sm border border-white/10 dark:border-black/10">
								{year}
							</code>
						</div>
						<div className="flex flex-row gap-2 items-center">
							{deploy_url && (
								<Link href={deploy_url} target="_blank">
									<Icons.Link className="w-5 h-5" />
								</Link>
							)}
							{github_url && (
								<Link href={github_url} target="_blank">
									<Icons.Github className="w-5 h-5" />
								</Link>)}
						</div>
					</div>
					<p className="text-sm sm:text-md">{summary}</p>
				</div>
			</div>
		</>
	);
}