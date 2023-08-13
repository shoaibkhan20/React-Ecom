export default function Banner() {
  return (
    <div className="Banner w-[100%] h-[70vh] md:h-[100vh]">
        <div className='w-[80%] h-[100%] mx-auto flex flex-col justify-center items-start'>
            <h1 className='text-[#ffffff] text-3xl md:text-5xl leading-snug'> STYLE PICKS BEAT <br /> THE HEAT</h1>
            <a href="#featured_products" className='mt-5 py-1 sm:py-2 px-5 border-4 border-[#ffffff] text-white'>
                 SHOP NOW
            </a>
        </div>
    </div>
  )
}
