import type { Metadata } from "next";
import { Inter ,Questrial } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

const questrial = Questrial({ subsets: ["latin"],
  variable:"--font-questrial",
  weight:"400"
 });
export const metadata: Metadata = {
  title: "Ayush Nepali",
  description: "A portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={questrial.className}>
      <NavBar/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
