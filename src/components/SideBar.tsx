// @ts-nocheck

'use client'

import { useGeneratorStore } from '@/lib/utils/sideBarState'
import { relative } from 'path'
import React from 'react'

const navItems: {
    title: string
    icon: SVGElement
}[] = [
        {
            title: "Discussion Fourm",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)" width="30px" height="30px" ><path d="M14.45 19L12 22.5L9.55 19H3C2.44772 19 2 18.5523 2 18V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H14.45Z"></path></svg>
        },
        {
            title: "Market Stories",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="30px" height="30px"><path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM8.50488 14.0027V16.0027H11.0049V18.0027H13.0049V16.0027H14.0049C15.3856 16.0027 16.5049 14.8835 16.5049 13.5027C16.5049 12.122 15.3856 11.0027 14.0049 11.0027H10.0049C9.72874 11.0027 9.50488 10.7789 9.50488 10.5027C9.50488 10.2266 9.72874 10.0027 10.0049 10.0027H15.5049V8.00275H13.0049V6.00275H11.0049V8.00275H10.0049C8.62417 8.00275 7.50488 9.12203 7.50488 10.5027C7.50488 11.8835 8.62417 13.0027 10.0049 13.0027H14.0049C14.281 13.0027 14.5049 13.2266 14.5049 13.5027C14.5049 13.7789 14.281 14.0027 14.0049 14.0027H8.50488Z"></path></svg>
        },
    ]

export const SideBar = () => {

    const { isOpen } = useGeneratorStore()

    return (
        <div className={`bg-[#1E375F] min-h-screen min-w-60 lg:w-80 ${isOpen ? "absolute" : "relative"}`}>

            <div className={!isOpen && 'sticky top-0'}>
                <section className='p-5 border-b-2 border-[#364F72] flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)" width="30px" height="30px" >
                            <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z">
                            </path>
                        </svg>
                        <p>Hello, User</p>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)" width="30px" height="30px" >
                        <path d="M22 20H2V18H3V11.0314C3 6.04348 7.02944 2 12 2C16.9706 2 21 6.04348 21 11.0314V18H22V20ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z">
                        </path>
                    </svg>
                </section>

                <ul>
                    {navItems.map((item) => (
                        <li className='w-full p-2 flex items-center gap-2' key={item.title}>
                            {item.icon}
                            {item.title}
                        </li>
                    ))
                    }
                </ul>
            </div>

        </div>
    )
}