'use client';
import '@/../globals.css';
import { Footer, Navbar } from '@/common-app/components';
import { Particles } from '..';
import { siteMetadata } from '@/data/constants/siteMetadata';
import Head from 'next/head';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className="flex flex-col items-center justify-between h-screen w-screen overflow-x-hidden">
			<Head>
				<link rel="icon" href={siteMetadata.icons.shortcut} />
			</Head>
			<Navbar />
			<Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={400} />
			<div className="flex flex-col items-center justify-center">{children}</div>
			<Footer />
		</section>
	);
};

export default Layout;
