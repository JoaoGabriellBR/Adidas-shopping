import { Icon } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
}

export interface IconButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface Billboard {
  id: number;
  label: string;
  imageUrl: string;
}

export interface BillboardProps {
  data: Billboard;
}

export interface Category {
  id: number;
  name: string;
  billboard: Billboard;
}

export interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

export interface Image {
  id: string | number;
  url: string;
}

export interface GalleryProps {
  images: Image[];
}

export interface GalleryTabProps {
  image: Image;
}

export interface Size {
  id: number;
  name: string;
}

export interface Color {
  id: number;
  name: string;
  value: string;
}

export interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

export interface Product {
  id: number;
  category: Category;
  description: string;
  name: string;
  price: number;
  size: Size;
  color: Color;
  images: Image[] | any;
  quantity?: number;
}

export interface ProductCardProps {
  data: Product;
}

export interface ProductListProps {
  title: string;
  items: Product[] | any;
  initialLength?: number;
  finalLength?: number;
}

export interface ProductPageProps {
  params: {
    productId: string;
  };
}

export interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

export interface WishList {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

export interface createCustomStoreProps {
  name: string;
  textExistingItem: string;
  textSetItem: string;
  textRemoveItem: string;
}

export interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  description?: string;
  isFeatured?: boolean;
}

export interface InfoProps {
  data: Product | any;
}

export interface CartItemProps {
  data: Product;
}

export interface WishItemProps {
  data: Product;
}

export interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

export interface MainNavProps {
  data: Category[];
  mobile?: boolean;
}

export interface PreviewModalStore {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

export interface SearchContextProps {
  searchQuery: string | any;
  searchResults: Product[] | any;
  handleSearch: (query: string) => void;
}

export interface IconSchemaProps {
  icon: Icon;
  route: string;
  getCount: () => number;
}
