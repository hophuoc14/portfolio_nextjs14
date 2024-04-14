"use client";

import Image from "next/image";
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import {FaGithubSquare} from "react-icons/fa";
import {useSectionInView} from "@/lib/hooks";
import {useActiveSectionContext} from "@/context/active-section-context";
import {TypeAnimation} from "react-type-animation";
import 'animate.css';

export default function Intro() {
	const {ref} = useSectionInView("Home", 0.5);
	const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();
	
	const listContent = ["fullstack", "frontend", "reactjs"]
	const [contents, setContents] = useState(listContent)
	const [animationClass, setAnimationClass] = useState('animate__animated animate__fadeInUp')
	
	const MountedAnimation = () => {
		if(animationClass === 'animate__animated animate__fadeInUp') return <span className={`font-bold animate__animated animate__fadeInUp`}>{contents[1]} developer</span>
		return <span className={`font-bold animate__animated animate__fadeOutUp`}>{contents[1]} developer</span>
	}
	
	useEffect(() => {
		setInterval(() => {
			setTimeout(() => setAnimationClass('animate__animated animate__fadeOutUp'),1)
			
			setTimeout(() => {
				setContents(state => {
					const first = state[state.length - 1]
					const second = state[state.length - 3]
					const last = state[state.length - 2]
					return [first, second, last]
				})
				setAnimationClass('animate__animated animate__fadeInUp')
			}, 500)
		}, 4000)
	}, []);
	
	return (
		<section
			ref={ref}
			id="home"
			className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
		>
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{opacity: 0, scale: 0}}
						animate={{opacity: 1, scale: 1}}
						transition={{
							type: "tween",
							duration: 0.2,
						}}
					>
						<Image
							src="/avatar.jpg"
							alt="AnonyDev portrait"
							width="192"
							height="192"
							quality="95"
							priority={true}
							className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
						/>
					</motion.div>
					
					<motion.span
						className="absolute bottom-[-1px] right-[-4px] text-4xl"
						initial={{opacity: 0, scale: 0}}
						animate={{opacity: 1, scale: 1}}
						transition={{
							type: "spring",
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}
					>
						😈
					</motion.span>
				</div>
			</div>
			
			<motion.h1
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
				initial={{opacity: 0, y: 100}}
				animate={{opacity: 1, y: 0}}
			>
				<p className="font-bold" style={{
					background: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
				}}>
					<TypeAnimation
						sequence={[
							'Hi guys, I\'m AnonyDev',
							5000,
							// 'Hi guys, I\'m',
							// 500,
						]}
						speed={{type: 'keyStrokeDelayInMs', value: 200}}
					/>
				</p>
				<span>I'm a{" "}</span>
				<div className="textBox" style={{display: "inline-block"}}>
					<div className="boxAbs">
						{/*<span className={`font-bold ${animationClass}`}>{contents[1]} developer</span>*/}
						<MountedAnimation />
					</div>
				</div>
				{/*<span className="font-bold">more than 1 years</span> of experience. I enjoy*/}
				{/*building <span className="italic">sites & apps</span>. My focus is{" "}*/}
				{/*<span className="underline">React (Next.js)</span>.*/}
			</motion.h1>
			
			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
				initial={{opacity: 0, y: 100}}
				animate={{opacity: 1, y: 0}}
				transition={{
					delay: 0.1,
				}}
			>
				<Link
					href="#contact"
					className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
					onClick={() => {
						setActiveSection("Contact");
						setTimeOfLastClick(Date.now());
					}}
				>
					Contact me here{" "}
					<BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
				</Link>
				
				<a
					className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
					href="/CV.pdf"
					download
				>
					Download CV{" "}
					<HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
				</a>
				
				<a
					className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://linkedin.com"
					target="_blank"
				>
					<BsLinkedin/>
				</a>
				
				<a
					className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://github.com"
					target="_blank"
				>
					<FaGithubSquare/>
				</a>
			</motion.div>
		</section>
	);
}
