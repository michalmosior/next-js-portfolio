import Project from '@/models/project';
import { connectToDB } from '@/lib/mongoose';
import { NextRequest, NextResponse } from 'next/server';
import { ProjectInterface } from '@/types/types';

export const GET = async (request: NextRequest) => {
	try {
		await connectToDB();
		const projects: ProjectInterface[] = await Project.find();
		return new NextResponse(JSON.stringify(projects), { status: 200 });
	} catch (error) {
		return new NextResponse('Failed to fetch all projects', { status: 500 });
	}
};
