import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header/mainHeader";

export const metadata: Metadata = {
  title: "Crave House",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
