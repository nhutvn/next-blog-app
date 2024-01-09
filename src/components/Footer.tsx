import { EnvelopeIcon, MapIcon, MapPinIcon } from '@heroicons/react/20/solid';
import { DevicePhoneMobileIcon } from '@heroicons/react/24/solid';

const Footer = () => {
	return (
		<div className='pt-[8rem] pb-[4rem] bg-[#02050a]'>
			<div
				className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3
            md:grid-cols-2 w-[80%] mx-auto gap-[3rem]'>
				{/* items */}
				<div className='flex items-center space-x-6'>
					<div
						className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center 
                        justify-center rounded-full bg-[#55e65a]'>
						<MapPinIcon className='md:w-[5rem] md:h-[5rem] w-[2rem] h-[2rem] text-black' />
					</div>
					<div>
						<h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>Adress</h1>
						<p className='text-[17px] w-[90%] text-white opacity-60'>Ho Chi Minh</p>
					</div>
				</div>

				<div className='flex items-center space-x-6'>
					<div
						className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center 
                        justify-center rounded-full bg-[#55e65a]'>
						<DevicePhoneMobileIcon className='md:w-[5rem] md:h-[5rem] w-[2rem] h-[2rem] text-black' />
					</div>
					<div>
						<h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>
							Phone number
						</h1>
						<p className='text-[17px] w-[90%] text-white opacity-60'>
							+ 84 1234567 <br />+ 84 0753678
						</p>
					</div>
				</div>

				<div className='flex items-center space-x-6'>
					<div
						className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center 
                        justify-center rounded-full bg-[#55e65a]'>
						<EnvelopeIcon className='md:w-[5rem] md:h-[5rem] w-[2rem] h-[2rem] text-black' />
					</div>
					<div>
						<h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>
							Send us email
						</h1>
						<p className='text-[17px] w-[90%] text-white opacity-60'>
							example@gmail.com <br />
							contact@gmail.com
						</p>
					</div>
				</div>
			</div>

			<div className='w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between'>
				<div className='text-[16px] mb-[2rem] md:mb-0 text-white opacity-60 cursor-pointer'>
					Webdev 2023 | All Rights Reserved
				</div>
				<div className='flex justify-center space-x-10'>
					<p className='text-[14px] text-white opacity-60 hover:opacity-40 cursor-pointer'>
						Terms & Condition
					</p>
					<p className='text-[14px] text-white opacity-60 hover:opacity-40 cursor-pointer'>
						Privacy Policy
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
