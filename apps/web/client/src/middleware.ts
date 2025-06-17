import { updateSession } from '@/utils/supabase/middleware';
import type { NextFetchEvent, NextRequest } from 'next/server';
import { middleware as i18nMiddleware } from './i18n/navigation';

export async function middleware(request: NextRequest, event: NextFetchEvent) {
    // update user's auth session
    const response = await updateSession(request);
    return i18nMiddleware(request, event, response);
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
