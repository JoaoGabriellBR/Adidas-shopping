"use client"

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearch } from "@/context/search-context";

const CartIcon = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { handleSearch } = useSearch();

  const handleClick = () => {
    router.push("/cart")
    handleSearch('')
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
    <div className="ml-auto gap-x-4 items-center flex">
      <Button onClick={handleClick} className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className='ml-2 text-sm font-medium text-white'>
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default CartIcon;
