import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import Image from "next/image";
import logo from "@/public/images/adidas-logo.png";
import categories from "@/categories.json";

const Navbar = async () => {
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-2 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link aria-label="Adidas home page" href="/">
            <Image src={logo} alt="Logo adidas" width={80} height={80} />
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
