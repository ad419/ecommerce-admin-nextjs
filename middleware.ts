import { authMiddleware } from "@clerk/nextjs";

// to protect all routes
export default authMiddleware({
  publicRoutes: [
    "/",
    "/billboards",
    "/billboards/new",
    "/api/:path*",
  ],
  secretKey: process.env.CLERK_SECRET_KEY,
  ignoredRoutes: ["/api/webhook/clerk"],
});
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
