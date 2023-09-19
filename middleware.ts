import { authMiddleware } from "@clerk/nextjs";

// to protect all routes
export default authMiddleware({
  publicRoutes: ["/api/:path*", "/"],
  secretKey: process.env.CLERK_SECRET_KEY,
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
