import PostCard from "@/components/PostCard";
import Search from "@/components/Search";

export default function BlogList() {
  return (
    <div className="h-screen items-center flex flex-col mt-20 bg-black text-white px-48 py-20">
      <div className="flex flex-col md:flex-row md:items-end gap-6 item md:justify-between w-full">
        <div className="flex flex-col items-start gap-3">
          <p className="bg-cyan-300 text-cyan-100 px-3 py-2 text-body-xs font-medium rounded-sm w-fit">
            BLOG
          </p>
          <h3 className="text-heading-xl w-[440px]">
            Dicas e estratégias para impulsionar seu negócio
          </h3>
        </div>

        <Search />
      </div>

      <PostCard
        date="20/10/2007"
        description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfeita para você. Criar uma loja virtual de sucesso nunca foi tão fácil. Com nossa plataforma intuitiva, você pode criar um site profissional para sua loja em minutos, sem precisar de conhecimentos técnicos."
        image="/assets/first-post.png"
        title="Esse é o primeiro post com card"
      />
    </div>
  );
}
