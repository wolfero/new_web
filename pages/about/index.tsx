import { Image, Layout } from '@/common/components';
import Head from 'next/head';

export default function About() {
	return (
		<Layout>
			<Head>
				<title>About</title>
				<meta name="description" content="About me" />
				<meta name="robots" content="follow, index" />
				<meta property="og:image" content="/assets/wolfero.png" />
			</Head>
			<section className="md:mx-10 pb-10">
				<div className="flex flex-col justify-center content-center bg-black/60 rounded-xl p-4  pt-0 lg:p-8 lg:pt-0">
					<div className="flex flex-col items-center p-4">
						<Image
							src="/assets/avatar-transparent.svg"
							alt="avatar"
							width={300}
							height={300}
							className="rounded-full"
						/>
						<h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
							Frantisek Klucar
						</h3>
						<p>BackEnd Developer</p>
						<p>PWC</p>
					</div>
					<article className="flex flex-col gap-2 font-mono text-center lg:text-justify">
						<p>
							Hello! My name is Frantisek Klucar, but you can call me Fero. I am a
							Slovak who has made Tenerife his home since 2006. From a young age, I
							have had a special fascination with computers, a passion that has grown
							and evolved with me over the years.
						</p>
						<p>
							My journey in the world of programming began seriously when I entered an
							advanced cycle of web application development. It was there that I fell
							completely in love with programming. During the first year, I immersed
							myself in Backend languages such as C# and PHP, later expanding my
							knowledge with Java and JavaScript in the second year. Although I have
							always had a leaning towards the Frontend, I continue to strive to
							improve in the Backend as well. This year, I completed my
							master&apos;s in Frontend at Lemoncode, an experience that not only
							honed my technical skills but also provided me with a deeper
							understanding of the best practices in the industry. Currently, I am
							dedicating time to deepen my knowledge in React, as well as to hone my
							skills in TDD and TypeScript in the Frontend domain.
						</p>
						<p>
							My goals for the future are clear: I aspire to become a reference Full
							Stack developer, known for creating innovative and functional solutions.
							I am open to collaborations and always looking for opportunities to grow
							and learn. I would love to connect with other professionals and
							enthusiasts in the field! Feel free to get in touch with me to discuss
							collaborations or potential projects.
						</p>
					</article>
				</div>
			</section>
		</Layout>
	);
}
