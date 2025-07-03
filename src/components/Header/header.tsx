import React from "react";
import { Button } from "../ui/button";
import ActiveLink from "../ActiveLink";
import Link from "next/link";
import LogoLink from "../LogoLink";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60 bg-black flex items-center justify-between px-2 md:justify-around md:px-8 py-4">
      <LogoLink />

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
