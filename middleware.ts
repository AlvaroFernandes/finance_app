import authConfig from "./auth.config"
import NextAuth from "next-auth"
import {privateRoutes} from "@/routes"
 
// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)
 
// 2. Wrapped middleware option
const { auth } = NextAuth(authConfig)
export default auth(async (req) => {
  // Your custom middleware logic goes here
 const isLoogedIn = !!req.auth;
  const url = "http://localhost:3000" 
 const {nextUrl} = req;

 const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);
 
 const isAuthRoute = nextUrl.pathname.includes("/auth");

 const isApiRoute = nextUrl.pathname.includes("/api");

 if(isApiRoute){
  return;
 }

 if(isLoogedIn && isAuthRoute){
  return Response.redirect(`${url}/dashboard`); 
 }

 if(isAuthRoute && !isLoogedIn){
  return;
 }

 if(!isLoogedIn && isPrivateRoute){
  return Response.redirect(`${url}/signin`)
 }

})


export const config =  {
    matcher: ["/((?!.+\\.[\\w]|_next).*)","/","/(api|trpc)(.*)"],
}