'use client'

import { Discussions } from "@/components/Discussions";
import { MarketStories } from "@/components/MarketStories"
import { useGeneratorStore } from "@/lib/utils/sideBarState";
import { useState } from "react";

export default function Home() {

  const { setIsOpen, isOpen } = useGeneratorStore()
  const [isActive, setIsActive] = useState<"discussion" | "market">("discussion")

  const handelSideBar = () => {
    setIsOpen(!isOpen)
  }

  const handelNav = (id: string) => {
    setIsActive(id as "discussion" | "market")
  }

  return (
    <main className="flex min-h-screen overflow-hidden bg-white flex-1 relative">
      <button onClick={handelSideBar} className="w-fit h-24 bg-[#1E375F] absolute z-10 top-2/4 px-1">▶</button>

      <div className="lg:hidden w-screen flex flex-col items-center justify-center">
        <div className="w-full flex justify-around bg-blue-900">
          <button id="discussion" onClick={(e) => handelNav(e.currentTarget.id)} className={`w-6/12 p-3 ${isActive === "discussion" ? "border-b bg-blue-800" : ""}`}>Discussion Forum</button>
          <button id="market" onClick={(e) => handelNav(e.currentTarget.id)} className={`w-6/12 h-full px-4${isActive === "market" ? "border-b bg-blue-800" : ""}`}>Market Stories</button>
        </div>

        <div className="flex flex-col justify-center">
          {isActive === "discussion" ? <Discussions /> : <MarketStories />}
        </div>
      </div>

      <div className="hidden lg:flex min-h-screen overflow-hidden bg-white flex-1 relative">
        <Discussions />
        <MarketStories />
      </div>
    </main>
  );
}
