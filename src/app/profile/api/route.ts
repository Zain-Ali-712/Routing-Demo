import type { NextRequest } from "next/server";
import { headers,cookies } from "next/headers";

export async function GET( request: NextRequest){
    const headerList = await headers();
    const cookieList = await cookies();
    const theme = request.cookies.get("theme");
    console.log(theme);
    cookieList.set("resultPerPage","20");
    console.log(cookieList.get("resultPerPage"));
    console.log(headerList.get("Authorization"));
    return new Response("<h1>Api Profile data</h1>",{
        headers:{
            "Content-Type":"text/html",
            "Set-Cookie":"theme=Dark",
        },
    });
} 