import { ContactCardContentProps } from './concatCard.model';

export default function ContactCardContent({ social }: ContactCardContentProps) {
	return (
		<>
			<span
				className="absolute z-10 w-px h-2/3 bg-gradient-to-b from-red via-red to-transparent"
				aria-hidden="true"
			/>
			<span className="relative z-20 flex items-center justify-center w-12 h-12 text-sm duration-1000 rounded-full bg-light-red">
				{social.icon}
			</span>
			<div className="z-10 flex flex-col items-center">
				<span className="text-xl font-medium duration-150 lg:text-3xl">{social.title}</span>
			</div>
		</>
	);
}
