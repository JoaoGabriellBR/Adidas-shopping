"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearch } from "@/context/search-context";
import Button from "./ui/button";
import { IconSchemaProps } from "@/utils/types";

export default function IconSchema({
  icon: Icon,
  route,
  getCount,
}: IconSchemaProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { handleSearch } = useSearch();
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
    handleSearch("");
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const count = getCount();

  return (
    <Button onClick={handleClick} className="p-0 m-0 bg-transparent">
      <Icon size={22} color="black" />
      {count > 0 && (
        <span className="p-1 mb-5 text-sm font-medium text-black">{count}</span>
      )}
    </Button>
  );
}
