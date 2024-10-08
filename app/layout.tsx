import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/custom.css";

//Import Dark Mode
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import SessisonProvider from "@/components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DormHive Dashboard",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <main className="relative h-[100dvh] w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <SessisonProvider />
      </body>
    </html>
  );
}
