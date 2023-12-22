import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const BRFrima = localFont({
  src: [
    {
      path: "../fonts/BRFirma-font/BRFirma-Light.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/BRFirma-font/BRFirma-Regular.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/BRFirma-font/BRFirma-Medium.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/BRFirma-font/BRFirma-SemiBold.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/BRFirma-font/BRFirma-Bold.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

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
      <body className={BRFrima.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
