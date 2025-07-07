import Image from "next/image";
import Link from "next/link";

export default function PostCard({
  title,
  date,
  description,
  image,
  slug,
  author
}: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="flex w-full md:w-full flex-col gap-4 p-2 rounded-xl border border-gray-400 hover:border-blue-300 transition-colors duration-300 ease-in-out bg-gray-600 relative h-auto">
      <div className="absolute top-0 right-0 bg-gray-600 pl-[10px] pb-[6px] pt-[10px] pr-[14px] rounded-[0_11px_0_10px]">
        <p>{date}</p>
      </div>

      <Image
        className="rounded-md w-full"
        alt={`Imagem do post: ${title}`}
        src={image.trim()}
        width={385}
        height={200}
        quality={100}
      />

      <div className="flex flex-col gap-2 items-start">
        <h4 className="text-heading-xs text-white">{title}</h4>
        <p className="line-clamp-3 text-ellipsis text-body-xs text-gray-300 w-full overflow-hidden h-full">
          {description}
        </p>
      </div>

      <div className="flex gap-2 border-t border-gray-400 pt-3 mt-3 w-full">
        <Image src={author.image.trimEnd()} alt={`Ícone do autor do post ${title}`} width={20} height={20} className="rounded-[50%] border border-blue-200" />
        <p className="text-body-xs text-gray-300">{author.name}</p>
      </div>
    </Link>
  );
}
