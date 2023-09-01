import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

// make a get request to get all stores

export async function GET(req: Request) {
  try {
    const stores = await prismadb.store.findMany();

    return NextResponse.json(stores);
  } catch (error) {
    console.log("[STORES_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
