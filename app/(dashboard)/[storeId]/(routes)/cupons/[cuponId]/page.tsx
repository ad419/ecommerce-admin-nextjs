import prismadb from "@/lib/prismadb";
import { CuponForm } from "./components/cupon-form";

const SizePage = async ({ params }: { params: { cuponId: string } }) => {
  const size = await prismadb.cupon.findUnique({
    where: {
      id: params.cuponId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CuponForm initialData={size} />
      </div>
    </div>
  );
};

export default SizePage;
