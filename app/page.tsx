import Projects from '@/components/Projects/Projects';
import About from '../components/About/About';
import Header from '../components/Header/Header';

const fetchSkills = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/skills`,
		{
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		}
	);
	const skills = await response.json();
	if (!response.ok) {
		throw new Error('Failed to fetch skills');
	}
	return skills;
};

const Home = async () => {
	const allSkills = await fetchSkills();
	return (
		<>
			{allSkills.map((skill: any) => {
				return <p>{skill.title}</p>;
			})}
			<Header />
			{/*<About />
			<Projects />*/}
		</>
	);
};

export default Home;
