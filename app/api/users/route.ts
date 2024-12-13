import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Adjust the path based on your project structure

// Handle GET requests to fetch users
export async function GET() {
  try {
    const users = await prisma.users.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
