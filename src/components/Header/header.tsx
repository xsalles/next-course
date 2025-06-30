import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/router";
import ActiveLink from "../ActiveLink";
import Link from "next/link";

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
        <ActiveLink href={"/"}>Início</ActiveLink>
        <ActiveLink href={"/blog"}>Blog</ActiveLink>

        <Button variant={"secondary"} asChild>
          <Link href={"/comecar"}>Começar</Link>
        </Button>
      </nav>
    </header>
  );
}
