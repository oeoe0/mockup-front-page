import { Inter } from "next/font/google";
import "./globals.css";
import AppHeader from "./components/AppHeader/AppHeader";
import AppFooter from "./components/AppFooter/AppFooter";
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My site",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
      </head>
      <body className={inter.className}>
        <PrimeReactProvider>
          <AppHeader />
          {children}
          <AppFooter />
        </PrimeReactProvider>
      </body>
    </html>
  );
}
