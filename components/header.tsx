"use client"
import { usePathname } from "next/navigation";
import Container from "@/components/ui/container";
import Link from "next/link";
import CartIcon from "@/components/cart-icon";
import Image from "next/image";
import logo from "@/public/images/adidas-logo.png";
import Navbar from "./navbar";
import NavbarMobile from "./navbar-mobile";
import categories from "@/utils/categories.json"
import { useMediaQuery } from "react-responsive";
import SearchInput from "./ui/search";
import SearchMobile from "./ui/search-mobile";
import { useSearch } from "@/context/search-context";

export default function Header() {

    const pathName = usePathname();
    const { handleSearch } = useSearch();
    const isMobile = useMediaQuery({ maxWidth: "1000px" });
    const handleClick = () => handleSearch('');

    const routes = categories.map((route: any) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathName === `/category/${route.id}`,
    }));


    return (
        <div className="border-b">
            <Container>
                <div className="relative px-2 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                    <Link onClick={handleClick} aria-label="Adidas home page" href="/">
                        <Image src={logo} alt="Logo adidas" width={80} height={80} />
                    </Link>
                    {isMobile ? (
                        <div className="flex items-center justify-end w-full">
                            <div className="gap-3 flex items-center">
                                <SearchMobile/>
                                <CartIcon />
                                <NavbarMobile routes={routes} />
                            </div>
                        </div>
                    ) : (
                        <div className="w-full flex items-center justify-between">
                            <Navbar routes={routes} />
                            <div className="flex flex-row items-center gap-4">
                                <SearchInput/>
                                <CartIcon />
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
}