import { ReactElement } from 'react';
import './loader.css';

export const Loader = (params: { isLoading: boolean }): ReactElement => {
	return (
		(params.isLoading && (
			<div className='bg-gray-700/95 z-50 fixed h-screen w-full top-0 left-0 flex justify-center items-center'>
				<div className='lds-grid'>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		)) || <></>
	);
};
