'use client'

import { Discussions } from "@/components/Discussions";
import { MarketStories } from "@/components/MarketStories"
import { useGeneratorStore } from "@/lib/utils/sideBarState";
import { useState } from "react";

const navItems = ["Discussion Fourm", "Market"]

export default function Home() {

  const { setIsOpen, isOpen } = useGeneratorStore()
  const [isActive, setIsActive] = useState<"Discussion Fourm" | "Market">("Discussion Fourm")

  const handelSideBar = () => {
    setIsOpen(!isOpen)
  }

  const handelNav = (id: string) => {
    setIsActive(id as "Discussion Fourm" | "Market")
  }

  return (
    <main className="flex min-h-screen overflow-hidden bg-white flex-1 relative">
      <button onClick={handelSideBar} className="w-fit h-24 bg-[#1E375F] fixed z-10 top-96 px-1">▶</button>

      <div className="lg:hidden w-screen flex flex-col items-center justify-center">
        <div className="w-full flex justify-around bg-blue-900">

          { navItems.map((item) => (
            <button id={item} onClick={(e) => handelNav(e.currentTarget.id)} className={`w-6/12 p-3 ${isActive === item ? "border-b-4 bg-blue-800 border-red-600" : ""}`}>{item}</button>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          {isActive === "Discussion Fourm" ? <Discussions /> : <MarketStories />}
        </div>
      </div>

      <div className="hidden lg:flex min-h-screen overflow-hidden bg-white flex-1 relative">
        <Discussions />
        <MarketStories />
      </div>
    </main>
  );
}
