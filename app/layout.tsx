import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const vazirFont = localFont({
  src: [
    {
      path: "../public/font/Vazirmatn-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/Vazirmatn-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--vazir-font",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "امیر فود",
  description: "سفارش انلاین غذا از بهترین رستوران های ایران",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirFont.className} ${vazirFont.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
