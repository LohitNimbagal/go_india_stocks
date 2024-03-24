'use client'

import { Discussions } from "@/components/Discussions";
import { MarketStories } from "@/components/MarketStories"
import { useGeneratorStore } from "@/utils/sideBarState";

export default function Home() {

  const {setIsOpen, isOpen} = useGeneratorStore()

  const handelSideBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <main className="flex min-h-screen bg-red-300 flex-1 relative">
      <button onClick={handelSideBar} className="absolute inset-y-2/4 lg:hidden">▶️</button>
      <Discussions />
      <MarketStories />
    </main>
  );
}
