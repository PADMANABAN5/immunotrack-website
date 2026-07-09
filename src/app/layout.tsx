import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./../assets/styles/globals.css";
import { avenir } from "@/fonts";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
       <body className={avenir.className}>
        <Header />
        <main className="pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}