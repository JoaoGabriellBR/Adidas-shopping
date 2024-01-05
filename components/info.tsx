"use client";
import Button from "./ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart, useWishList } from "@/hooks/createCustomStore";
import { MouseEventHandler } from "react";
import { InfoProps } from "@/utils/types";

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const wishList = useWishList();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  const onAddToWishList: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    wishList.addItem(data);
  };

  return (
    <div>
      <p className="text-sm opacity-70 pb-1">
        {data?.category[0]?.name}
        {"  •  "}
        {data?.type}
      </p>
      <h1 className="text-2xl sm:text-3xl sm:font-bold text-gray-900">
        {data.name.toUpperCase()}
      </h1>
      <div className="mt-3 lex items-end justify-between">
        <p className="text-2xl text-gray-900">R$ {data?.price}</p>
      </div>
      <hr className="my-2" />
      <p className="text-sm text-black py-4">{data.description}</p>

      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-4">
          <h3 className="sm:font-semibold text-black">Tamanho:</h3>
          <div>{data?.size?.name}</div>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="sm:font-semibold text-black">Cor:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>

      <div className="mt-10 flex flex-wrap flex-row items-center gap-3">
        <Button onClick={onAddToCart} className="gap-x-2">
          Adicionar ao carrinho
          <ShoppingCart />
        </Button>

        <Button outline onClick={onAddToWishList} className="gap-x-2">
          Favoritar
          <Heart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
