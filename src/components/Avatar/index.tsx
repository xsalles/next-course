import Image from "next/image";
import React from "react";


export default function Avatar({author, title}: AvatarProps) {
  return (
    <div className="flex gap-2 border-t border-gray-400 pt-3 mt-3 w-full">
      <Image
        src={author.image.trimEnd()}
        alt={`Ícone do autor do post ${title}`}
        width={20}
        height={20}
        className="rounded-[50%] border border-blue-200"
      />
      <p className="text-body-xs text-gray-300">{author.name}</p>
    </div>
  );
}
