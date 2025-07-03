import Search from "@/components/Search";

export default function Blog() {
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
    </div>
  );
}
