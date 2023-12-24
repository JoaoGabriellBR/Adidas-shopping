import { Product } from "@/types";
import products from "@/products.json";
import { Query } from "@/types";

const getProducts = async (query: Query): Promise<Product[] | any> => {
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

