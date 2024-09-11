import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Inter, Poppins, Arial } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});


export const metadata = {
  title: "Sentinel Packs",
  description: "Sentinel Packs by SafeCare Tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.svg"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable}`}
      ><Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
