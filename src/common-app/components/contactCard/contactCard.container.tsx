import Link from 'next/link';
import { useState } from 'react';
import { socialLinks } from '@/data/constants/socialLinks';
import ContactCardContent from './contactCard.component';
import { ContactCardProps } from './concatCard.model';

export default function ContactCard({ social }: ContactCardProps) {
	const [tooltipVisible, setTooltipVisible] = useState(false);

	const handleEmailClick = () => {
		navigator.clipboard.writeText(socialLinks[1].href);
		setTooltipVisible(true);
		setTimeout(() => setTooltipVisible(false), 2000);
	};

	return (
		<div
			className="relative overflow-hidden w-full md:w-1/3 duration-700 border rounded-xl group bg-dark/80 hover:scale-110 transform transition-transform cursor-pointer"
		>
			{social.title === 'Email' ? (
				<div
					onClick={handleEmailClick}
					className="relative flex flex-col items-center"
				>
					{tooltipVisible && (
						<span className="absolute z-30 top-1/3 md:top-3/4 bg-red text-sm px-4 py-2 rounded text-center">
							Copiado al portapapeles
						</span>
					)}
					<button
						title={social.title}
						className="w-full m-0 p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
					>
						<ContactCardContent social={social} />
					</button>
				</div>
			) : (
				<Link
					href={social.href}
					target="_blank"
					className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
				>
					<ContactCardContent social={social} />
				</Link>
			)}
		</div>
	);
}
