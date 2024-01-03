import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import { SearchProvider } from "@/context/search-context";
import CustomLayout from "@/components/custom-layout";
import { Roboto } from "next/font/google"

const roboto = Roboto({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: {
    default: "Adidas. Nada é impossível. Adidas.com",
    template: "%s | Adidas",
  },
  keywords: [
    "Adidas",
    "adidas.com",
  ],
  description:
    "A Adidas oferece produtos, experiências e serviços inovadores para inspirar os atletas.",
  applicationName: "adidas.com",
  authors: [{ name: "Adidas" }],
  openGraph: {
    title: "Adidas. Nada é impossível",
    description:
      "A Adidas oferece produtos, experiências e serviços inovadores para inspirar os atletas.",
    url: "https://adidas.com",
    locale: "pt-BR",
    type: "website",
  },
  category: "e-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <ModalProvider />
        <ToastProvider />
        <SearchProvider>
          <CustomLayout>
            {children}
          </CustomLayout>
        </SearchProvider>
        <Footer />
      </body>
    </html>
  );
};
