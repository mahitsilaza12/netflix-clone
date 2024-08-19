'use client';
import { MovieService } from '@/Services/movies';
import { CardMovie } from '@/components/Movies/Card';
import { Loader } from '@/components/generals/loader';
import { Pagination } from '@/components/generals/pagination';
import { useSearchParams } from 'next/navigation';
import { ReactElement, useEffect, useState } from 'react';

export default function Search(): ReactElement {
	const params = useSearchParams();
	const keyword: string = params.get('keyword')!;

	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const [similar, setSimilar] = useState([]);
	const [films, setFilms] = useState({
		results: [],
		total_pages: 500,
		total_results: 0,
	});

	useEffect(() => {
		setIsLoading(true);
		MovieService.searchKeyword(keyword)
			.then((res) => res.json())
			.then((data) => setSimilar(data.results));
		MovieService.searchMovie(keyword!, currentPage)
			.then((res) => res.json())
			.then((data) => {
				setFilms(data);
			})
			.finally(() => setIsLoading(false));
	}, [params, keyword, currentPage]);
	return (
		<>
			<h1 className='p-4 text-2xl'>
				Results for {keyword} : {films.total_results} movie(s)
			</h1>
			<div className='p-4 text-2xl mb-4'>
				More to explore :{' '}
				{similar.map((item: any, index: any) => {
					return (
						<span className='capitalize mr-4 hover:text-blue-600' key={index}>
							<a href={`/movies/search?keyword=${item.name}`}>{item.name}</a> |
						</span>
					);
				})}
			</div>
			<Loader isLoading={isLoading} />
			<div className='flex flex-wrap'>
				{films.results.map((item: object, index: number) => {
					return <CardMovie movie={item} key={index} />;
				})}
			</div>

			{!isLoading && (
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
	);
}
