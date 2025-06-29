import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const isHomePage = router.pathname === "/";
  const isBlogPage = router.pathname.startsWith("/blog");

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60 bg-black flex items-center justify-between px-8 py-4">
      <Image
        src={"/logo.svg"}
        alt="Logo da site.set com cor branca em um fundo preto"
        width={115}
        height={32}
      />

      <nav className="flex items-center gap-6">
        <Link
          className={cn(
            "font-medium transition-colors ease-in-out duration-300 hover:text-blue-400",
            isHomePage ? "text-blue-600" : "text-white"
          )}
          href={"/"}
        >
          Início
        </Link>
        <Link
          className={cn(
            "font-medium transition-colors ease-in-out duration-300 hover:text-blue-400",
            isBlogPage ? "text-blue-600" : "text-white"
          )}
          href={"/blog"}
        >
          Blog
        </Link>
        <Button variant={"secondary"} className="rounded-[999px]">
          Começar
        </Button>
      </nav>
    </header>
  );
}
