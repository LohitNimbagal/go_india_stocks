'use client'

import { useGeneratorStore } from '@/utils/sideBarState'
import React from 'react'

export const SideBar = () => {
    const { isOpen } = useGeneratorStore()

    return (
        <div className={`bg-blue-300 min-w-60 lg:w-80 lg:block ${isOpen ? "md: block" : "md: hidden"}`}>SideBar</div>
    )

}