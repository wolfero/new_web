import '@/../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LocalFont from 'next/font/local';
import { Analytics, Layout } from '@/common/components';

export const metadata: Metadata = {
	title: {
		default: 'Frantisek Klucar',
		template: 'Frantisek Klucar',
	},
	description: 'Backend specialist at pwc.com and self-taught Frontend trainee.',
	openGraph: {
		title: 'Frantisek Klucar',
		description: 'Backend specialist at pwc.com and self-taught Frontend trainee.',
		url: 'https://wolfero.dev',
		siteName: 'Frantisek Klucar',
		images: [
			{
				url: 'https://wolfero.dev/wolfero.png',
				width: 1920,
				height: 1080,
			},
		],
		locale: 'es-ES',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		shortcut: './wolfero.png',
	},
};
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const calSans = LocalFont({
	src: '../../public/fonts/CalSans-SemiBold.ttf',
	variable: '--font-calsans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(' ')}>
			<head>
				<Analytics />
			</head>
			<body className="overflow-hidden bg-gradient-to-tl from-black via-light-red/40 to-black">
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
