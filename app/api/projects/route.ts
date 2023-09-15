import { NextRequest, NextResponse } from 'next/server';
import { getAllProjects } from '@/lib/projects';

export const GET = async (request: NextRequest, response: NextResponse) => {
	const projects = await getAllProjects();
	return new NextResponse(JSON.stringify(projects));
};
