'use client'

import { Discussions } from "@/components/Discussions";
import { MarketStories } from "@/components/MarketStories"
import { useGeneratorStore } from "@/lib/utils/sideBarState";
import { useState } from "react";

export default function Home() {

  const { setIsOpen, isOpen } = useGeneratorStore()
  const [isActive, setIsActive] = useState("discussion")

  const handelSideBar = () => {
    setIsOpen(!isOpen)
  }

  const handelNav = (id: string) => {
    setIsActive(id)
  }

  return (
    <main className="flex min-h-screen bg-white flex-1 relative">
      <button onClick={handelSideBar} className="w-fit h-24 bg-[#1E375F] absolute z-10 top-2/4 px-1">▶</button>

      {/* <div className="lg:hidden w-full bg-red-300 flex flex-col items-center">
        <div className="w-full flex items-center justify-around">
          <h2 id="discussion" onClick={(e) => handelNav(e.target.id)}>Discussion Fourm</h2>
          <h2 id="market" onClick={(e) => handelNav(e.target.id)}>Market Stories</h2>
        </div> */}

        {/* {isActive === "discussion" ? <Discussions /> : <MarketStories />} */}
      {/* </div> */}

      <Discussions />
      <MarketStories />
    </main>
  );
}
