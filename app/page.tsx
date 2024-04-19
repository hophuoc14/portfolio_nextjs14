'use client'

import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { trpc } from "@/trpc/client";
import { useEffect } from "react";

export default function Home() {

  const { data } = trpc.post.getAll.useQuery()

  useEffect(() => {
    (async () => {
      console.log({ data })
    })()
  }, [data]);

  return (
    <>
      <Header />
      
      <main className="flex flex-col items-center px-4">
        <div
          className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <div
          className="bg-[#1679AB] absolute top-[14rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[14rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[20%] dark:bg-[#51829B]"></div>
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
