import { SkillInterface } from '@/types/types';
import DecorationSpan from '../UI/DecorationSpan';
import Image from 'next/image';

const fetchSkills = async () => {
	const response = await fetch(`${process.env.API_URL}/api/skills`);
	try {
		const skills: SkillInterface[] = await response.json();
		return skills;
	} catch (err) {
		console.log('error:', err);
	}
};

const About: any = async () => {
	const skills = await fetchSkills();
	return (
		<section id='aboutme' className='section'>
			<div className='max-w-screen-xl'>
				<h2 className='section_title py-5'>
					<DecorationSpan text='About' /> me
				</h2>
				<div className='flex flex-col lg:flex-row items-center justify-between'>
					<div className='mb-8 lg:w-1/2'>
						<p className='description'>
							<DecorationSpan text='Hello!' /> I am self-taught ambitious
							<DecorationSpan text=' Frontend Developer ' />
							with a passion for creating modern and responsive
							<DecorationSpan text=' websites ' /> and
							<DecorationSpan text=' apps ' />. I'm delighted that you're here,
							and I would like to invite you to explore my
							<DecorationSpan text=' portfolio.' />
						</p>
						<p className='description'>
							I encourage you to browse through my projects to assess my
							potential as a
							<DecorationSpan text=' Junior Frontend Developer' />.
						</p>
						<p className='description'>
							I am ready to join a team and engage in
							<DecorationSpan text=' exciting projects' />. If you see potential
							in me and would like to collaborate, please get in touch through
							the
							<DecorationSpan text=' contact form ' /> or directly to my{' '}
							<DecorationSpan text=' email address' />.
						</p>
					</div>
					<div className='flex-center flex-col lg:w-1/2'>
						<h3 className='text-2xl mb-4'>Tech stack</h3>
						<ul className='list-none flex-center flex-row flex-wrap w-full gap-5'>
							{skills!.map((skill) => {
								return (
									<li
										className='flex flex-col items-center justify-center mb-3 w-1/5'
										key={skill._id}
									>
										<Image
											src={skill.path}
											alt='logo'
											width={0}
											height={0}
											sizes='25%'
											className='object-contain'
											style={{ width: '80%', height: 'auto' }}
										/>
										<span className='capitalize text-center text-xs'>
											{skill.title}
										</span>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
