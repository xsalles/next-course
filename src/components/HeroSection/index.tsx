import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Clock, Store } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="flex mt-36 items-center gap-14 px-14 justify-between">
      <div className="flex flex-col items-start text-left gap-14">
        <div className="flex flex-col gap-8">
          <h1 className="text-white text-heading-hg max-w-[640px]">
            Venda seus produtos como afiliado em um único lugar
          </h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Clock width={20} height={20} className="text-cyan-100" />
              <p className="text-body-md text-white">
                Crie o seu site em menos de 5 minutos
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Store width={20} height={20} className="text-cyan-100" />
              <p className="text-body-md text-white">
                Acompanhe e otimize seu negócio online
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <Button className="w-full rounded-full">
            Criar loja grátis <ArrowRight />
          </Button>
          <p className="text-gray-300 text-body-xs">
            Não precisa de cartão de crédito
          </p>
        </div>
      </div>
      <Image
        alt="Ilustração de imagem"
        src={"/illustrationHero.png"}
        width={500}
        height={500}
      />
    </section>
  );
}
