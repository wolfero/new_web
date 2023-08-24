import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { HeroProps } from './hero.model';
import { MDXComponents } from '@/common/components';

const Hero = ({ element }: HeroProps) => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	return (
		<article className="">
			<section className="py-2 bg-red rounded-t-xl">
				<h1 className="text-center text-2xl">{element.date}</h1>
				<h1 className="text-center text-5xl">{element.title}</h1>
			</section>
			<section className="markdown-body flex flex-col justify-center content-center w-full bg-medium-red/40 p-10 rounded-b-xl">
				<div className="w-full px-4 md:px-0 md:max-w-5xl">
					<MDXRemote {...element.mdxSource} components={MDXComponents} />
				</div>
			</section>
			<section className="flex my-8 justify-center items-center">
				<button onClick={handleBack}>
					<FaAngleDoubleLeft size={35} />
				</button>
			</section>
		</article>
	);
};

export { Hero };
