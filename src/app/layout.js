import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "everycarbuyer | Your car, Your price Selling made simple",
  description:
    "Find a competitive offer with a personal touch. Sell confidently, sell with everycarbuyer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
