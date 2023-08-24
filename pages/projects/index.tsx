import { Layout } from "@/common/components";
import Head from "next/head";

export default function Projects() {
    return (
		<Layout>
			<Head>
				<title>Projects</title>
				<meta name="description" content="List of my Projects" />
				<meta name="robots" content="follow, index" />
			</Head>
			<div>Projects</div>
		</Layout>
	);
}
