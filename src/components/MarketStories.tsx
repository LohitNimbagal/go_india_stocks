import React from 'react'
import Image from 'next/image'

const marketstories = [
    {
        title: "Tech Stocks Surge",
        description: "Major tech companies report stellar earnings, driving market indices to new highs.",
    },
    {
        title: "Cryptocurrency Market",
        description: "Bitcoin, Ethereum, and other cryptocurrencies experience a surge in trading activity amid market volatility.",
    },
    {
        title: "Consumer Spending",
        description: "Strong consumer spending during the holiday season leads to a jump in retail stocks.",
    },
    {
        title: "Oil Prices Soar",
        description: "Global oil prices spike as geopolitical tensions threaten oil supply chains.",
    }
]



export const MarketStories = () => {
    return (
        <section className='flex-1 p-3'>
            <h2 className='text-red-400 text-lg uppercase font-bold'>Market Stories</h2>

            <ul className='p-2 space-y-3'>
                {marketstories.map((item) => (
                    <li className='w-[300px] flex items-flex flex-col' key={item.title}>
                        <Image
                            src="/image.png"
                            width={300}
                            height={200}
                            alt="Picture of the author"
                        />

                        <div className='p-2'>
                            <h6 className='text-[#89909C] text-sm'>{item.title}</h6>

                            <p className='text-xs text-[#AAAFB4]'>{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
