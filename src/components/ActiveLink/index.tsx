'use client'

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
}

export default function ActiveLink({ ...props }: ActiveLinkProps) {
  const pathname = usePathname();

  const isCurrentPath =
    pathname === props.href ||
    pathname === props.as ||
    (props.as && pathname && pathname.startsWith(String(props.as)));

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
