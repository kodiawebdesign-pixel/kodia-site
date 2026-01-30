import "./globals.css";
import { Cairo, Inter } from "next/font/google";

const cairo = Cairo({ subsets: ["arabic"], variable: "--font-ar" });
const inter = Inter({ subsets: ["latin"], variable: "--font-en" });

export const metadata = {
  title: "Kodia Web Design",
  description: "Web Design & Full-code Development",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={`${cairo.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
