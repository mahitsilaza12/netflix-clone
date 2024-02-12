import Image from 'next/image';
import { ReactElement, ReactHTMLElement } from 'react';

export const Logo = (): ReactElement => {
	return (
		<Image
			src='/img/netflix.png'
			alt='Netflix logo'
			width={200}
			className='h-full object-cover'
			height={24}
			priority
		/>
	);
};
