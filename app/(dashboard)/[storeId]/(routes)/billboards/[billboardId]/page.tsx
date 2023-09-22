import prismadb from "@/lib/prismadb";
import { BillboardForm } from "./components/billboard-form";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const billboard = (await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  })) as any;

  // get active store

  const store = (await prismadb.store.findFirst({
    where: {
      activated: true,
    },
  })) as any;

  // get billboards

  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: store?.id,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} billboards={billboards} />
      </div>
    </div>
  );
};

export default BillboardPage;
