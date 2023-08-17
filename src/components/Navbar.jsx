import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
	const [active, setActive] = useState(' ');
	const [toggle, setToggle] = useState(false);

	return (
		<nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
			<div className='flex items-center justify-between w-full mx-auto max-w-7xl'>
				<Link
					to='/'
					className='flex items-center gap-2'
					onClick={() => {
						setActive('');
						window.scrollTo(0, 0);
					}}
				>
					<img
						src={logo}
						alt='logo'
						className='object-contain w-9 h-9'
					/>
					<p className='flex text-white text-[18px] font-bold cursor-pointer'>
						Ben &nbsp; <span className='hidden sm:block'>| &nbsp; Portfolio</span>
					</p>
				</Link>
				<ul className='hidden gap-10 list-none sm:flex'>
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${active === link.id ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
						>
							<Link
								to={`/#${link.id}`}
								onClick={() => setActive(link.id)}
							>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
				{/* Mobile Nav */}
				<div className='flex items-center justify-end flex-1 sm:hidden'>
					<img
						src={toggle ? close : menu}
						alt='menu'
						className='w-[28px] h-[28px] object-contain cursor-pointer'
						onClick={() => setToggle(!toggle)}
					/>
					<div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl absolute `}>
						<ul className='flex flex-col items-start justify-end gap-4 list-none'>
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${active === link.id ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
								>
									<Link
										to={`/#${link.id}`}
										onClick={() => {
											setToggle(!toggle);
											setActive(link.id);
										}}
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
