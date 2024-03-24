import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/Card'
import { discussions } from "@/db.json"


export const Discussions = () => {
    return (
        <div className='w-3/4 p-3'>
            <h2 className='text-red-400 text-xl uppercase font-bold'>Discussion Fourm</h2>

            <section className='p-2 space-y-5'>
                {discussions.map((item) => (
                    <Card className='w-full'>
                        <CardHeader className='w-full flex flex-row items-center justify-between'>
                            <div className='space-x-5 flex items-center'>
                                <div className='rounded-full p-2 bg-orange-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="3 0px" height="30px"><path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"></path></svg>
                                </div>

                                <h5 className='text-[#828282] font-semibold'>{item.username}</h5>
                                <div className='bg-blue-700 w-fit rounded-xl text-xs text-center px-2 py-1'>Sector {item.sector}</div>
                            </div>
                            <p className='text-blue-700 text-xs'>{item.post_date}</p>
                        </CardHeader>

                        <CardContent className='text-[#828282] px-24'>
                            <p>{item.content}</p>
                        </CardContent>

                        <CardFooter>

                        </CardFooter>
                    </Card>
                ))

                }
            </section>
        </div>
    )
}