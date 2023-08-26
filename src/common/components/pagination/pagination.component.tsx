import Link from 'next/link';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { PageButton } from '..';
import { getPaginationNumbers } from './pagination.container';

const Pagination = ({ basePath, page, totalPages }: PaginationProps) => {
	const paginationNumbers = getPaginationNumbers(page, totalPages);

	return (
		<div className="flex justify-center items-center space-x-4 my-8">
			{/* Ir a la primera página */}
			{page > 1 && (
				<PageButton href={`/${basePath}/page/1`} icon={<FaAngleDoubleLeft size={35} />} />
			)}

			{/* Ir a la página anterior */}
			{page > 1 && (
				<PageButton
					href={`/${basePath}/page/${page - 1}`}
					icon={<FaAngleLeft size={35} />}
				/>
			)}

			<div className="hidden sm:flex gap-1">
				{paginationNumbers.map((number) => (
					<Link key={number} href={`/${basePath}/page/${number}`}>
						<p
							className={`p-4 text-lg text-center rounded cursor-pointer ${
								page === number
									? ' bg-light-red'
									: 'hover:bg-medium-red'
							}`}
						>
							{number}
						</p>
					</Link>
				))}
			</div>

			{/* Ir a la página siguiente */}
			{page < totalPages && (
				<PageButton
					href={`/${basePath}/page/${page + 1}`}
					icon={<FaAngleRight size={35} />}
				/>
			)}

			{/* Ir a la última página */}
			{page < totalPages && (
				<PageButton
					href={`/${basePath}/page/${totalPages}`}
					icon={<FaAngleDoubleRight size={35} />}
				/>
			)}
		</div>
	);
};
export { Pagination };
