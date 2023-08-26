import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import { Card } from '@/common-app/components';
import { Layout, Pagination } from '@/common/components';
import { PageBlogProps, Post } from '@/common-app/model';

export default function PageBlog({ posts, page, totalPages }: PageBlogProps) {
	return (
		<Layout>
			<Head>
				<title>Blog</title>
				<meta name="description" content="List of Posts." />
				<meta name="robots" content="follow, index" />
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_BASE_URL}/blog?page=${page}`}
				/>
			</Head>
			<Card basePath="blog" elements={posts} />
			{<Pagination basePath="blog" page={page} totalPages={totalPages} />}
		</Layout>
	);
}

type StaticPropsContext = {
	params: {
		number: string;
	};
};

export const getServerSideProps = async (context: StaticPropsContext) => {
	const postsDirectory = path.join(process.cwd(), 'data', 'posts');
	const filenames = fs.readdirSync(postsDirectory).filter((fn) => fn.endsWith('.mdx'));
	const allPosts: Post[] = filenames.map((filename) => {
		const filePath = path.join(postsDirectory, filename);
		const fileContents = fs.readFileSync(filePath, 'utf8');
		const { data } = matter(fileContents);

		return {
			title: data.title,
			slug: filename.replace('.mdx', ''),
			date: data.date,
			preview: data.preview,
			tags: data.tags,
		};
	});
	const sortedPosts: Post[] = allPosts.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	const POSTS_PER_PAGE = 9;
	const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
	const currentPage = context.params?.number ? parseInt(context.params.number, 10) : 1;
	const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
	const endIndex = startIndex + POSTS_PER_PAGE;
	const paginatedPosts = sortedPosts.slice(startIndex, endIndex);

	return {
		props: {
			posts: paginatedPosts,
			page: currentPage,
			totalPages,
		},
	};
};
