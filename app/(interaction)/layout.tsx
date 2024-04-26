"use client";

import { PropsWithChildren, useEffect } from "react";
import { themeChange } from "theme-change";
import { InteractionHeader } from "./components/Header";

export default function InteractionLayout({ children }: PropsWithChildren) {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div id="interactive" className="min-h-[100dvh] overflow-hidden">
      <InteractionHeader />
      <div className="h-20"></div>
      {children}
    </div>
  );
}
