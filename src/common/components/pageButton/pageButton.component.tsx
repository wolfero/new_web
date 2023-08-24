import Link from 'next/link';

export const PageButton = ({ href, icon }: PageButtonProps) => {
	return (
		<Link href={href}>
			<p className="text-lg cursor-pointer">{icon}</p>
		</Link>
	);
};
