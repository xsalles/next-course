import { ArrowRight, Store } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export default function CtaSection() {
  return (
    <section className="w-full flex items-center flex-col gap-14 bg-gray-400 relative pb-16">
      <Store className="w-16 h-16 p-4 rounded-full bg-cyan-300 text-cyan-100 translate-y-[-30px]" />
      <h3 className="text-white text-heading-xl w-[450px] text-center">
        Crie uma loja online e inicie <br /> suas vendas ainda hoje
      </h3>
      <Button className="rounded-full">
        Criar loja grátis
        <ArrowRight />
      </Button>
    </section>
  );
}
