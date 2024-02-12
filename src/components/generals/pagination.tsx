import { ReactElement } from 'react';

// type Function = () => {};
interface IPagination {
	totalPages: number;
	currentPage: number;
	onPageChange: Function;
}

export const Pagination = ({
	totalPages,
	currentPage,
	onPageChange,
}: IPagination): ReactElement => {
	const renderPageNumbers = () => {
		const pages = [];
		const adjacentPageCount = 2;

		if (totalPages <= 10) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else if (currentPage <= 10) {
			for (let i = 1; i <= 10; i++) {
				pages.push(i);
			}
			pages.push('...');
			for (let i = totalPages - 5; i <= totalPages; i++) {
				pages.push(i);
			}
		} else if (currentPage >= totalPages - 9) {
			for (let i = 1; i <= 5; i++) {
				pages.push(i);
			}
			pages.push('...');
			for (let i = totalPages - 10; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			for (
				let i = currentPage - adjacentPageCount;
				i <= currentPage + adjacentPageCount;
				i++
			) {
				pages.push(i);
			}
			pages.unshift('...');
			pages.unshift(1);
			pages.push('...');
			for (let i = totalPages - 1; i <= totalPages; i++) {
				pages.push(i);
			}
		}

		return pages;
	};

	return (
		(renderPageNumbers().length !== 1 && (
			<div className='flex flex-wrap gap-4 w-full justify-center items-center'>
				{currentPage != 1 && (
					<span
						onClick={() => onPageChange(currentPage - 1)}
						className='px-4 py-2 border-[1px] border-solid font-bold text-white cursor-pointer'>
						<i className='fa fa-chevron-left text-sm'></i>
						<i className='fa fa-chevron-left text-sm'></i> Prev
					</span>
				)}
				{renderPageNumbers().map((page, index) => (
					<span
						key={index}
						onClick={() => onPageChange(page)}
						className={`px-4 py-2 border-[1px] border-solid font-bold cursor-pointer ${
							currentPage === page ? 'bg-white/35' : 'text-white '
						}`}>
						{page}
					</span>
				))}
				{currentPage != totalPages && (
					<span
						onClick={() => onPageChange(currentPage + 1)}
						className='px-4 py-2 border-[1px] border-solid font-bold text-white cursor-pointer'>
						Next <i className='fa fa-chevron-right text-sm'></i>
						<i className='fa fa-chevron-right text-sm'></i>
					</span>
				)}
			</div>
		)) || <></>
	);
};
