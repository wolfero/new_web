import { Layout } from '@/common/components';
import Head from 'next/head';
import Link from 'next/link';
import { socialLinks } from '@/data/constants/socialLinks';

export default function Contact() {
	return (
		<Layout>
			<Head>
				<title>Contact</title>
				<meta name="description" content="Contact me" />
				<meta name="robots" content="follow, index" />
			</Head>
			<div className="flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-center lg:justify-between lg:flex-nowrap px-8">
				{socialLinks.map((social, index) => (
					<div
						className="relative overflow-hidden w-full md:w-1/3 duration-700 border rounded-xl group bg-dark/80 hover:scale-110 transform transition-transform"
						key={index}
					>
						<Link
							href={social.href}
							target="_blank"
							className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
						>
							<span
								className="absolute z-10 w-px h-2/3 bg-gradient-to-b from-red via-red to-transparent"
								aria-hidden="true"
							/>
							<span className="relative z-20 flex items-center justify-center w-12 h-12 text-sm duration-1000 rounded-full bg-light-red">
								{social.icon}
							</span>{' '}
							<div className="z-10 flex flex-col items-center">
								<span className="text-xl font-medium duration-150 lg:text-3xl">
									{social.title}
								</span>
							</div>
						</Link>
					</div>
				))}
			</div>
		</Layout>
	);
}
