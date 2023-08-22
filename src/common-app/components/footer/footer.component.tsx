'use client';
import { useState } from 'react';
import { TfiEmail } from 'react-icons/tfi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { socialLinks } from '@/data/constants/socialLinks';

const Footer = () => {
	const [tooltipVisible, setTooltipVisible] = useState(false);

	const handleEmailClick = () => {
		navigator.clipboard.writeText(socialLinks.gmail);
		setTooltipVisible(true);
		setTimeout(() => setTooltipVisible(false), 1000);
	};

	return (
		<footer className="animate-fade-in p-4 border-t-2 container mx-auto flex justify-between items-center md:flex-row flex-col">
			<div className="text-lg font-bold">
				<p role="author">Frantisek Klucar - {new Date().getFullYear()}</p>
			</div>
			<div className="flex space-x-4 mt-4 md:mt-0">
				<button
					onClick={handleEmailClick}
					className="relative hover:text-lightViolet"
					title="Gmail"
				>
					<TfiEmail size={30} />
					{tooltipVisible && (
						<span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-white text-xs px-2 py-1 rounded shadow-lg">
							Copiado al portapapeles
						</span>
					)}
				</button>

				<a
					href={socialLinks.github}
					className="text-lightGreen hover:text-lightViolet"
					target="_blank"
					title="Github"
				>
					<FaGithub size={27} />
				</a>

				<a
					href={socialLinks.linkedIn}
					className="text-lightGreen hover:text-lightViolet"
					target="_blank"
					title="Linkedin"
				>
					<FaLinkedin size={27} />
				</a>
			</div>
		</footer>
	);
};

export { Footer };
