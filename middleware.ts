import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	const refresh_token = request.cookies.get('refresh_token');

	if (refresh_token) {
		return NextResponse.redirect(new URL('/', request.url));
	}
}

export const config = {
	matcher: '/sign',
}
