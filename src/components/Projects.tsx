import Image from 'next/image';

const Projects = () => {
	const projects: {
		id: number;
		projetName: string;
		imgSrc: string;
		date: string;
		description: string;
	}[] = [
		{
			id: 1,
			projetName: 'Easy Design',
			imgSrc: '/images/p1.jpg',
			date: '01/01/2022',
			description: 'This is project ...',
		},
		{
			id: 2,
			projetName: 'Geometric',
			imgSrc: '/images/p2.jpg',
			date: '03/01/2022',
			description: 'This is project ...',
		},
		{
			id: 3,
			projetName: 'Landing page Geometric Strategy',
			imgSrc: '/images/p3.jpg',
			date: '03/05/2022',
			description: 'This is project ...',
		},
		{
			id: 4,
			projetName: 'Advanced App Creation Technology',
			imgSrc: '/images/p4.jpg',
			date: '03/07/2022',
			description: 'This is project ...',
		},
		{
			id: 5,
			projetName: 'Sharing platform for multimedia files',
			imgSrc: '/images/p5.jpg',
			date: '03/08/2022',
			description: 'This is project ...',
		},
	];

	return (
		<div className='bg-[#02050a] pt-[4rem] md:pt-[4rem] pb-[1rem]'>
			<h1 className='heading'>
				Pro
				<span className='text-yellow-400'>Ject</span>
			</h1>
			<div className='w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>
				{projects.map((project) => (
					<div
						key={project.id}
						className='mt-[3rem]'>
						<div
							className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                    w-[100%] h-[200px] md:h-[300px] '>
							<Image
								src={project.imgSrc}
								alt=''
								fill
								className='object-cover rounded-3xl'
							/>
						</div>
						<div className='ml-2 mt-[1.5rem] text-white text-[20px]'>
							<p className='h-[50px]'>{project.projetName}</p>
							<p className='text-[0.9rem] opacity-40 text-right mt-[0.5rem]'>
								Last update: {project.date}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Projects;
