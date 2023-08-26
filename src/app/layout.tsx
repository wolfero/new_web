import '@/public/styles/globals.css';
import type { Metadata } from 'next';
import { Analytics, Layout } from '@/common/components';
import { siteMetadata } from '@/data/constants/siteMetadata';

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<Analytics />
			</head>
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
