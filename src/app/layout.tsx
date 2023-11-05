import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components";

export const metadata: Metadata = {
  title: "Book your doctor",
  description:
    "Reserve a spot so that you can be treated well and on your time of availability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
