"use client"

import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Image from "next/image";
import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import products from "@/utils/products.json";
import Link from "next/link";
import Header from "@/components/header";
import ProductCard from "@/components/ui/product-card";
import { useSearch } from "@/context/search-context";

export const revalidate = 0;

const HomePage = () => {

  const { searchQuery, searchResults } = useSearch();

  return (
    <>
      <Container>
        {searchQuery && searchResults !== 0 ? (
          <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchResults.map((product: any) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        ) : (
          <div className="space-y-10 pb-10">
            <div className="bg-[#ECEDEF] py-7 md:py-4 px-4 sm:px-6 lg:px-8 rounded-xl relative flex flex-row flex-wrap justify-between items-center">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-5xl lg:text-6xl">Tênis Runfalcon 3.0</h1>
                <p className="text-lg md:text-2xl lg:text-3xl">a partir de</p>
                <div className="flex flex-row gap-2">
                  <p className="text-black text-lg md:text-2xl lg:text-3xl">R$</p>
                  <p className="text-black text-6xl md:text-7xl lg:text-8xl">399</p>
                  <p className="text-black text-lg md:text-2xl lg:text-3xl">,99</p>
                </div>
                <Link href="/product/21">
                  <Button className="bg-black my-4 text-white flex items-center gap-2">
                    Compre agora <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <Image
                src="/images/tenis-adidas.png"
                width={450}
                height={400}
                alt="Tênis Runfalcon 3.0"
              />
            </div>

            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
              <ProductList initialLength={0} finalLength={8} title="Produtos em destaque" items={products} />
            </div>
            <div className="rounded-xl relative aspect-square md:aspect-[2.4/1.4] overflow-hidden">
              <Image src="/images/confira.png" alt="Billboard Image" layout="fill" objectFit="cover" />
              <div className="absolute inset-0 flex flex-col justify-center items-center gap-y-4 text-white">
                <h1 className="p-0 text-6xl sm:text-5xl lg:text-7xl max-w-xs">Originais</h1>
                <p>Confira agora os nossos itens originais</p>
                <Link href="/category/4">
                  <Button className="bg-white mb-4 text-black flex items-center gap-2">
                    Compre agora <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
              <ProductList initialLength={8} title="Outros Produtos" items={products} />
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default HomePage;
