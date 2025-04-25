import "./globals.css";
import { satoshi } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hutly | Real Estate",
  description:
    "Discover your dream home with Hutly, the ultimate real estate platform for buyers and sellers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
