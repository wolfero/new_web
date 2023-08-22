import Link from 'next/link';
import { routes } from '@/core';

const Navbar = () => {
	return (
		<nav className="my-8 animate-fade-in">
			<ul className="flex items-center justify-center gap-4">
				{routes.map((route) => (
					<Link
						key={route.href}
						href={route.href}
						className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
					>
						{route.name}
					</Link>
				))}
			</ul>
		</nav>
	);
};

export { Navbar };
