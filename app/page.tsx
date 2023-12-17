// import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";
import Image from "next/image";
import localFont from "next/font/local";
import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ArrowRightCircle } from "lucide-react";
import products from "@/products.json";

const FuturaCondensedExtraBold = localFont({
  src: "../fonts/Futura-Condensed-Extra-Bold.woff2",
  display: "swap",
});

export const revalidate = 0;

const HomePage = async () => {
  // const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="flex flex-col sm:flex-row  justify-between">
          <div className="flex flex-col sm:flex-row subtle gap-10">
            <div className="px-3 sm:px-5 pt-5 flex gap-8 flex-col sm:pt-0">
              <div className="flex sm:pt-[130px] flex-col gap-3">
                <h1
                  className={cn(
                    "text-5xl sm:text-8xl font-semibold italic pb-4",
                    FuturaCondensedExtraBold.className
                  )}
                >
                  PRESENTES E MAIS PRESENTES!
                </h1>
                <p className="max-w-[500px]">
                  Vista a Grandeza, Sinta a Inovação: Seu Estilo, Suas Adidas!
                </p>
              </div>
              <div>
                <Button className="bg-black mb-4 text-white flex items-center gap-2">
                   Compre agora <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div>
              <Image
                className=""
                width={800}
                height={700}
                objectFit="contain"
                alt="image"
                src="/images/nike-reactx.png"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Produtos em destaque" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
