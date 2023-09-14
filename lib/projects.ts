import { ProjectInterface } from '@/types/types';
import { connectToDB } from './mongoose';
import Project from '@/models/project';

export const getAllProjects = async () => {
	await connectToDB();
	const projects: ProjectInterface[] = await Project.find();
	return projects;
};
