import Link from 'next/link';
import React from 'react';
import { Particles } from '@/common/components';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={400} />
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Frantisek Klucar
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					Hi my name is Fero, which is short for Frantisek. I&apos;m Backend specialist at{' '}
					<Link
						target="_blank"
						href="https://pwc.com"
						className="underline duration-500 hover:text-zinc-300"
					>
						PWC
					</Link>
					<br />
					and I recently finished my master&apos;s in Frontend at{' '}
					<Link
						target="_blank"
						href="https://lemoncode.net/"
						className="underline duration-500 hover:text-zinc-300"
					>
						Lemoncode
					</Link>{' '}
				</h2>
			</div>
		</div>
	);
}
