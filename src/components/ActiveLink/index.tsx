import { cn } from "@/lib/utils";
import { Url } from "next/dist/shared/lib/router/router";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
}

export default function ActiveLink({ ...props }: ActiveLinkProps) {
  const router = useRouter();

  const isCurrentPath =
    router.asPath === props.href ||
    router.asPath.startsWith(String(props.as)) ||
    router.asPath === props.as;

  return (
    <Link
      className={cn(
        "font-medium transition-colors ease-in-out duration-300 hover:text-blue-400",
        isCurrentPath ? "text-blue-600" : "text-white"
      )}
      href={props.href}
    >
      {props.children}
    </Link>
  );
}
