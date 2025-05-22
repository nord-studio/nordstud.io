import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function HistoryLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex flex-col max-w-[1200px] w-full mx-auto pt-8">
			<Link href="/">
				<button
					className="flex flex-row items-center gap-2 text-neutral-500 px-2"
				>
					<ArrowLeft size={16} />
					<span className="text-lg font-medium">Back</span>
				</button>
			</Link>
			{children}
		</div>
	)
}