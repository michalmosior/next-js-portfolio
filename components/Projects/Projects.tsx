import DecorationSpan from '../UI/DecorationSpan';
import ProjectCard from './ProjectCard';

const fetchProjects = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/projects`,
		{
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		}
	);
	const projects = await response.json();
	if (!response.ok) {
		throw new Error('Failed to fetch projects');
	}
	return projects;
};

const Projects: any = async () => {
	const allProjects = await fetchProjects();
	return (
		<section id='projects' className='section'>
			<div className='max-w-screen-xl'>
				<h2 className='section_title py-2 text-slate-800'>
					My <DecorationSpan text='projects' />
				</h2>
				<ul className='flex-center flex-col gap-5'>
					{allProjects.map((project: any) => {
						return (
							<ProjectCard
								key={project._id}
								title={project.title}
								tag={project.tag}
								description={project.description}
								image={project.image}
								category={project.category}
							/>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default Projects;
