import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongoose';
import { ProjectInterface } from '@/types/types';
import Project from '@/models/project';

export const GET = async (request: NextRequest, response: NextResponse) => {
	try {
		await connectToDB();
		const projects: ProjectInterface[] = await Project.find({});
		return new NextResponse(JSON.stringify(projects), { status: 200 });
	} catch {
		return new NextResponse('Failed to fetch all projects', { status: 500 });
	}
};
