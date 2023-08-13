import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import {data as ProductsData,Categories} from "../../data"

function FeaturedProducts() {

  const [data,setData] = useState([]); // products data
  const [categores,setCategories] = useState([]); // categories list
  const [ProductsLimit,setLimit] = useState(6);// default products limit to be displayed
  const [currentCategory,setCategory] = useState('all') // for category wise data getting

  useEffect(()=>{
    setCategories(Categories);
  },[])  

  useEffect(()=>{
    if(currentCategory == 'all'){
      setData(()=>{
        return ProductsData.slice(0,ProductsLimit);
      });
    }
    else{
       setData(()=>{
          return ProductsData.filter((item)=>{
            return item.category == currentCategory;
          })
       });
    }
  },[ProductsLimit,currentCategory])

  return (
        <section className="text-gray-600 body-font pt-20 w-full" id="featured_products">
          <h1 className='font-extrabold text-center text-lg sm:text-2xl md:text-3xl my-2'>FEATURED PRODUCTS</h1> 
          <hr className="h-1 w-14 mx-auto my-4 border-0 bg-yellow-700"></hr>
          <p className="text-center text-sm uppercase">Recently Added Items</p> 
  
          <div className="container px-5 md:px-10 lg:px-24 py-24 mx-auto md:flex justify-between items-start">
            <aside className="hidden md:block sticky top-20 left-3 w-[20%]"> {/* categories sidebar */}
              <h1 className="font-bold text-2xl uppercase border-b-2 border-yellow-700 py-4">Categories</h1>
              <ul className="text-left">
                 <li className={`border-b mt-3 ${currentCategory=='all'?'category_active':''} rounded`}>
                     <button className="py-3 px-3 uppercase md:text-[8px] lg:text-sm" onClick={()=>{setCategory('all');setLimit(6);}}>All</button>
                 </li>
                {
                    categores.map((item)=>{
                      return <li key={item} className={`border-b overflow-hidden h-10px ${currentCategory==item?'category_active':''} rounded`}
                                onClick={()=>setCategory(item)} >
                               <button className="py-3 px-3 uppercase text-sm block md:text-[8px] lg:text-sm"  >{item}</button>
                            </li>
                    })
                }
              </ul>
            </aside>

            <div className="flex justify-center flex-wrap md:-m-4 w-full md:w-[80%]">
              {
                data.map((item , index)=>{
                  return ( 
                    <div key={item.id*index} className="box lg:w-1/3 md:w-1/2 p-2 w-[80%] h-[100%] my-7 hover:shadow-md">
                      <Link to={`/product/${item.id}?name=${item.title}`} className="">
                      <div className="block object-cover relative rounded h-[200px]">
                          <img alt="ecommerce" className="mx-auto object-cover object-top h-[200px] w-[150px]" src={item.image} />
                        {/* <button className='button w-full py-1 px-6 bg-yellow-700 text-white '>Add to cart</button> */}
                      </div>
                      <div className="mt-5 mx-auto overflow-hidden text-center lg:w-[80%]">
                        <h3 className="text-gray-900 font-[800] text-[10px] uppercase truncate hover:text-clip">{item.title}</h3>
                        <p className="mt-1 text-blue-500">$ {item.price}</p>
                      </div>
                      </Link>
                    </div>
                  );
                })
            }
              <div className="btn w-[100%] flex justify-center">
                <button className={`py-3 px-12 bg-yellow-700 text-white rounded-md 
                ${currentCategory=='all'?'block':'hidden'}`}
                onClick={()=>setLimit(ProductsLimit+3)}
                >Load More</button>
              </div>
            </div>
          </div>
        </section>
  )
}

export default FeaturedProducts