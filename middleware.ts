// middleware.ts
import { authMiddleware } from "@clerk/nextjs";

// ✅ Log para confirmar que el middleware corre
console.log("✅ Clerk middleware is running");

export default authMiddleware({
  publicRoutes: ["/", "/sign-in(.*)", "/sign-up(.*)"],
  ignoredRoutes: ["/api/webhooks(.*)"], // optional
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // matches all routes except static files
};