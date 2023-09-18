// here the client side will sned the request to the server side with email and password

import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = (await req.json()) as {
      email: string;
      password: string;
    };
    const customer = await prismadb.customer.findUnique({
      where: {
        email: email,
      },
    });

    if (!customer) {
      return new NextResponse("Customer not found", { status: 404 });
    }

    if (customer.password !== password) {
      return new NextResponse("Invalid password", { status: 401 });
    }

    return NextResponse.redirect("/customer");
  } catch (error) {
    console.log("[AUTH_CUSTOMER_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
