import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logos Caffe | Holeta",
  description: "Explore the Logos Caffe menu. Fresh food, good company, and delicious favorites in Holeta, Ethiopia.",
  applicationName: "Logos Caffe Menu",
  openGraph: { title: "Logos Caffe | Holeta", description: "Fresh food, good company. Explore the menu at Logos Caffe in Holeta, Ethiopia.", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={geist.variable}><body className="min-h-screen antialiased">{children}</body></html>;
}
