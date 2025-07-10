import Search from "@/components/Search";
import {  Post } from ".contentlayer/generated";
import { compareDesc } from "date-fns";
import PostCard from "@/components/PostCard";
import { CtaSection } from "../landing-page/sections";
import { useRouter } from "next/router";

export interface BlogListProps {
  posts: Post[];
}

export default function BlogList({posts}: BlogListProps) {
  const router = useRouter();
  const contentSearched = router.query.post as string;

  const pageTitle = contentSearched
    ? `Resultados para "${contentSearched}"`
    : "Dicas e estratégias para impulsionar seu negócio";

  const postList = contentSearched
    ? posts.filter((post) =>
        post.title.toLowerCase()?.includes(contentSearched.toLowerCase())
      )
    : posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  const hasPosts = postList.length > 0;

  return (
    <>
      <div className="items-center flex flex-col mt-20 bg-black text-white px-4 md:px-48 pt-20 mb-32">
        <div className="flex flex-col md:flex-row md:items-end gap-6 item md:justify-between w-full">
          <div className="flex flex-col items-start gap-3">
            <p className="bg-cyan-300 text-cyan-100 px-3 py-2 text-body-xs font-medium rounded-sm w-fit">
              BLOG
            </p>
            <h3 className="text-heading-xl max-w-[440px]">{pageTitle}</h3>
          </div>

          <Search />
        </div>
        {hasPosts ? (
          <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 w-full">
            {postList.map((post, key) => (
              <PostCard {...post} key={key} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-10">
            <p className="text-body-md">Nenhum resultado encontrado.</p>
          </div>
        )}
      </div>

      

      <CtaSection />
    </>
  );
}
