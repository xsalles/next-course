import Avatar from "@/components/Avatar";
import Markdown from "@/components/Markdown";
import { Post } from "contentlayer/generated";
import Image from "next/image";

export interface ContentPostProps {
  post: Post;
  params?: {slug: string}
}

export default function ContentPost({
  post
}: ContentPostProps) {

  return (
    <section className=" w-full md:w-[70%] flex flex-col rounded-xl h-auto bg-gray-600">
      <Image
        src={post?.image ? post.image : "/default-image.png"}
        alt={post?.title || "Post image"}
        quality={100}
        width={800}
        height={400}
        className="w-full"
      />

      <div className="flex flex-col w-full px-16 py-12">
        <h2 className="text-heading-xl text-white">{post?.title}</h2>
        <div className="flex items-center gap-3 mt-8 mb-12">
          <Avatar
            isPostPage={true}
            date={
              post?.date
                ? new Date(post?.date).toLocaleDateString("pt-BR")
                : "Data não informada"
            }
            author={post?.author}
            title={post?.title}
          />
        </div>

        <div className="prose prose-invert">
          <Markdown>
            {post?.body.raw ? post.body.raw : "Conteúdo não disponível."}
          </Markdown>
        </div>
      </div>
    </section>
  );
}
