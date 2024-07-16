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
  description:
    "Discover cat varieties and their characteristics on our site. Explore the most popular cats, learn more about their unique characteristics and discover why adopting a cat can improve your life. Join our community of cat lovers!",
  authors: [{ name: "Calcagno Loïc", url: "https://github.com/CalcagnoLoic" }],
  keywords: ["NextJS", "Cat", "Most Researched Breeds"],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <div className="mx-4 mt-3 flex h-screen flex-col md:mx-16 md:mt-9 xl:mx-24">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
