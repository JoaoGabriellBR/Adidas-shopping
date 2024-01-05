"use client";

import Button from "@/components/ui/button";
import useWishList from "@/hooks/use-wish-list";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearch } from "@/context/search-context";

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
    <div className="ml-auto gap-x-4 items-center flex">
      <Button
        onClick={handleClick}
        className="bg-transparent flex justify-center items-center rounded-full px-4 py-2"
      >
        <Heart size={22} color="black" />
        {wishList.items.length && (
          <span className="p-1 mb-5 text-xs font-medium text-black bg-yellow-400 rounded-full">
            {wishList.items.length}
          </span>
        )}
      </Button>
    </div>
  );
};

export default HeartIcon;
