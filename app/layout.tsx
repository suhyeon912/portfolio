import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suhyeon | Frontend Developer",
  description:
    "Frontend-first fullstack developer who leverages AI tools to ship faster and smarter — from pixel-perfect React UIs to Spring/Java APIs.",
  keywords: [
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Spring Boot",
    "Portfolio",
  ],
  openGraph: {
    title: "Suhyeon | Frontend Developer",
    description:
      "Frontend-first fullstack developer with 4+ years of experience building scalable web apps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#080810] text-gray-100 antialiased">{children}</body>
    </html>
  );
}
