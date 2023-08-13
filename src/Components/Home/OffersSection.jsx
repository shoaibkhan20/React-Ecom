export default function OffersSection() {
  return (
    <div className="w-full py-10">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-wrap gap-1">
            <div className="w-full md:w-[58%] h-[360px] bg-black text-white grid place-items-center ">
                <div className="w-[50%] text-center">
                    <h1 className="uppercase text-2xl">peace of mind</h1>
                    <p className="text-[13px] my-5">A one stop-platform for all your fashion needs.
                        Hassle-free.buy with your peace of mind.
                    </p>
                    <button className='mt-5 py-2 px-5 border-4 bg-white text-black'> BUY NOW</button>
                    
                </div>
            </div>

            <div className="w-full md:w-[40%] h-[360px] bg-black text-white grid place-items-center ">
                <div className="w-[70%] text-center">
                    <h1 className="uppercase text-2xl">buy 2 get 1 free</h1>
                    <p className="text-[13px] my-5">End of season sale.
                    buy any two items of your choice and get 1 free.
                    </p>
                    <button className='mt-5 py-2 px-5 border-4 bg-white text-black'> BUY NOW</button>
                </div>
            </div>

        </div>
    </div>
  )
}
