import { Metadata } from "next";
import { montserrat } from "@/app/ui/font";

export const metadata: Metadata = {
  referrer: 'origin-when-cross-origin',
  title: {
    template: "%s | Catwiki",
    default: "Catwiki",
  },
  description: "TODO",
  authors: [{ name: "Calcagno Loïc", url: "https://github.com/CalcagnoLoic" }],
  keywords: ["NextJS", "Cat", "Most Researched Breeds"],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
