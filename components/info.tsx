"use client";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";
import { InfoProps } from "@/types";

const Info: React.FC<InfoProps> = ({ data }) => {
  
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl sm:font-bold text-gray-900">
        {data.name}
      </h1>
      <div className="mt-3 lex items-end justify-between">
        <p className="text-2xl text-gray-900">
          R$ {data?.price}
        </p>
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

      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Adicionar ao carrinho
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
