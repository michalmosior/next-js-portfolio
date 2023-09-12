import Skill from '@/models/skills';
import { connectToDB } from '@/lib/mongoose';

export const GET = async (request: Request) => {
	try {
		await connectToDB();

		const skills = await Skill.find();

		return new Response(JSON.stringify(skills), { status: 200 });
	} catch (error) {
		return new Response('Failed to fetch all skills', { status: 500 });
	}
};
