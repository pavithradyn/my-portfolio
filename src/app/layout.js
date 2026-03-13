import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DynamicBackground from "../components/DynamicBackground";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pavithra.dev",
  description: "Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         
  <DynamicBackground />
  {children}
</body>
    </html>
  );
}