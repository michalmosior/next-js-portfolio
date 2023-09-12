import { Schema, model, models } from 'mongoose';
import { SkillInterface } from '@/types/types';

const SkillSchema = new Schema<SkillInterface>({
	title: {
		type: String,
		required: true,
	},
	path: {
		type: String,
		required: true,
	},
});

const Skill = models.Skill || model('Skill', SkillSchema);

export default Skill;
