export default function FeatureSection() {
  return (
    <section className="p-14">
      
    <div className="flex gap-6 justify-between">
        <article className="flex flex-col text-left p-12 gap-4 bg-gray-400 rounded-xl">
        <p className="bg-blue-400 text-blue-200 px-3 py-2 text-body-xs font-bold rounded-sm w-fit">
          SIMPLES
        </p>
        <h3 className="text-heading-lg text-gray-100">
          Crie um catálogo de produtos online em poucos minutos
        </h3>
      </article>

      <article className="flex flex-col text-left p-12 gap-4 bg-gray-400 rounded-xl">
        <p className="bg-blue-400 text-blue-200 px-3 py-2 text-body-xs font-bold rounded-sm w-fit">
          PRÁTICO
        </p>
        <h3 className="text-heading-lg text-gray-100">
          Venda para seu público através de uma plataforma única
        </h3>
      </article>

    </div>

      <article></article>
    </section>
  );
}
