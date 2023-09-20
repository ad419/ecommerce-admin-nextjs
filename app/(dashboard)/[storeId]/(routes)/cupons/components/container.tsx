"use client";
import { CuponClient } from "./client";
import { CuponColumn } from "./columns";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
const Container = ({ cupons }: { cupons: any }) => {
  const [countdown, setCountdown] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const expiresAt = cupons[0].expiresAt;
      const diff = expiresAt.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setCountdown(`${days} : ${hours} : ${minutes} : ${seconds}`);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [cupons]); // Include 'cupons' as a dependency

  const formattedSizes: CuponColumn[] = cupons.map((item: any) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    countdown: countdown,
    activated: item.activated,
    expiresAt: format(item.expiresAt, "MMMM do, yyyy"),
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  const params = useParams();
  console.log(formattedSizes);
  // memorize the component

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CuponClient data={formattedSizes} />
      </div>
    </div>
  );
};

export default Container;
