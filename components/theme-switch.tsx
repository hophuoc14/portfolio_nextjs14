"use client";

import { useTheme } from "@/context/theme-context";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const pathName = usePathname()
  const [themeInteractive, setThemeInteractive] = React.useState<string>('dracula');

  useEffect(() => {
    document?.querySelector('#interactive')?.setAttribute('data-theme', themeInteractive);
  }, [themeInteractive]);


  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={() => {
        if (pathName === '/') {
          toggleTheme()
        } else {
          setThemeInteractive(themeInteractive === 'dracula' ? 'light' : 'dracula')
        }
      }}
    >
      {pathName === '/' ? theme === "light" ? <BsSun /> : <BsMoon />
      : themeInteractive === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
