import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";

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
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4 bg-black">
      <h2 className="text-4xl text-white">Titleeads</h2>
    <Button variant={"secondary"}>
      Pedro
    </Button>
    </div>
  );
} 
