export type Post = {
    title: string;
    slug: string;
    date: string;
    preview: string;
    tags: string[];
};

export type PageBlogProps = {
    posts: Post[];
    page: number;
    totalPages: number;
}

export type PostsData = {
    title: string;
    date: string;
    preview: string;
    content: string;
    mdxSource: any;
};

export type PostsDataProps = {
    posts: PostsData;
};