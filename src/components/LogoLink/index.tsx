import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LogoLink() {
  return (
    <Link href={"/"}>
      <Image
        src={"/logo.svg"}
        alt="Logo da site.set com cor branca em um fundo preto"
        width={115}
        height={32}
      />
    </Link>
  );
}
