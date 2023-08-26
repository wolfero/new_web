import Link from 'next/link';
import { CardProps } from './card.model';

const Card = ({ basePath, elements }: CardProps) => {
	return (
		<article className="p-4 md:p-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{elements.map(({ slug, preview, title }, index) => (
				<div
					className="border-2 border-red rounded-lg overflow-hidden hover:scale-105 transform transition-transform"
					key={index}
				>
					<Link href={`/${basePath}/${slug}`} className="h-full flex flex-col">
						<img src={preview} alt={title} className="w-full h-56 object-cover" />
						<div className="p-4 bg-dark/90 w-full flex-1 text-start">
							<h2 className="text-xl font-semibold">{title}</h2>
							<p className="text-sm text-light-red">Leer más</p>
						</div>
					</Link>
				</div>
			))}
		</article>
	);
};

export { Card };
