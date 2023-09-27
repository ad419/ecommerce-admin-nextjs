"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { UserColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface CustomerClientProps {
  data: UserColumn[];
}

export const CustomerClient: React.FC<CustomerClientProps> = ({ data }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Customers (${data.length})`}
          description="Manage Customers for your store"
        />
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API" description="API calls for Customers" />
      <Separator />
      <ApiList entityName="colors" entityIdName="colorId" />
    </>
  );
};
