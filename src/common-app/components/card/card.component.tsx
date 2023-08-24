import Link from 'next/link';
import { CardProps } from './card.model';

const Card = ({ basePath, elements }: CardProps) => {
	return (
		<article className="container mx-auto p-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{elements.map(({ slug, preview, title }, index) => (
				<div
					className="border-2 border-red rounded-lg overflow-hidden hover:scale-105 transform transition-transform"
					key={index}
				>
					<Link href={`/${basePath}/${slug}`}>
						<img src={preview} alt={title} className="w-full h-80 object-cover" />
						<div className="p-4 absolute bottom-0 bg-dark/70 w-full">
							<h2 className="text-xl font-semibold">{title}</h2>
							<p className="text-sm text-gray-300">Leer más</p>
						</div>
					</Link>
				</div>
			))}
		</article>
	);
};

export { Card };
