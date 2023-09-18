import { NextRequest, NextResponse } from 'next/server';
import { SkillInterface } from '@/types/types';
import Skill from '@/models/skills';
import { connectToDB } from '@/lib/mongoose';

export const GET = async (request: NextRequest, response: NextResponse) => {
	try {
		await connectToDB();
		const skills: SkillInterface[] = await Skill.find({});
		/*return new NextResponse(JSON.stringify(skills), { status: 200 });*/
		return new NextResponse(JSON.stringify(skills), { status: 200 });
	} catch {
		return new NextResponse('Failed to fetch all skills', { status: 500 });
	}
};
