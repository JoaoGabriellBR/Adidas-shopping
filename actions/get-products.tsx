// import { Product } from "@/types";
// import qs from 'query-string'

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

// interface Query {
//   categoryId?: string;
//   colorId?: string;
//   sizeId?: string;
//   description?: string;
//   isFeatured?: boolean;
// }

// const getProducts = async (query: Query): Promise<Product[]> => {
//   const url = qs.stringifyUrl({
//     url: URL,
//     query: {
//       description: query.description,
//       colorId: query.colorId,
//       sizeId: query.sizeId,
//       categoryId: query.categoryId,
//       isFeatured: query.isFeatured
//     }
//   });
  
//   const res = await fetch(url);

//   return res.json();
// };

// export default getProducts;

// Remova a importação do módulo 'query-string', pois não é mais necessário.

import { Product } from "@/types";
import products from "@/products.json"; // Importe os dados diretamente do arquivo products.json

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

