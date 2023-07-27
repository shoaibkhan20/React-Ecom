import { Link } from "react-router-dom";
import {data} from "../../data"

export default function TopSellersSection() {
  
  const filteredData = data.filter((item)=>{
    return item.rating.rate >= 4.5;
  }).slice(0,4);

  // console.log(filteredData) 
  return (
    <section className="py-10 px-12">
      
        <h1 className='font-extrabold text-center text-3xl my-2'>Top Sellers</h1> 
        <hr className="h-1 w-14 mx-auto my-4 border-0 bg-yellow-700"></hr>
        <p className="text-center text-sm uppercase">Browse our top-selling products</p> 

        <div className="flex justify-between items-center flex-wrap pt-16">
        {
          filteredData.map((item)=>{
            return(
                <div className="flex-1 basis-[250px] md:w-1/4 " key={item.title}>
                  <Link to={`/product/${item.id}?name=${item.title}`} className="grid place-items-center">
                    <div className='object-cover h-auto'>
                      <img src={item.image} alt="" className='object-cover object-top h-[230px] w-[160px]'/>
                    </div>
                    <div className="mt-5 mx-auto overflow-hidden text-center lg:w-[80%]">
                          <h3 className="text-gray-900 font-[800] text-[12px] uppercase truncate hover:text-clip">{item.title}</h3>
                          {/* <h5 className='text-[11px]  border my-2'>Ratings : {item.rating.rate}</h5> */}
                          <p className="mt-1 text-blue-500">$ {item.price}</p>
                    </div>
                  </Link>
                </div>
            )
          })
        }
        </div>

        <div className='grid place-items-center'>
          <button className='mt-5 py-2 px-5 border-2 rounded-md border-yellow-700 text-white text-sm bg-yellow-700'> SHOP NOW</button>
        </div>
        
    </section>
  )
}
