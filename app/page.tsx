"use client";

import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Image from "next/image";
import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import products from "@/utils/products.json";
import Carousel from "@/components/ui/carousel";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";

export const revalidate = 0;

const HomePage = () => {
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: "1000px" });

  const images = [
    {
      id: 1,
      src: "/images/camiseta-essentials.png",
      url: "/product/15",
    },
    {
      id: 2,
      src: "/images/campus.png",
      url: "/product/33",
    },
    {
      id: 3,
      src: "/images/itens-imperdiveis.png",
      url: "/category/4",
    },
  ];

  const imagesMobile = [
    {
      id: 1,
      src: "/images/camiseta-essentials-mobile1.png",
      url: "/product/15",
    },
    {
      id: 2,
      src: "/images/campusMobile.png",
      url: "/product/33",
    },
    {
      id: 3,
      src: "/images/itens-imperdiveis-mobile.png",
      url: "/category/4",
    },
  ];

  const slides = images.map((image) => ({
    content: (
      <Image
        key={image.id}
        src={image.src}
        alt={`Slide ${image.id}`}
        layout="responsive"
        width={1920}
        height={600}
        objectFit="cover"
      />
    ),
    onClick: () => router.push(image.url),
  }));

  const slidesMobile = imagesMobile.map((image) => ({
    content: (
      <Image
        key={image.id}
        src={image.src}
        alt={`Slide ${image.id}`}
        layout="responsive"
        width={767}
        height={755}
        objectFit="cover"
      />
    ),
    onClick: () => router.push(image.url),
  }));

  return (
    <>
      <div className="space-y-10 pb-10">
        <Carousel
          slides={isMobile ? slidesMobile : slides}
          infiniteLoop
          transitionDuration={500}
        />

        <Container>
          <h3 className="font-bold text-xl sm:text-3xl pb-5 px-4 sm:px-6 lg:px-8">
            Novidades
          </h3>

          <div className="w-full flex flex-row flex-wrap items-center justify-center px-2 sm:px-4 lg:px-8">
            <div className="w-full lg:w-1/2 lg:pr-2 mb-2">
              <Image
                src="/images/itensOriginais.png"
                alt={"Imagem"}
                layout="responsive"
                width={600}
                height={448}
                className="w-full"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-2 mb-2">
              <Image
                src="/images/itens-de-esporte.png"
                alt={"Imagem"}
                layout="responsive"
                width={600}
                height={448}
                className="w-full"
              />
            </div>
          </div>
        </Container>

        <Container>
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList
              initialLength={0}
              finalLength={8}
              title="Produtos em destaque"
              items={products}
            />
          </div>
        </Container>

        <div className="bg-[#ECEDEF] py-7 md:py-4 rounded-xl">
          <Container>
            <div className="px-4 sm:px-6 lg:px-8 relative flex flex-row flex-wrap justify-between items-center">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-5xl lg:text-6xl">
                  Tênis Runfalcon 3.0
                </h1>
                <p className="text-lg md:text-2xl lg:text-3xl">a partir de</p>
                <div className="flex flex-row gap-2">
                  <p className="text-black text-lg md:text-2xl lg:text-3xl">
                    R$
                  </p>
                  <p className="text-black text-6xl md:text-7xl lg:text-8xl">
                    399
                  </p>
                  <p className="text-black text-lg md:text-2xl lg:text-3xl">
                    ,99
                  </p>
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
          </Container>
        </div>

        <Container>
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList
              initialLength={8}
              title="Outros Produtos"
              items={products}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
