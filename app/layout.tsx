import Header from "@/components/header";
import "./globals.css";
import {Inter} from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import {Toaster} from "react-hot-toast";
import {Provider} from "@/context/trpc-provider";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "AnonyDev | Personal Portfolio",
  description: "AnonyDev is a full-stack developer with more than 1 years of experience.",
};

export default  function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body
      className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
    >
    <div
      className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
    <div
      className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
    <div
      className="bg-[#1679AB] absolute top-[14rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[14rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[20%] dark:bg-[#51829B]"></div>
    <Provider>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header/>
          {children}
          <Footer/>

          <Toaster position="top-right"/>
          <ThemeSwitch/>
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </Provider>
    </body>
    </html>
  );
}
