import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1>Initial Page</h1>
    </div>
  );
}
