import Skill from '@/models/skills';
import { connectToDB } from '@/lib/mongoose';
import { NextResponse } from 'next/server';
import { SkillInterface } from '@/types/types';

export const GET = async (request: Request) => {
	try {
		await connectToDB();
		const skills: SkillInterface[] = await Skill.find();
		return NextResponse.json({ skills });
	} catch (error) {
		return new NextResponse('Failed to fetch all skills', { status: 500 });
	}
};
