import { create } from "zustand";
import { Product } from "@/utils/types";
import { PreviewModalStore } from "@/utils/types";

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
