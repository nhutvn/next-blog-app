import { XMarkIcon } from '@heroicons/react/20/solid';

interface IProps {
	showNav: boolean;
	closeNav: () => void;
}

const NavMobile = ({ showNav, closeNav }: IProps) => {
	const navTranslate = showNav ? 'translate-x-0' : 'translate-x-[-100%]';
	return (
		<div
			className={`fixed ${navTranslate} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}>
			<div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
				<div className='nav-link-mobile'>PROJECT</div>
				<div className='nav-link-mobile'>SOCIAL</div>
				<div className='nav-link-mobile'>BLOG</div>
				<div className='nav-link-mobile'>CONTACT</div>
				<div
					className='absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400'
					onClick={closeNav}>
					<XMarkIcon />
				</div>
			</div>
		</div>
	);
};

export default NavMobile;
