import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import StoreProvider from "./StoreProvider";

import Layout from "@/components/Layout";
import "../scss/app.scss";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Unsplash collection",
  description: "Collection of images, fullstack challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <Layout className={beVietnamPro.className}>{children}</Layout>
      </StoreProvider>
    </html>
  );
}
