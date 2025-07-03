import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="p-10 flex flex-col gap-6">
      <div className="flex gap-6 flex-col md:flex-row justify-between w-full">
        <article className="w-full flex flex-col text-left p-12 gap-4 bg-gray-400 rounded-xl md:w-6/12">
          <p className="bg-blue-400 text-blue-200 px-3 py-2 text-body-xs font-bold rounded-sm w-fit">
            SIMPLES
          </p>
          <h3 className="text-heading-lg text-gray-100">
            Crie um catálogo de produtos online em poucos minutos
          </h3>
        </article>

        <article className="w-full flex flex-col text-left p-12 gap-4 bg-gray-400 rounded-xl md:w-6/12">
          <p className="bg-blue-400 text-blue-200 px-3 py-2 text-body-xs font-bold rounded-sm w-fit">
            PRÁTICO
          </p>
          <h3 className="text-heading-lg text-gray-100">
            Venda para seu público através de uma plataforma única
          </h3>
        </article>
      </div>

      <article className="flex flex-col md:flex-row items-center md:justify-between md:gap-6 p-12 bg-gray-400 rounded-xl">
        <div className="flex flex-col items-start text-left gap-8 md:gap-40">
          <div className="flex flex-col gap-4">
            <p className="bg-blue-400 text-blue-200 px-3 py-2 text-body-xs font-bold rounded-sm w-fit">
              PERSONALIZÁVEL
            </p>
            <h3 className="text-heading-lg text-gray-100">
              Tenha uma loja online personalizada com a cara da sua marca
            </h3>
          </div>
          <Button className="w-full md:w-fit">
            Criar loja grátis
            <ArrowRight />
          </Button>
        </div>

        <Image
          alt="Ilustração de alguns cards de funcionalidades como compras, símbolo de casa"
          src={"/illustrationFeature.png"}
          width={400}
          height={400}
          className="hidden md:flex"
        />
      </article>
    </section>
  );
}
