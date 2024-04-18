'use client'

import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import {trpc} from "@/trpc/client";
import {useEffect} from "react";

export default function Home() {

  const {data} = trpc.post.getAll.useQuery()

  useEffect(() => {
    (async () => {
      console.log({data})
    })()
  }, [data]);

  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
    </main>
  );
}
