import type { Metadata } from "next";
import { M_PLUS_1, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

import Header from "@/components/parts/Header";

const mPlus1 = M_PLUS_1({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KABUTO",
  description: "知りたい情報にアクセスできる就活プラットフォーム",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
