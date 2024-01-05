"use client";

import { useCart } from "@/hooks/createCustomStore";
import { ShoppingBag } from "lucide-react";
import IconSchema from "./icon-schema";

export default function CartIcon() {
  const cart = useCart();
  const getCount = () => cart.items.length;

  return <IconSchema icon={ShoppingBag} route="/cart" getCount={getCount} />;
}
