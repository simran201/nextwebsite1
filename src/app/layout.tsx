import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import About from "./about/page";
import Navigation from "../app/components/Navigation"
import  Header  from "../app/components/Header"
const inter = Inter({ subsets: ["latin"] });
import ThemeProvider from "../app/context/ThemeContext"

export const metadata: Metadata = {
  title: "portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider> 
        <Header />
        {children}
        </ThemeProvider>
        </body>

    </html>
  );
}
