import prismadb from "@/lib/prismadb";
import { ColorClient } from "./components/client";
import { UserColumn } from "./components/columns";
import { format } from "date-fns";

const ColorsPage = async ({ params }: { params: { storeId: string } }) => {
  const user = await prismadb.user.findMany({});

  const formattedColors: UserColumn[] = user.map((item) => ({
    id: item.id,
    name: item.name,
    email: item.email,
    image: item.image,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorClient data={formattedColors} />
      </div>
    </div>
  );
};

export default ColorsPage;
