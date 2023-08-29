'use client';
import { useState } from 'react';
import { socialLinks } from '@/data/constants/socialLinks';

const Footer = () => {
	const [tooltipVisible, setTooltipVisible] = useState(false);

	const handleEmailClick = () => {
		navigator.clipboard.writeText(socialLinks[1].href);
		setTooltipVisible(true);
		setTimeout(() => setTooltipVisible(false), 2000);
	};

	return (
		<footer className="p-4 border-t-2 container mx-auto flex justify-between items-center md:flex-row flex-col">
			<div className="text-lg font-bold">
				<p role="author">Frantisek Klucar - {new Date().getFullYear()}</p>
			</div>
			<div className="flex space-x-4 mt-4 md:mt-0">
				{socialLinks.map((social, index) =>
					social.title === 'Email' ? (
						<button
							key={index}
							title={social.title}
							onClick={handleEmailClick}
							className="relative hover:text-red"
						>
							{social.icon}
							{tooltipVisible && (
								<span className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-white bg-red text-xs px-2 py-1 rounded">
									Copiado al portapapeles
								</span>
							)}
						</button>
					) : (
						<a
							key={index}
							target="_blank"
							title={social.title}
							href={social.href}
							className="hover:text-red"
						>
							{social.icon}
						</a>
					)
				)}
			</div>
		</footer>
	);
};

export { Footer };
