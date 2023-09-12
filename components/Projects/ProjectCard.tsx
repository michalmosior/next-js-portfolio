import Link from 'next/link';
import Image from 'next/image';
import { ProjectInterface } from '@/types/types';

const ProjectCard = ({ title, tag, description, image, category }: ProjectInterface) => {
	return (
		<li className='project_card'>
			<div className='flex items-center justify-center w-full h-full lg:w-[56%] shadow-lg'>
				<div className='relative pt-[56.25%] lg:pt-0 lg:h-96 w-full lg:rounded-md overflow-hidden'>
					<Image
						src={image}
						alt={title}
						fill={true}
					></Image>
				</div>
			</div>
			<div className='w-full lg:w-[44%] flex flex-col justify-between p-6 sm:p-8 lg:p-4 '>
				<div>
					<h3 className='text-3xl lg:text-5xl font-medium text-sky-800'>
						{title}
					</h3>
					<p className='lowercase mb-4 lg:mb-6 text-base md:text-lg lg:text-xl font-light text-gray-800/80'>
						{category}
					</p>
					<p className='lg:text-lg'>{description}</p>
				</div>
				<div className='flex flex-col items-start justify-between gap-2'>
					<div className='flex gap-4 sm:gap-6  mt-6 lg:mt-12'>
						<Link
							href={'#'}
							className='btn bg-sky-700 text-gray-50 hover:opacity-80 flex items-center gap-2 lg:text-xl'
						>
							Live
							<svg
								width='15px'
								height='15px'
								viewBox='-1 0 12 12'
								version='1.1'
							>
								<defs></defs>
								<g
									id='Page-1'
									stroke='none'
									strokeWidth='1'
									fill='none'
									fillRule='evenodd'
								>
									<g
										id='Dribbble-Light-Preview'
										transform='translate(-65.000000, -3803.000000)'
										fill='#fff'
									>
										<g id='icons' transform='translate(56.000000, 160.000000)'>
											<path
												d='M18.074,3650.7335 L12.308,3654.6315 C10.903,3655.5815 9,3654.5835 9,3652.8985 L9,3645.1015 C9,3643.4155 10.903,3642.4185 12.308,3643.3685 L18.074,3647.2665 C19.306,3648.0995 19.306,3649.9005 18.074,3650.7335'
												id='play-[#1000]'
											></path>
										</g>
									</g>
								</g>
							</svg>
						</Link>
						<Link
							href={'#'}
							className='btn ring-1 ring-sky-800 text-gray-800 hover:bg-gray-200  hover:ring-gray-200 flex items-center gap-2 lg:text-xl'
						>
							Code
							<svg
								fill='#0369A1'
								width='20px'
								height='20px'
								viewBox='-1.5 0 19 19'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M15.917 1.666V17.5h-5.15c-.424 0-.557-.238-.557-.455 0-.266.01-1.141.01-2.226a1.935 1.935 0 0 0-.552-1.502c1.808-.202 3.706-.887 3.706-4.005a3.134 3.134 0 0 0-.834-2.177 2.914 2.914 0 0 0-.081-2.147s-.68-.218-2.23.832a7.684 7.684 0 0 0-4.063 0c-1.55-1.05-2.23-.832-2.23-.832a2.918 2.918 0 0 0-.08 2.147 3.142 3.142 0 0 0-.835 2.177c0 3.11 1.894 3.806 3.696 4.011a1.737 1.737 0 0 0-.516 1.084 1.726 1.726 0 0 1-2.361-.674 1.706 1.706 0 0 0-1.243-.836s-.793-.01-.056.494a2.145 2.145 0 0 1 .9 1.187s.478 1.578 2.735 1.088c.004.676.01 1.186.01 1.38 0 .214-.147.454-.553.454H.083V1.666z' />
							</svg>
						</Link>
					</div>
					<div className='flex flex-wrap lg:w-3/4 mt-4 gap-2'>
						{tag.split(' ').map((tag) => (
							<span
								key={tag}
								className='inline-block px-2 lg:px-3 py-1 lg:py-2 ring-1 ring-gray-400 text-gray-600 rounded-full text-xs lg:text-base font-light'
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>
		</li>
	);
};

export default ProjectCard;