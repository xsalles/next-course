import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";
import Image from "next/image";

export default function BenefitsSection() {
  return (
    <section className="relative w-full h-[556px] flex flex-col items-center justify-center gap-8 p-14 bg-gray-800">
      <Image
        src={"/backgroundBenefits.png"}
        fill
        alt="Background"
        style={{ objectFit: "cover" }}
        className="z-0"
      />

      <h3 className="text-heading-xl z-10 text-white relative">
        Sua loja de afiliados, simples, do jeito que deveria ser
      </h3>
      <div className="relative z-10 flex gap-4 w-[68%] items-center justify-center">
        <article className="flex text-left gap-4 flex-col text-white bg-blue-400 p-6 rounded-lg w-[33.3%]">
          <PaintbrushVertical className="w-9 h-9 bg-blue-300 p-2 rounded-lg" />
          <div className="flex flex-col gap-2">
            <h5 className="text-heading-sm">Personalize seu site</h5>
            <p className="text-body-sm">
              Adicione sua logo, favicon, cores no seu catalago e tenha tudo com
              a sua cara.
            </p>
          </div>
        </article>
        <article className="flex text-left gap-4 flex-col text-white bg-cyan-300 p-6 rounded-lg w-[33.3%]">
          <Store className="w-9 h-9 bg-cyan-200 p-2 rounded-lg" />
          <div className="flex flex-col gap-2">
            <h5 className="text-heading-sm">Venda de qualquer loja</h5>
            <p className="text-body-sm">
              Não importa a loja, o Site.Set permite que você insera qualquer
              link de afiliado.
            </p>
          </div>
        </article>
        <article className="flex text-left gap-4 flex-col text-white bg-blue-400 p-6 rounded-lg w-[33.3%]">
          <HeartHandshake className="w-9 h-9 bg-blue-300 p-2 rounded-lg" />
          <div className="flex flex-col gap-2">
            <h5 className="text-heading-sm">Receba suporte amigável</h5>
            <p className="text-body-sm">
              Nossa equipe estará sempre pronta para te atender para ajudar no
              que for preciso.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
