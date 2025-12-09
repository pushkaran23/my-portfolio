import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pushkaran | Blockchain Developer",
  description: "Portfolio of a Blockchain Developer",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white">
        <ThemeProvider attribute="class">
          <Navbar />
          <main className="px-6 md:px-20 py-6 transition-all">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}