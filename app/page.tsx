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
import Link from "next/link";

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


        <div className="bg-[#e9e9f1] w-full min-h-[10rem] bg-gray flex flex-row justify-between items-center p-6">
          <div className="flex flex-col justify-center items-start gap-y-4 p-6 text-black">
            <h1 className="p-0 text-4xl sm:text-3xl lg:text-5xl">TÊNIS RUNFALCON 3.0</h1>
            <p>O tênis ideal para corridas matinais.</p>
            <Link href="/product/21">
              <Button className="bg-transparent mb-4 text-black flex items-center gap-2">
                Compre agora <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <Image src="/images/tenis.png" alt="Billboard Image" width={400} height={300} />
        </div>


        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList initialLength={0} finalLength={8} title="Produtos em destaque" items={products} />
        </div>

        <div className="rounded-xl relative aspect-square md:aspect-[2.4/1.4] overflow-hidden">
          <Image src="/images/confira.png" alt="Billboard Image" layout="fill" objectFit="cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-y-4 text-white">
            <h1 className="p-0 text-6xl sm:text-5xl lg:text-7xl max-w-xs">Originais</h1>
            <p>Confira agora os nossos itens originais</p>
            <Button className="bg-white mb-4 text-black flex items-center gap-2">
              Compre agora <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList initialLength={8} title="Produtos em destaque" items={products} />
        </div>

      </div>
    </Container>
  );
};

export default HomePage;
