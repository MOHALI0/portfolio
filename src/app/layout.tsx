import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Mohammed Ali Saleh Al Sidran | Lead Full-Stack Developer & CS Student",
  description:
    "Portfolio of Mohammed Ali Saleh Al Sidran - Computer Science student at Jazan University (4.80/5.00 GPA) & Lead Full-Stack Developer specializing in Next.js, TypeScript, Python, and FinTech systems.",
  keywords: [
    "Mohammed Ali Saleh Al Sidran",
    "Mohammed Al Sidran",
    "Lead Developer",
    "Full-Stack Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "FinTech",
    "Jazan University",
    "Saudi Arabia",
  ],
  authors: [{ name: "Mohammed Ali Saleh Al Sidran" }],
  creator: "Mohammed Ali Saleh Al Sidran",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohammed-sidran.dev",
    title: "Mohammed Ali Saleh Al Sidran | Developer Portfolio",
    description:
      "Modern, high-performance developer portfolio showcasing FinTech applications, enterprise dashboards, and technical competencies.",
    siteName: "Mohammed Ali Saleh Al Sidran Portfolio",
  },
  icons: {
    icon: "/avatar.jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0b10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
