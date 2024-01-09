'use client';
import NavMobile from '@/components/Navbar/NavbarMobile';
import NavBar from '@/components/Navbar/NavBar';
import { useState } from 'react';
import Hero from '@/components/Hero/Hero';

export default function HomePage() {
	const [nav, setNav] = useState(false);

	const handleShowNav = () => setNav(true);
	const handleCloseNav = () => setNav(false);

	return (
		<div className='overflow-x-hidden'>
			<NavMobile
				showNav={nav}
				closeNav={handleCloseNav}
			/>

			<NavBar openNav={handleShowNav} />

			<Hero />
		</div>
	);
}
