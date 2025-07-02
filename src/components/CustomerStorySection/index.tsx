import Image from "next/image";
import React from "react";

export default function CustomerStorySection() {
  return (
    <section className="w-full flex items-center justify-center flex-col gap-12 py-[168px] bg-gray-800">
      <h4 className="text-white text-heading-xl">Quem ultiliza, aprova!</h4>

      <div className="flex w-auto gap-6">
        <article className="text-white bg-gray-600 rounded-xl flex flex-col border border-gray-400 p-10 gap-10 w-[471px]">
          <p className="text-body-md italic">
            Criar minha loja com o site.set foi a melhor decisão para o meu
            negócio. A plataforma é super intuitiva, e consegui colocar meus
            produtos à venda em poucos minutos.
          </p>
          <div className="flex items-center gap-3">
            <Image
              className="border border-blue-200 rounded-[50%]"
              src="/anneteBones.svg"
              alt="Foto do cliente Annete Bones"
              width={36}
              height={36}
            />
            <div>
              <p className="text-body-sm font-medium">Annette Bones</p>
              <p className="text-body-xs text-gray-300">CEO na Anne Corp</p>
            </div>
          </div>
        </article>
        <article className="bg-gray-600 w-[471px] text-white rounded-xl flex flex-col border border-gray-400 p-10 gap-10">
          <p className="text-body-md italic">
            Transformar minha ideia em uma loja online foi fácil e rápido.
            Adorei as opções de personalização e a simplicidade para gerenciar
            os pedidos. Já vejo meus produtos alcançando mais pessoas!
          </p>
          <div className="flex items-center gap-4">
            <Image
              className="border border-blue-200 rounded-[50%]"
              src="jacobJones.svg"
              alt="Foto do cliente Jacob Jones"
              width={36}
              height={36}
            />
            <div>
              <p className="text-body-sm font-medium">Jacob Jones</p>
              <p className="text-body-xs text-gray-300">CEO na JJ Org</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
