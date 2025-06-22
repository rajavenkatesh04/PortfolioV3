import { Geist, Geist_Mono } from "next/font/google";
import { Josefin_Sans } from 'next/font/google';
import Providers from "@/app/_components/ThemeProvider";
import "./globals.css";
import Navbar from "@/app/_components/ui/Navbar";
import { Analytics } from "@vercel/analytics/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
    subsets: ['latin'],
    weight: ['400', '600'], // adjust as needed
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Raja's Portfolio",
  description: "Raja's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Providers>
          <div className={`min-h-screen`}>
              <Navbar/>
              <main className={``}>{children}</main>
              <Analytics/>
          </div>
      </Providers>
      </body>
    </html>
  );
}
