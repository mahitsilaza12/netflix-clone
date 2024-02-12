import { ReactElement } from 'react';
import './card.css';
import { getImage } from '@/helpers/getImage';
export const CardMovie = (params: any): ReactElement => {
	const movie = params.movie;
	return (
		<div className='card'>
			<img
				src={getImage(movie.poster_path)}
				alt={'Image of the movie : ' + movie.title}
				className='h-[100%] w-full object-contain object-top'
			/>
		</div>
	);
};
