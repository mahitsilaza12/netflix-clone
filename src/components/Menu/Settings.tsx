'use client';
import { MovieService } from '@/Services/movies';
import { useSearchParams } from 'next/navigation';
import { ReactElement, useState } from 'react';

export const Settings = (): ReactElement => {
	const params = useSearchParams();
	const keywordParams: string = params.get('keyword')!;
	const [keyword, setKeyword] = useState(keywordParams || '');

	const searchForMovie = () => {
		if (keyword != '') {
			window.location.href = '/movies/search?keyword=' + keyword;
		}
	};

	return (
		<>
			<div className='flex items-center gap-4'>
				<div className='border-[1px] border-solid border-white p-2 hidden sm:flex gap--2 justify-center items-center'>
					<i
						className='fa fa-search text-white mr-1 cursor-pointer'
						onClick={searchForMovie}></i>
					<input
						type='text'
						value={keyword}
						onKeyUp={(e) => {
							if (e.code === 'Enter') {
								searchForMovie();
							}
						}}
						onChange={(e) => {
							setKeyword(e.target.value);
						}}
						className=' focus:outline-none bg-[#0d0d0d] text-white mr-1'
					/>
					{keyword.length !== 0 && (
						<i
							className='fa fa-xmark text-white cursor-pointer'
							onClick={() => setKeyword('')}></i>
					)}
				</div>
				<i className='cursor-pointer fa fa-bell text-white'></i>
				<i className='cursor-pointer fa fa-user text-white'></i>
			</div>
		</>
	);
};
