import { ProjectInterface } from '@/types/types';
import { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema<ProjectInterface>({
	title: {
		type: String,
	},
	tag: {
		type: String,
	},
	description: {
		type: String,
	},
	image: {
		type: String,
	},
	category: {
		type: String,
	},
});

const Project = models.Project || model('Project', ProjectSchema);

export default Project;