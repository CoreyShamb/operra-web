import { NextRequest, NextResponse } from "next/server";

const PUBLIC_ROUTES = ["/", "/login", "/register", "/pricing"];

function isPublicRoute(pathname: string) {
    return PUBLIC_ROUTES.includes(pathname);
}

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const token =
        request.cookies.get("operra_access_token")?.value ||
        request.headers.get("authorization");

    const isAuthenticated = Boolean(token);

    if (isAuthenticated && (pathname === "/login" || pathname === "/register")) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (!isPublicRoute(pathname) && !isAuthenticated) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};