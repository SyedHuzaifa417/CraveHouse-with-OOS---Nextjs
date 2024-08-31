import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/mainHeader";
import Footer from "@/components/footer/footer";
import { AuthWrapper } from "@/components/AuthWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Crave House",
    template: "%s | Crave House",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <AuthWrapper>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthWrapper>
      </body>
    </html>
  );
}
