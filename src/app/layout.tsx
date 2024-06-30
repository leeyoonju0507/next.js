import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
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
        <div>
          <h1
            style={{
              background: "white",
              height: "70px",
              textAlign: "center",
              lineHeight: "70px",
            }}
          >
            <Link href="http://localhost:3000">NEXT.JS</Link>
          </h1>
        </div>
        {children}
      </body>
    </html>
  );
}
