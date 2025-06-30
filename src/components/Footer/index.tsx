import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoLink from "../LogoLink";

export default function Footer() {
  return (
    <footer className="flex items-center justify-around py-9 bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60 bg-black border-t border-white/10">
      <LogoLink />
      <nav className="flex flex-col md:flex-row items-center gap-8 text-sm text-blue-100">
        <Link href={"/termos-de-uso"}>Termos de uso</Link>
        <Link href={"/politica-de-privacidade"}>Política de Privacidade</Link>
        <Link href={"/feedback"}>Enviar Feedback</Link>
      </nav>
    </footer>
  );
}
