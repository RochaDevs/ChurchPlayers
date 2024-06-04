import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('session')?.value;

  // Permitir acesso às rotas de login, sign-up e principal
  const publicPaths = ['/', '/login', '/signup'];

  if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
    console.log('Redirecting to /dashboard');
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (!currentUser && !publicPaths.includes(request.nextUrl.pathname)) {
    console.log('Redirecting to /login');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
