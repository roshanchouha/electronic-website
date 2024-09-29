import React from 'react'
import game from '../../assets/images/product/videoGame.png';
import { Button } from '../../component/common/button/Button';

const CheckOut = () => {
  return (
    <div className='my-8 '>
       <div className='my-8'>
         <p className='text-[12px]  text-[#a9a7a7]'> Account / My Account / Product / View Cart /  <span className='text-black'>CheckOut</span></p>
       </div>
       <div className=' p-3'>
           <h1 className='text-xl font-semibold mx-10'>Billing Details</h1>
           <div className='flex justify-between items-center gap-3 mx-10 ' >
               <div className=' my-3 w-2/4  p-4 shadow '>
               <form className=' space-y-2'>
                <div className='flex flex-col gap-3 '>
                  <label className='text-[14px] font-medium text-[#787676]'>Name</label>
                  <input type='text' className='border border-gray bg-gray p-1 focus:outline-none rounded' />
                </div>
                <div className='flex flex-col gap-3'>
                  <label className='text-[14px] font-medium text-[#787676]'>Company Name</label>
                  <input type='text' className='border border-gray bg-gray p-1 focus:outline-none rounded' />
                </div>
                <div className='flex flex-col gap-3'>
                  <label className='text-[14px] font-medium text-[#787676]'>Street Address</label>
                  <input type='email' className='border border-gray bg-gray p-1 focus:outline-none rounded' />
                </div>
                <div className='flex flex-col gap-3'>
                  <label className='text-[14px] font-medium text-[#787676]'>Apartment,floor,etc (optional)</label>
                  <input type='email' className='border border-gray bg-gray p-1 focus:outline-none rounded' />
                </div> <div className='flex flex-col gap-3'>
                  <label className='text-[14px] font-medium text-[#787676]'>Town/City</label>
                  <input type='email' className='border border-gray bg-gray p-1 focus:outline-none rounded' />
                </div> <div className='flex flex-col gap-3'>
                  <label className='text-[14px] font-medium text-[#787676]'>Phone Number</label>
                  <input type='email' className='border border-gray bg-gray p-1 focus:outline-none rounded' />
                </div> <div className='flex flex-col gap-3'>
                  <label className='text-[14px] font-medium text-[#787676]'>Email Address</label>
                  <input type='email' className='border border-gray bg-gray p-1 focus:outline-none rounded' />
                </div>
                 
              </form>
               </div>
               <div className='rounded w-2/5 p-4 shadow'>
                  <div className=' flex flex-col gap-3'>
                    <div className='flex justify-between items-center '>
                          <div  className=' flex justify-center  items-center  gap-3'>
                             <img src={game} alt="" width="40px" height="20px" />
                             <p className='text-xs font-semibold'>LCD Monitor</p>
                          </div> 
                          <div>
                              <p className='text-xs  font-semibold'>$123</p>
                          </div> 
                    </div>
                    <div className='flex justify-between items-center '>
                          <div  className=' flex justify-center  items-center  gap-3'>
                             <img src={game} alt="" width="40px" height="20px" />
                             <p className='text-xs font-semibold'>LCD Monitor</p>
                          </div> 
                          <div>
                              <p className='text-xs  font-semibold'>$123</p>
                          </div> 
                    </div>
                    <div className=' flex  flex-col   justify-center items-between divide-y  space-y-5  w-full mt-4'>
                      
                       <div className='flex justify-between items-center '> 
                         <p className='text-black text-[16px]'>Subtotal</p>
                         <p className='text-black text-[16px]'>$36786</p>
                      </div>
                      <div className='flex justify-between items-center '> 
                         <p className='text-black text-[16px] mt-2'>Shipping</p>
                         <p className='text-black text-[16px] mt-2'>Free</p>
                      </div>
                      <div className='flex justify-between items-center'> 
                         <p className='text-black text-[16px] mt-2'>Total</p>
                         <p className='text-black text-[16px] mt-2'>$356</p>
                      </div>
                   </div>
                   <div className='flex justify-between h-10 mt-5'>
                     <input type="text"  placeholder='Coupon Code' className='border border-[#000000]  p-1 focus:outline-none rounded '/>
                     <button className='text-white bg-secondary p-1 w-32 h-full rounded'> Add Coupon</button>
                   </div>  
                   <div className='mt-8'>
                   <button className='text-white bg-secondary p-1 w-32 h-full rounded'> Place Order</button>
 
                   </div>
                  </div>
               </div>
           </div>
           <div className='flex  gap-2'>
                    <input type="checkbox"  className=' accent-secondary'/>
                    <p className='text-[12px] text-[#787676]'>Save this information for faster check-out next time</p>
                </div>
       </div>
    </div>
  )
}

export default CheckOut
