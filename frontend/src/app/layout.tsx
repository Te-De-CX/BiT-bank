import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/provider/provider";


export const metadata: Metadata = {
  title: "BiT bank",
  description: "Fast and Efficient banking with BiT bank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`ntialiased`}
      >
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
