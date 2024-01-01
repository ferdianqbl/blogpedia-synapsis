import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ProgressBarProvider from "@/lib/context/progress-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blogpedia",
  description: "A blog about everything",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBarProvider>
          <Navbar />
          <main className="container py-8">{children}</main>
          <Toaster />
        </ProgressBarProvider>
      </body>
    </html>
  );
}
