import "./globals.css";
import "../assets/css/materialdesignicons.min.css";
import { Layout } from "@/components/Layout";
import "../../src/styles/main.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <body className="relative font-arial text-base text-black dark:text-white bg-white dark:bg-slate-900">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
