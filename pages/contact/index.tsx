import { Layout } from '@/common/components';
import Head from 'next/head';
import { socialLinks } from '@/data/constants/socialLinks';
import { ContactCard } from '@/common-app/components';

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
					<ContactCard social={social} key={index} />
				))}
			</div>
		</Layout>
	);
}
