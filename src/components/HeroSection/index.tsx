import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="flex mt-36 items-center gap-14 justify-around">
      <div className="flex flex-col items-start text-left gap-14">
        <div className="flex flex-col gap-8">
          <h1 className="text-white text-heading-hg max-w-[640px]">
            Venda seus produtos como afiliado em um único lugar
          </h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Image
                src="/clock.svg"
                alt="Pequeno ícone de um relógio"
                width={20}
                height={20}
              />
              <p className="text-body-md text-white">
                Crie o seu site em menos de 5 minutos
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/store.svg"
                alt="Pequeno ícone de uma loja"
                width={20}
                height={20}
              />
              <p className="text-body-md text-white">
                Acompanhe e otimize seu negócio online
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <Button className="w-full rounded-full">Criar loja grátis</Button>
          <p className="text-gray-300 text-body-xs">
            Não precisa de cartão de crédito
          </p>
        </div>
      </div>
      <Image
        alt="Ilustração de imagem"
        src={"/illustration.png"}
        width={471}
        height={491}
      />
    </section>
  );
}
