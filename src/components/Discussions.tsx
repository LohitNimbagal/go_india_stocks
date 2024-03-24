import React from 'react'

const discussions = [
    {
        "username": "JohnSmith22",
        "sector": 789,
        "post_date": "2024-03-26",
        "content": "Ut sit amet orci sollicitudin, feugiat neque id, eleifend tellus. Vivamus malesuada ex eu sapien aliquet, vitae varius neque tempor.",
        "likes": 12,
        "views": 90
    },
    {
        "username": "EmilyArtistic",
        "sector": 234,
        "post_date": "2024-03-27",
        "content": "Fusce auctor sapien et leo sodales, vitae viverra felis aliquam. Nulla non nulla ac odio condimentum aliquet sed in orci.",
        "likes": 25,
        "views": 150
    },
    {
        "username": "TechGuru99",
        "sector": 567,
        "post_date": "2024-03-28",
        "content": "Phasellus vestibulum odio eget nibh congue, vel venenatis turpis hendrerit. Nam sed ligula at nisi euismod aliquam id quis odio.",
        "likes": 18,
        "views": 110
    }
]


export const Discussions = () => {
    return (
        <div className='w-3/4 p-3'>
            <h2 className='text-red-400 text-xl uppercase font-bold'>Discussion Fourm</h2>

            <section className='p-2 space-y-5'>
                {discussions.map((item) => (
                    <div className='w-full rounded-lg border text-[#828282] bg-white text-card-foreground shadow-xl' key={item.username}>
                        <div className='w-full flex items-center justify-between space-y-1.5 p-6'>
                            <div className='space-x-5 flex items-center'>
                                <div className='rounded-full p-2 bg-orange-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="3 0px" height="30px"><path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"></path></svg>
                                </div>

                                <h5 className='text-[#828282] font-semibold'>{item.username}</h5>
                                <div className='bg-blue-700 w-fit rounded-xl text-xs text-white text-center px-2 py-1'>Sector {item.sector}</div>
                            </div>
                            <p className='text-blue-700 text-xs'>{item.post_date}</p>
                        </div>

                        <div className='text-[#828282] px-24 p-6 pt-0'>
                            <p>{item.content}</p>
                        </div>

                        <div className='w-full flex items-center justify-start gap-20 p-6 pt-0 px-24 text-black'>
                            <div className='flex items-center gap-2 text-sm'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20px" height="20px"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>
                                {item.likes}
                            </div>
                            <div className='flex items-center gap-2 text-sm'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20px" height="20px"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>

                                {item.views}
                            </div>
                            <div className='flex items-center gap-2 text-sm'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20px" height="20px"><path d="M5.76282 17H20V5H4V18.3851L5.76282 17ZM6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455Z"></path></svg>
                                Comments
                            </div>
                            <div className='flex items-center gap-2 text-sm'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20px" height="20px"><path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path></svg>

                                Share
                            </div>
                        </div>
                    </div>
                ))

                }
            </section>
        </div>
    )
}