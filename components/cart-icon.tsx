"use client";

import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearch } from "@/context/search-context";
import Button from "./ui/button";

const CartIcon = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { handleSearch } = useSearch();

  const handleClick = () => {
    router.push("/cart");
    handleSearch("");
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  return (
    <Button onClick={handleClick} className="p-0 m-0 bg-transparent">
      <ShoppingBag size={22} color="black" />
      {cart.items.length && (
        <span className="p-1 mb-5 text-sm font-medium text-black">
          {cart.items.length}
        </span>
      )}
    </Button>
  );
};

export default CartIcon;
