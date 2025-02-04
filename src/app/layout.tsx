import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zeko.ai",
  description: "Intelligent automation for Recruitment and HR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <link rel="shortcut icon" href="https://zeko.ai/favicon.ico" />
      <link rel="icon" href="https://zeko.ai/favicon.ico" />


      <body className={inter.className}>
      <NavBar/>

        {children}
        </body>
        <Footer/>
    </html>
  );
}
