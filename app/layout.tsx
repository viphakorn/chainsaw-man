import "@/styles/globals.css";
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
      <body className="font- font flex h-screen flex-col bg-slate-800 font-[Roboto] text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
