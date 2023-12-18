import { Product } from "@/types";
import products from "@/products.json";

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  description?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  // Aqui você pode filtrar os produtos com base nos parâmetros de consulta
  const filteredProducts = products.filter((product) => {
    return (
      (!query.categoryId || product.category[0]?.id === Number(query.categoryId)) &&
      (!query.colorId || product.color?.id === Number(query.colorId)) &&
      (!query.sizeId || product.size?.id === Number(query.sizeId)) &&
      (!query.description || product.description.toLowerCase().includes(query.description.toLowerCase())) &&
      (!query.isFeatured)
    );
  });

  return filteredProducts;
};

export default getProducts;

