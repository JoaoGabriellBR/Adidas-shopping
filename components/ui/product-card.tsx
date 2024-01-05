"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import { useCart } from "@/hooks/createCustomStore";
import { ProductCardProps } from "@/utils/types";
import { useSearch } from "@/context/search-context";

const ProductCard: React.FC<ProductCardProps | any> = ({ data }) => {
  const { handleSearch } = useSearch();
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
    handleSearch("");
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  const capitalizeFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl space-y-4"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images[0].url}
          alt="Imagem"
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="text-sm flex items-center justify-between">
        <p>R$ {data?.price}</p>
      </div>
      <div>
        <p className="font-normal text-sm">{capitalizeFirstLetter(data.name.toLowerCase())}</p>
        <p className="text-sm text-gray-500">{data?.category[0]?.name}</p>
      </div>
    </div>
  );
};

export default ProductCard;
