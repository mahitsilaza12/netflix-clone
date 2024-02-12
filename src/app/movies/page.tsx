'use client';
import { MovieService } from '@/Services/movies';
import { CardMovie } from '@/components/Movies/Card';
import { Loader } from '@/components/generals/loader';
import { Pagination } from '@/components/generals/pagination';
import { ReactElement, useEffect, useState } from 'react';

export default function Films() {
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const [films, setFilms] = useState({ results: [], total_pages: 500 });
	useEffect(() => {
		const response = MovieService.getMovies(currentPage)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setFilms(data);
				setIsLoading(false);
			});
	}, [currentPage]);
	return (
		films && (
			<>
				<Loader isLoading={isLoading} />
				<div className='flex flex-wrap'>
					{films.results.map((item: object, index: number) => {
						return <CardMovie movie={item} key={index} />;
					})}
				</div>
				{isLoading === false && (
					<Pagination
						totalPages={films.total_pages >= 500 ? 500 : films.total_pages}
						currentPage={currentPage}
						onPageChange={(pageChange: number) => {
							setIsLoading(true);
							setCurrentPage(pageChange);
						}}
					/>
				)}
			</>
		)
	);
}
