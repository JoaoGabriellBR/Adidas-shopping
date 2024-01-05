import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  CartStore,
  WishList,
  createCustomStoreProps,
  Product,
} from "@/utils/types";

const createCustomStore = ({
  name,
  textExistingItem,
  textSetItem,
  textRemoveItem,
}: createCustomStoreProps) =>
  create(
    persist<CartStore | WishList>(
      (set, get) => ({
        items: [],
        addItem: (data: Product) => {
          const currentItems = get().items;
          const existingItem = currentItems.find((item) => item.id === data.id);

          if (existingItem) {
            return toast.error(textExistingItem);
          }

          set({ items: [...get().items, data] });
          toast.success(textSetItem);
        },
        removeItem: (id: number) => {
          set({ items: [...get().items.filter((item) => item.id !== id)] });
          toast.success(textRemoveItem);
        },
        removeAll: () => set({ items: [] }),
      }),
      {
        name,
        storage: createJSONStorage(() => localStorage),
      }
    )
  );

export const useCart = createCustomStore({
  name: "cart-storage",
  textExistingItem: "Este produto já está no carrinho.",
  textSetItem: "Produto adicionado ao carrinho.",
  textRemoveItem: "Produto removido do carrinho.",
});

export const useWishList = createCustomStore({
  name: "wishlist-storage",
  textExistingItem: "Este produto já está em seus favoritos.",
  textSetItem: "Produto adicionado aos seus favoritos.",
  textRemoveItem: "Produto removido de favoritos.",
});
