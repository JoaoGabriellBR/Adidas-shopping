import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";
import { WishList, Product } from "@/utils/types";

const useWishList = create(
  persist<WishList>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast.error("Este produto já está em seus favoritos.");
        }

        set({ items: [...get().items, data] });
        toast.success("Produto adicionado aos seus favoritos.");
      },
      removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Produto removido de favoritos.");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "wishlist-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useWishList;
