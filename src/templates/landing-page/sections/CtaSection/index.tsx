import { ArrowRight, Store } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="w-full flex items-center flex-col gap-14 bg-gray-400 relative pb-16">
     <div className="z-0 absolute inset-0 hidden md:block bg-[url('/backgroundCTA.png')] bg-cover bg-center bg-no-repeat" />

      <Store className="z-10 w-16 h-16 p-4 rounded-full bg-cyan-300 text-cyan-100 translate-y-[-30px]" />
      <h3 className="text-white text-heading-xl md:w-[450px] text-center z-10">
        Crie uma loja online e inicie suas vendas ainda hoje
      </h3>
      <Button className="rounded-full z-10">
        Criar loja grátis
        <ArrowRight />
      </Button>
    </section>
  );
}
