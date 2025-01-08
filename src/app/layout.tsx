// src/app/layout.tsx

import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Providers from "./context/Providers"; // Pastikan path benar

export const metadata = {
  title: "TC Mudah",
  description: "Belajar mata kuliah TC dengan mudah dan efisien",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
