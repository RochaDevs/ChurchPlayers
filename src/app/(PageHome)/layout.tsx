import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Church Players",
  description: "Conhecimento bíblico para todos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="pt-br" className={``}>

      <body className={inter.className}>

        {children}

      </body>

    </html>

  );
}
