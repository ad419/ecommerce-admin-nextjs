import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { routeId: string } }
) {
  try {
    if (!params.routeId) {
      return new NextResponse("Cupon id is required", { status: 400 });
    }

    const cupon = await prismadb.cupon.findUnique({
      where: {
        id: params.routeId,
      },
    });
    return NextResponse.json(cupon);
  } catch (error) {
    console.log("CUPON_GET", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { routeId: string; storeId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    console.log(params, body);
    const { name, value, expiresAt, activated, code } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!value) {
      return new NextResponse("Value is required", { status: 400 });
    }

    if (!params.routeId) {
      return new NextResponse("Cupon id is required", { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const cupon = await prismadb.cupon.updateMany({
      where: {
        id: params.routeId,
      },
      data: {
        name,
        value,
        activated,
        code,
        expiresAt,
      },
    });

    return NextResponse.json(cupon);
  } catch (error) {
    console.log("[CUPON_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { routeId: string; storeId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!params.routeId) {
      return new NextResponse("Cupon id is required", { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const cupon = await prismadb.cupon.deleteMany({
      where: {
        id: params.routeId,
      },
    });
    return NextResponse.json(cupon);
  } catch (error) {
    console.log("CUPON_DELETE", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
