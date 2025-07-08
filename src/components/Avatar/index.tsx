import { AvatarProps } from "@/interfaces";
import Image from "next/image";
import { is } from "node_modules/date-fns/locale/is.cjs";
import React from "react";


export default function Avatar({author, title, isPostPage, date}: AvatarProps) {
  return (
    <div className="flex gap-2 border-t border-gray-400 pt-3 mt-3 w-full">
      <Image
        src={author ? author.image.trimEnd() : ''}
        alt={`Ícone do autor do post ${title}`}
        width={isPostPage ? 36 : 20}
        height={isPostPage ? 36 : 20}
        className="rounded-[50%] border border-blue-200"
      />
      {
        isPostPage ? (
          <div className="flex flex-col">
            <p className="text-body-sm text-white">{author ? author.name : 'Autor desconhecido'}</p>
            <p className="text-body-sm text-gray-300">{date}</p>
          </div>
        ) : (
          <p className="text-body-xs text-gray-300">{author ? author.name : 'Autor desconhecido'}</p>
        )
      }
    </div>
  );
}
