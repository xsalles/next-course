import Image from "next/image";

export default function PostCard({
  title,
  date,
  description,
  imageUrl,
}: PostCardProps) {
  return (
    <article className="flex md:w-[305px] flex-col gap-4 p-2 rounded-xl border border-gray-400 bg-gray-600 w-[95%] relative h-[310px]">
      <div className="absolute top-0 right-0 bg-gray-600 pl-[10px] pb-[6px] pt-[10px] pr-[14px] rounded-[0_11px_0_10px]">
        <p>{date}</p>
      </div>

      <Image
        className="rounded-md"
        alt={`Imagem do post: ${title}`}
        src={imageUrl}
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
    </article>
  );
}
