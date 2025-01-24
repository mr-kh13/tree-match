import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/shared/providers/StoreProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Find your Tree!",
  description: "Created By Max Khedri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={roboto.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
