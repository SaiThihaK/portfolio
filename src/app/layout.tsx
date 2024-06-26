import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/global/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import PageWrapper from "@/components/global/page-wrapper";
import MobileNavbar from "@/components/global/mobile-navbar/mobile-navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sai Thiha Kyaw",
  description: "Senior FullStack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageWrapper>
            <div className="fixed bottom-10 left-0 flex  w-full justify-center z-[9999999]">
              <MobileNavbar />
            </div>
            {children}
          </PageWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
