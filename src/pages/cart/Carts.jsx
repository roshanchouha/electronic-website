import React from 'react'
import BasicTable from '../../component/material-ui/materialUI'
import { Button} from '../../component/common/button/Button'
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

const Carts = () => {
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
  return (
    <div  className="my-7">  
         <BasicTable tabelData={rows} />
         <div className='flex flex-col gap-3 md:flex-row  justify-center items-center md:items-stretch md:justify-between p-4 bg-gray shadow mt-2 '>
               <div className='flex gap-2 h-10'>
                     <input type="text"  placeholder='Coupon Code' className='border border-[#000000]  p-1 focus:outline-none rounded '/>
                   <button className='text-white bg-secondary p-1 w-32 h-fulll rounded'> Add Coupon</button>
               </div>
               <div className='border border-gray shadow-2xl flex flex-col p-3 rounded w-72'>
                     <p className='text-[18px] font-semibold'>Cart Total</p>
                   <div className=' flex  flex-col   justify-center items-between divide-y  space-y-5  w-full mt-2'>
                      
                       <div className='flex justify-between items-center '> 
                         <p className='text-black text-xs'>Subtotal</p>
                         <p className='text-black text-xs'>$350</p>
                      </div>
                      <div className='flex justify-between items-center '> 
                         <p className='text-black text-xs mt-2'>Shipping</p>
                         <p className='text-black text-xs mt-2'>Free</p>
                      </div>
                      <div className='flex justify-between items-center'> 
                         <p className='text-black text-xs mt-2'>Total</p>
                         <p className='text-black text-xs mt-2'>$356</p>
                      </div>
                   </div>  

                   <button className='border  bg-secondary text-white p-1 rounded mt-4'> Process to checkout</button>                
               </div>
             {/* <button className="py-2 px-5 text-lg font-medium text-[#DB4444] bg-[#fff] hover:bg-black hover:text-[#fff] border border-black rounded">Total: $356</button> */}
         </div>
    </div>
  )
}

export default Carts
