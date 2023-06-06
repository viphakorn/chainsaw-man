import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Chainsaw Man Wiki",
  description: "Chainsaw Man Wiki",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col bg-slate-800 text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
