'use client'

import { Discussions } from "@/components/Discussions";
import { MarketStories } from "@/components/MarketStories"
import { useGeneratorStore } from "@/lib/utils/sideBarState";

export default function Home() {

  const { setIsOpen, isOpen } = useGeneratorStore()

  const handelSideBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <main className="flex min-h-screen bg-white flex-1 relative">
      <button onClick={handelSideBar} className="w-fit h-24 bg-[#1E375F] absolute z-10 top-2/4 px-1">▶</button>
      <Discussions />
      <MarketStories />
    </main>
  );
}
