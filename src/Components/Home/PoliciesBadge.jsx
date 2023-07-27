import support from '../../assets/images/support.png'
import shipping from '../../assets/images/shipping.png'
import returnpolicy from '../../assets/images/return.png'
import securedpayment from '../../assets/images/securedpayment.png'

export default function PoliciesBadge() {
  return (
    <>
        <section className='px-12 my-20 py-10 bg-stone-50'>

                <div className='flex flex-wrap w-auto'>

                        <div className=' lg:w-1/4 md:w-1/2 w-full flex items-start justify-center'>
                            <div>
                              <img src={shipping} alt="icon 24/7" width={25} height={25} className='mx-10'/>
                            </div>
                            <div>
                                <h4 className='text-[12px] font-[800] uppercase mx-2'>free shipping</h4>
                                <p className='text-sm m-2'>Enjoy free shipping on all orders above 100$</p>
                            </div>
                        </div>
                        <div className='lg:w-1/4 md:w-1/2 w-full flex items-start justify-center'>
                            <div>
                              <img src={support} alt="icon 24/7" width={25} height={25} className='mx-10'/>
                            </div>
                            <div>
                                <h4 className='text-[12px] font-[800] uppercase mx-2'>support 24/7</h4>
                                <p className='text-sm m-2'>Pur support team is there to help you for queries.</p>
                            </div>
                        </div>
                        <div className='lg:w-1/4 md:w-1/2 w-full flex items-start justify-center'>
                            <div>
                              <img src={returnpolicy} alt="icon 24/7" width={25} height={25} className='mx-10'/>
                            </div>
                            <div>
                                <h4 className='text-[12px] font-[800] uppercase mx-2'>30 days return</h4>
                                <p className='text-sm m-2'>Simpley return it within 30 days for an exchange.</p>
                            </div>
                        </div>
                        <div className='lg:w-1/4 md:w-1/2 w-full flex items-start justify-center'>
                            <div>
                              <img src={securedpayment} alt="icon 24/7" width={25} height={25} className='mx-10'/>
                            </div>
                            <div>
                                <h4 className='text-[12px] font-[800] uppercase mx-2'>100% payment secure</h4>
                                <p className='text-sm m-2'>our payments are secured with 256 bit encryption.</p>
                            </div>
                        </div>
                           
                </div>

        </section>
    </>
  )
}
