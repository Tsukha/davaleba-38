import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "A Next.js app with nested routes and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          <Navigation />
          <main className="main-content fade-in">{children}</main>
        </div>
      </body>
    </html>
  );
}
