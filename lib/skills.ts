import { SkillInterface } from '@/types/types';
import { connectToDB } from './mongoose';
import Skill from '@/models/skills';

export const getAllSkills = async () => {
	await connectToDB();
	const skills: SkillInterface[] = await Skill.find();
	return skills;
};
