import Footer from "@/components/Footer";
import Header from "@/components/Header/header";
import { Inter } from "next/font/google";
import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

const interFont = Inter({
  subsets: ['latin'],
})

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${interFont.className} relative flex min-h-screen flex-col dark`}>
      <Header />
      <main className="flex-1 flex flex-col mb-12 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
