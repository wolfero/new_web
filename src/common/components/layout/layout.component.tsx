'use client';
import '@/../globals.css';
import { Navbar } from '@/common-app/components';
import { Particles } from '..';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-light-red/5 to-black">
			<Navbar />
			<Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={400} />
			<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
				{children}
			</div>
		</main>
	);
};

export default Layout;
