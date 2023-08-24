'use client';
import '@/../globals.css';
import { Footer, Navbar } from '@/common-app/components';
import { Particles } from '..';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex flex-col items-center justify-between h-screen w-screen overflow-hidden">
			<Navbar />
			<Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={400} />
			<div className="flex flex-col items-center justify-center">{children}</div>
			<Footer />
		</main>
	);
};

export default Layout;
