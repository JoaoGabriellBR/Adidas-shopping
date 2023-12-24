"use client"
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import products from "@/products.json";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { ProductPageProps } from "@/types";

export const revalidate = 0;

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {

  const router = useRouter();
  const product = products?.find((item) => item.id === Number(params.productId));

  const suggestedProducts = products.filter(
    (item) => item.id !== Number(params.productId)
  )
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);

  if (!product) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div
            onClick={() => router.back()}
            className="flex flex-row items-center gap-1 cursor-pointer py-5"
          >
            <ChevronLeft />
            <p>Voltar</p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Itens relacionados" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
