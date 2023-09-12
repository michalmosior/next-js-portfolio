import Project from '@/models/project';
import { connectToDB } from '@/lib/mongoose';

export const GET = async (request: Request) => {
	try {
		await connectToDB();

		const projects = await Project.find();

		return new Response(JSON.stringify(projects), { status: 200 });
	} catch (error) {
		return new Response('Failed to fetch all projects', { status: 500 });
	}
};
