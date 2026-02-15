import type { Metadata } from "next";
import { Cormorant_Garamond, Sora } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salem Saleh — Software Engineer",
  description:
    "CS @ Texas A&M · Previously Netflix, Meta, Figma · Building at the intersection of craft and scale.",
  openGraph: {
    title: "Salem Saleh — Software Engineer",
    description:
      "CS @ Texas A&M · Previously Netflix, Meta, Figma · Building at the intersection of craft and scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
