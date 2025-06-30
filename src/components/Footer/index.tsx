import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex items-center justify-around py-9 bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60 bg-black border-t border-white/10">
      <Image
        src="/logo.svg"
        alt="Essa é a nossa logo"
        width={115}
        height={32}
      />
      <div className="flex  items-center gap-8 text-sm text-blue-100">
        <p>Termos de uso</p>
        <p>Política de Privacidade</p>
        <p>Enviar Feedback</p>
      </div>
    </footer>
  );
}
