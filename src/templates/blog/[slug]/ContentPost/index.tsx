import Avatar from "@/components/Avatar";
import { allPosts } from "contentlayer/generated";
import Image from "next/image";

export default function ContentPost({
  slug,
}: {
  slug: string | string[] | undefined;
}) {
  const post = allPosts.find(
    (post) =>
      post && post.slug.toLowerCase().includes(String(slug).toLowerCase())
  );

  return (
    <section className=" w-full md:w-[70%] mt-8 flex flex-col rounded-xl h-auto bg-gray-600">
      <Image
        src={String(post?.image)}
        alt={post?.title || "Post image"}
        quality={100}
        width={800}
        height={400}
        className="w-full"
      />

      <div className="flex flex-col w-full px-16 py-12">
        <h2 className="text-heading-xl text-white">{post?.title}</h2>
        <div className="flex items-center gap-3 mt-8">
          
          <Avatar isPostPage={true} date={post?.date ? new Date(post?.date).toLocaleDateString('pt-BR') : 'Data não informada'} author={post?.author} title={post?.title}/>
        </div>

        <p className="text-body-md text-white mt-6" dangerouslySetInnerHTML={{ __html: post?.body.html || "Conteúdo não disponível"}} />
          
      </div>
    </section>
  );
}
