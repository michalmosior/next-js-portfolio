import { NextRequest, NextResponse } from 'next/server';
import { getAllSkills } from '@/lib/skills';

export const GET = async (request: NextRequest, response: NextResponse) => {
	const skills = await getAllSkills();
	console.log(skills);
	return NextResponse.json(skills);
};
