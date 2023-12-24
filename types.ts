export interface Billboard {
  id: string;
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

export interface Product {
  id: string;
  category: Category;
  description: string,
  name: string;
  price: string;
  size: Size;
  color: Color;
  images: Image[] | any;
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
  removeItem: (id: string) => void;
  removeAll: () => void;
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

export interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}
