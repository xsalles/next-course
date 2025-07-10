import Footer from "@/components/Footer";
import Header from "@/components/Header/header";
import { Inter } from "next/font/google";
import '@/styles/globals.css'

interface LayoutProps {
  children?: React.ReactNode;
}

const interFont = Inter({
  subsets: ['latin'],
})

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className={`antialiased bg-black ${interFont.className}`}>
        <div className="relative flex min-h-screen flex-col dark">
          <Header />
          <main className="flex-1 flex flex-col min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}