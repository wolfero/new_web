import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import { serialize } from 'next-mdx-remote/serialize';
import { Layout } from '@/common/components';
import { Hero } from '@/common-app/components';
import { PostsDataProps } from '@/common-app/model';

export default function JobsPage({ posts }: PostsDataProps) {
	return (
		<Layout>
			<Head>
				<title>{posts.title}</title>
				<meta property="og:title" content={posts.title} />
				<meta property="og:type" content="article" />
				<meta property="og:image" content={posts.preview} />
			</Head>
			<Hero element={posts} />
		</Layout>
	);
}

type StaticPropsContext = {
	params: {
		slug: string;
	};
};

export const getServerSideProps = async (context: StaticPropsContext) => {
	const slug = context.params.slug;
	const jobsDirectory = path.join(process.cwd(), 'data', 'posts');
	const filePath = path.join(jobsDirectory, `${slug}.mdx`);
	const fileContents = fs.readFileSync(filePath, 'utf8');
	const { data, content } = matter(fileContents);
	const mdxSource = await serialize(content);
	const posts = {
		title: data.title,
		date: data.date,
		preview: data.preview,
		content,
		mdxSource,
	};

	return {
		props: {
			posts,
		},
	};
};
