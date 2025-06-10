"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { animate, AnimatePresence, motion, useIsPresent, useMotionValue, useTransform } from "motion/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Icons from "@/components/icons"

export const OurWorkButton: React.FC = () => {
	const ref = useRef<HTMLDivElement>(null)
	const [size, setSize] = useState({ width: 0, height: 0 })
	const [isModalOpen, setIsModalOpen] = useState(false)

	useEffect(() => {
		const updateSize = () => {
			if (ref.current) {
				setSize({
					width: ref.current.clientWidth || 0,
					height: ref.current.clientHeight || 0,
				})
			}
		}

		updateSize()
		window.addEventListener("resize", updateSize)
		return () => window.removeEventListener("resize", updateSize)
	}, [ref])

	const deform = useMotionValue(0)
	const rotateX = useTransform(() => deform.get() * -5)
	const skewY = useTransform(() => deform.get() * -1.5)
	const scaleY = useTransform(() => 1 + deform.get() * 0.1)
	const scaleX = useTransform(() => 1 - deform.get() * 0.1 * 0.6)

	const handleButtonClick = () => {
		setIsModalOpen(true)

		animate([
			[deform, 1, { duration: 0.3, ease: [0.65, 0, 0.35, 1] }],
			[deform, 0, { duration: 1.5, ease: [0.22, 1, 0.36, 1] }],
		])
	}

	const handleClose = () => {
		setIsModalOpen(false)
	}

	return (
		<div className={`warp-overlay-container w-full`} ref={ref}>
			<motion.div
				className="warp-content w-full flex justify-center"
				style={{
					rotateX,
					skewY,
					scaleY,
					scaleX,
					originX: 0.5,
					originY: 0,
					transformPerspective: 500,
					willChange: "transform",
				}}
			>
				<Button onClick={handleButtonClick} className="w-full">
					our work
				</Button>
			</motion.div>
			<AnimatePresence>
				{isModalOpen && (
					<WarpModal
						size={size}
						onClose={handleClose}
					/>
				)}
			</AnimatePresence>
		</div>
	)
}

interface WarpModalProps {
	onClose: () => void
	size: { width: number; height: number }
}

function WarpModal({ onClose, size }: WarpModalProps) {
	const transition = {
		duration: 0.35,
		ease: [0.59, 0, 0.35, 1],
	}

	const enteringState = {
		rotateX: 0,
		skewY: 0,
		scaleY: 1,
		scaleX: 1,
		y: 0,
		transition: {
			...transition,
			y: { type: "spring", visualDuration: 0.7, bounce: 0.2 },
		},
	}

	const exitingState = {
		rotateX: -5,
		skewY: -1.5,
		scaleY: 2,
		scaleX: 0.4,
		y: 100,
	}

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose()
			}
		}

		document.addEventListener("keydown", handleEscape)
		return () => document.removeEventListener("keydown", handleEscape)
	}, [onClose])

	return (
		<div className="fixed inset-0 z-50 overflow-hidden" onClick={onClose}>
			<GradientOverlay size={size} />
			<motion.div
				className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={transition}
			>
				<motion.div
					className="bg-background border border-border rounded-lg shadow-lg w-full max-w-md mx-auto p-6 z-50"
					onClick={(e) => e.stopPropagation()}
					initial={exitingState}
					animate={enteringState}
					exit={exitingState}
					transition={transition}
					style={{
						transformPerspective: 1000,
						originX: 0.5,
						originY: 0,
					}}
				>
					<div className="space-y-2 text-center">
						<h2 className="text-xl font-black tracking-tight">Where would you like to go?</h2>
						<p className="text-sm text-muted-foreground">All other projects are on our GitHub.</p>
					</div>
					<div className="flex flex-col gap-4 mt-6 justify-center">
						<Link href="https://campsite.chat" className="w-full">
							<Button variant="outline" className="w-full">
								<Icons.Campsite className="size-5" /> Campsite Chat
							</Button>
						</Link>
						<Link href="https://miru.nordstud.io" className="w-full">
							<Button variant="outline" className="w-full">
								<Icons.Miru className="size-5" /> Miru
							</Button>
						</Link>
						<Link href="https://katarogu.moe" className="w-full">
							<Button variant="outline" className="w-full">
								<Icons.Katarogu className="size-5" /> Katarogu
							</Button>
						</Link>
						<Link href="https://github.com/nord-studio/ripojitori" className="w-full">
							<Button variant="outline" className="w-full">
								<Icons.Ripojitori className="size-5" /> Ripojitori
							</Button>
						</Link>
						<hr />
						<Link href="https://github.com/nord-studio" className="w-full">
							<Button variant="outline" className="w-full">
								<Icons.Github className="size-5" /> GitHub
							</Button>
						</Link>
					</div>
				</motion.div>
			</motion.div>
		</div>
	)
}

function GradientOverlay({
	size,
}: {
	size: { width: number; height: number }
}) {
	const breathe = useMotionValue(0)
	const isPresent = useIsPresent()
	const [windowSize, setWindowSize] = useState({
		width: typeof window !== "undefined" ? window.innerWidth : 0,
		height: typeof window !== "undefined" ? window.innerHeight : 0,
	})

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}

		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	useEffect(() => {
		if (!isPresent) {
			animate(breathe, 0, { duration: 0.5, ease: "easeInOut" })
		}

		async function playBreathingAnimation() {
			await animate(breathe, 1, {
				duration: 0.5,
				delay: 0.35,
				ease: [0, 0.55, 0.45, 1],
			})

			animate(breathe, [null, 0.7, 1], {
				duration: 15,
				repeat: Number.POSITIVE_INFINITY,
				repeatType: "loop",
				ease: "easeInOut",
			})
		}

		playBreathingAnimation()
	}, [isPresent, breathe])

	const enterDuration = 0.75
	const exitDuration = 0.5

	const expandingCircleRadius = size.width / 2
	const circleSize = Math.max(windowSize.width, windowSize.height) * 1

	return (
		<div className="fixed inset-0 z-40 pointer-events-none">
			<motion.div
				className="absolute rounded-full filter blur-[12px]"
				initial={{
					scale: 0,
					opacity: 1,
					backgroundColor: "rgba(129, 161, 193, 1)", // Lighter #5e81ac
				}}
				animate={{
					scale: 20,
					opacity: 0.4,
					backgroundColor: "rgba(129, 161, 193, 0.5)", // #5e81ac
					transition: {
						duration: enterDuration,
						opacity: { duration: enterDuration, ease: "easeInOut" },
					},
				}}
				exit={{
					scale: 0,
					opacity: 1,
					backgroundColor: "rgba(129, 161, 193, 0.8)", // Lighter #5e81ac
					transition: { duration: exitDuration },
				}}
				style={{
					left: `calc(50% - ${expandingCircleRadius / 2}px)`,
					top: "100%",
					width: expandingCircleRadius,
					height: expandingCircleRadius,
					originX: 0.5,
					originY: 1,
				}}
			/>

			<motion.div
				className="absolute rounded-full filter blur-[100px]"
				initial={{ opacity: 0 }}
				animate={{
					opacity: 0.5,
					transition: { duration: enterDuration },
				}}
				exit={{
					opacity: 0,
					transition: { duration: exitDuration },
				}}
				style={{
					scale: breathe,
					width: circleSize,
					height: circleSize,
					top: -circleSize / 2,
					left: -circleSize / 2,
					backgroundColor: "rgba(129, 161, 193, 0.3)",
				}}
			/>

			<motion.div
				className="absolute rounded-full filter blur-[100px]"
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { duration: enterDuration },
				}}
				exit={{
					opacity: 0,
					transition: { duration: exitDuration },
				}}
				style={{
					scale: breathe,
					width: circleSize,
					height: circleSize,
					bottom: -circleSize / 2,
					right: -circleSize / 2,
					backgroundColor: "rgba(129, 161, 193, 0.3)",
				}}
			/>
		</div>
	)
}
