import "./globals.css";
import Header from "./components/header";
import { Inter } from "next/font/google";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
 
  title: "Best Taxi Meter",
  description:
    "Best Taxi Meter is the most customizable, accurate, and reliable professional taxi meter application in the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
