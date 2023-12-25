import Link from "next/link";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const divIconStyles = "bg-white p-2 rounded-full text-2xl text-black opacity-60 hover:opacity-100";
const iconStyles = "w-4 h-4"

const Links = [
  {
    name: "Guias",
    href: "",
  },
  {
    name: "Termos de venda",
    href: "",
  },
  {
    name: "Termos de uso",
    href: "",
  },
  {
    name: "Política de privacidade",
    href: "",
  },
];

const socialMedias = [
  {
    name: "instagram",
    href: "https://www.instagram.com/adidasbrasil",
    icon: <Instagram className={iconStyles}/>
  },
  {
    name: "facebook",
    href: "https://www.facebook.com/adidas",
    icon: <Facebook className={iconStyles}/>
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/c/adidas",
    icon: <Youtube className={iconStyles}/>
  },
  {
    name: "twitter",
    href: "https://twitter.com/adidas",
    icon: <Twitter className={iconStyles}/>
  },
]

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-black">
      <div className="mx-auto py-20 text-center flex flex-col gap-y-5 items-center justify-center">
        <div className="flex items-center justify-center gap-4">
          {socialMedias.map((item, index) => (
            <Link key={index} href={item.href} target="blank">
              <div className={divIconStyles}>{item.icon}</div>
            </Link>
          ))}
        </div>
        <div className="flex gap-3 px-2 mx-auto items-center justify-center flex-wrap">
          {Links.map((link, index) => (
            <Link
              className="hover:text-white text-xs text-[#888888]"
              key={index}
              href={link.href}
              target="blank"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <p className="text-center pt-5 text-[#888888] text-xs">
        &copy; {year} Adidas Inc, Todos os direitos reservados
      </p>
      <p className="text-center py-2 text-[#888888] text-[9px]">
        Criado por{" "}
        <Link
          href="https://github.com/JoaoGabriellBR"
          className="underline italic hover:text-white"
        >
          João Gabriel Silva.
        </Link>
      </p>
    </div>
  );
};

export default Footer;
