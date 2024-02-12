'use client';
import { ReactElement } from 'react';
import './menu.css';
import { Logo } from '../Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings } from './Settings';

const MENU = [
	{
		label: 'Home',
		link: '/home',
	},
	{
		label: 'TV Shows',
		link: '/tv-shows',
	},
	{
		label: 'Movies',
		link: '/movies',
	},
	{
		label: 'Latest',
		link: '/latest',
	},
	{
		label: 'My list',
		link: '/my-list',
	},
	{
		label: 'Browse by Languages',
		link: '/browse-lang',
	},
];

export const Menu = (): ReactElement => {
	const pathName = usePathname();

	return (
		<div className='navbar'>
			<div className='w-4/6 flex flex-wrap h-full'>
				<Logo />
				<div className='menu-item'>
					<ul>
						{MENU.map((item, index) => (
							<li key={index}>
								<Link
									className={`${
										pathName.includes(item.link) ? 'text-white' : ''
									}`}
									href={item.link}>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='w-2/6'>
				<div className='settings'>
					<Settings />
				</div>
			</div>
		</div>
	);
};
