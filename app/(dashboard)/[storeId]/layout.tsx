import Navbar from "@/components/navbar";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { BottomBar } from "@/components/bottom-bar";
import { TabBar } from "@/components/tab-bar";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth(); // get the current user

  // if the userId is null, it means the user has not signed in
  // redirect to the sign-in page
  if (!userId) {
    redirect("/sign-in");
  }

  // find the store in the database
  // the store id will be provided in the params
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  // if by any chance, the store does not exist, redirect to the index page
  if (!store) {
    redirect("/");
  }

  return (
    <div className="h-screen w-full">
      <Navbar />
      {children}
      <div
        className="lg:hidden hidden md:flex items-center justify-center
        fixed bottom-0 inset-x-0 z-10 w-full
      "
      >
        <BottomBar />
      </div>
      <div
        className="lg:hidden md:hidden flex items-center justify-center
        fixed bottom-0 inset-x-0 z-10
      "
      >
        <TabBar />
      </div>
    </div>
  );
}
