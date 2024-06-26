import { cookies } from 'next/headers';

export const runtime = 'edge';

export async function GET(request: Request) {
	const cookieStore = cookies();
	const token = cookieStore.get('token');

	return Response.json('Hello, Next.js!', {
		status: 200,
		headers: { 'Set-Cookie': `token=${token}` },
	});
}