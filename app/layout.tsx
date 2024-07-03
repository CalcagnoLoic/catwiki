import { Metadata } from "next";
import { montserrat } from "@/app/ui/font";
import Header from "@/app/ui/components/Header";
import Footer from "@/app/ui/components/Footer";

export const metadata: Metadata = {
  referrer: "origin-when-cross-origin",
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
      <body className={`${montserrat.className} antialiased`}>
        <div className="mx-4 mt-3 md:mx-16 md:mt-9 xl:mx-24">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
