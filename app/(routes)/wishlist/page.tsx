"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/ui/container";
import WishItem from "./components/wish-item";
import { ChevronLeft } from "lucide-react";
import useWishList from "@/hooks/use-wish-list";
import ProductList from "@/components/product-list";
import products from "@/utils/products.json";

export const revalidate = 60;

export default function WishList() {
  const [isMounted, setIsMounted] = useState(false);
  const wishList = useWishList();
  const router = useRouter();

  const listWishes = wishList.items.map((item) => item.id);

  const suggestedProducts = products
    .filter((product) => !listWishes.includes(product.id))
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div
            onClick={() => router.back()}
            className="max-w-[5rem] flex flex-row items-center gap-1 cursor-pointer my-5"
          >
            <ChevronLeft />
            <p>Voltar</p>
          </div>

          <h1 className="text-xl sm:text-3xl font-bold text-black">
            Minha lista de favoritos
          </h1>

          <div className="my-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {wishList.items.length === 0 && (
                <p className="text-neutral-500">
                  Você ainda não possui nenhum favorito.
                </p>
              )}
              <ul>
                {wishList.items.map((item: any) => (
                  <WishItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
          </div>
          <Container>
            <ProductList
              initialLength={0}
              finalLength={8}
              title="Nossos recomendados para você"
              items={suggestedProducts}
            />
          </Container>
        </div>
      </Container>
    </div>
  );
}
