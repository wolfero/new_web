import { Layout } from "@/common/components";
import Head from "next/head";

export default function Contact() {
    return (
		<Layout>
			<Head>
				<title>Contact</title>
				<meta name="description" content="Contact me" />
				<meta name="robots" content="follow, index" />
			</Head>
			<div>Contact</div>
		</Layout>
	);
}
