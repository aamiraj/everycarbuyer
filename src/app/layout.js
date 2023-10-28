import "./globals.css";
import localFont from "next/font/local";

// const br_omega = localFont({
//   src: [
//     {
//       path: "../BROmega/BROmega-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../BROmega/BROmega-Light.woff2",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../BROmega/BROmega-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../BROmega/BROmega-SemiBold.woff2",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../BROmega/BROmega-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
// });

export const metadata = {
  title: "everycarbuyer | Your car, Your price Selling made simple",
  description:
    "Find a competitive offer with a personal touch. Sell confidently, sell with everycarbuyer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-bromega">{children}</body>
    </html>
  );
}
