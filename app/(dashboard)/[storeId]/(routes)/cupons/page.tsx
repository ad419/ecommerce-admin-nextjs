import prismadb from "@/lib/prismadb";
import { CuponClient } from "./components/client";
import { CuponColumn } from "./components/columns";
import { format } from "date-fns";
import Container from "./components/container";

const SizesPage = async ({ params }: { params: { storeId: string } }) => {
  const cupons = await prismadb.cupon.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return <Container cupons={cupons} />;
};

export default SizesPage;
