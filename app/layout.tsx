import Footer from "@/pages/footer";
import "./globals.css";
import Header from "@/pages/header";
import { Providers } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { poppins } from "@/utils/fonts";

export const metadata = {
  title: "web portal for mobile phones",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
