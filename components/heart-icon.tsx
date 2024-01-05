"use client";

import useWishList from "@/hooks/use-wish-list";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearch } from "@/context/search-context";
import Button from "./ui/button";

const HeartIcon = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { handleSearch } = useSearch();

  const handleClick = () => {
    router.push("/wishlist");
    handleSearch("");
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const wishList = useWishList();
  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  return (
    <Button
      onClick={handleClick}
      className="p-0 m-0 bg-transparent"
    >
      <Heart size={22} color="black" />
      {wishList.items.length && (
        <span className="p-1 mb-5 text-sm font-medium text-black">
          {wishList.items.length}
        </span>
      )}
    </Button>
  );
};

export default HeartIcon;
