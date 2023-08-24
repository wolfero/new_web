import { Layout } from '@/common/components';
import Head from 'next/head';

export default function About() {
	return (
		<Layout>
			<Head>
				<title>About</title>
				<meta name="description" content="About me" />
				<meta name="robots" content="follow, index" />
			</Head>
			<div>about</div>
		</Layout>
	);
}
