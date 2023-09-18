import { SkillInterface } from '@/types/types';
import { connectToDB } from './mongoose';
import Skill from '@/models/skills';
import { NextResponse } from 'next/server';

export const getAllSkills = async () => {
	await connectToDB();
	const skills: SkillInterface[] = await Skill.find({});
	return new NextResponse(JSON.stringify(skills));
};
