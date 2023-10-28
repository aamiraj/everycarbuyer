import "./globals.css";

export const metadata = {
  title: "everycarbuyer | Your car, Your price Selling made simple",
  description:
    "Find a competitive offer with a personal touch. Sell confidently, sell with everycarbuyer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
