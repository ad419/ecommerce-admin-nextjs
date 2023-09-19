import { authMiddleware } from "@clerk/nextjs";

// to protect all routes
export default authMiddleware({
  publicRoutes: [
    "/",
    "/sign-in",
    "/88e3a88e-561f-473d-b88a-2780c6fc6a76/billboards",
    "/88e3a88e-561f-473d-b88a-2780c6fc6a76/billboards/new",
    "/api/:path*",
  ],
  secretKey: process.env.CLERK_SECRET_KEY,
  ignoredRoutes: ["/api/webhook/clerk"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
