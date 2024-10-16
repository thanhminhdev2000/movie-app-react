import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie App",
  description: "Movie App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex justify-between items-center flex-col">
          <div className="w-3/4">{children}</div>
        </div>
      </body>
    </html>
  );
}
