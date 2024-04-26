import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Provider } from "@/context/trpc-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AnonyDev | Personal Portfolio",
  description: "AnonyDev is a full-stack developer with more than 1 years of experience.",
};

export default function RootLayout(
  { children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <Provider>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              {children}
              {/* <Footer /> */}

              <Toaster position="top-right" />
              <ThemeSwitch />
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </Provider>
      </body>
    </html>
  );
}
