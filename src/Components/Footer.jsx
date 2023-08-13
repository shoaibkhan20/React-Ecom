export default function Footer() {
  return (
    <section className="bg-stone-50 pb-5 pt-14  px-14 h-full sm:w-full">
      <div className="sm:flex items-start flex-wrap text-gray-800">
           <div className="flex flex-col flex-1 footer-links-group">
              <h1 className="font-[600] text-[12px] uppercase mb-5">company info</h1>
              <a href="#">About us</a>
              <a href="#">Latest Posts</a>
              <a href="#">Contact Us</a>
              <a href="#">Shop</a>
           </div> 
           <div className="flex flex-col flex-1 footer-links-group">
              <h1 className="font-[600] text-[12px] uppercase mb-5">Helpful Links</h1>
              <a href="#">Tracking</a>
              <a href="#">Order Status</a>
              <a href="#">Delivery</a>
              <a href="#">Shopping info</a>
              <a href="#">FAQ</a>
           </div> 
           <div className="flex flex-col flex-1 footer-links-group">
              <h1 className="font-[600] text-[12px] uppercase mb-5">Useful Links</h1>
              <a href="#">Special Offers</a>
              <a href="#">Gift Cards</a>
              <a href="#">Advertising</a>
              <a href="#">Terms of use</a>
           </div> 
           <div className="flex flex-col items-start flex-2 basis-[300px]">
              <h1 className="font-[600] text-[12px] uppercase mb-5">get in the know</h1>
              <input type="text" placeholder="Enter Email" className="bg-transparent outline-none border-b-2"/>  
           </div>
      </div>
      <div>
          <footer className="mt-4 text-sm md:text-md border-t text-center">
               Copyrights &copy; all rights reserved
          </footer>
      </div>
    </section>
  )
}
