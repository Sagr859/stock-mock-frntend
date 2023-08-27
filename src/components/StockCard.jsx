import React from 'react'

export default function StockCard(props) {

  return (
    <div className='flex flex-row items-center justify-between bg-sky-900 rounded-md m-4 p-4 w-full text-white cursor-pointer' 
        onClick={()=>{ props.setSelectedStock(props.stock) }}>
        <div className='font-bold text-lg w-1/3 text-left'>{props.stock.stockName}</div>
        <div className={`transition-all ease-in-out grid place-items-center object-cover h-10 w-10
             ${props.stock.priceExc < 0 ? 'text-red-600' : 'text-green-400 rotate-180'} duration-300`}>
            <svg fill="currentColor" className='bg-white p-1 rounded-full' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 16q0-3.232 1.28-6.208t3.392-5.12 5.12-3.392 6.208-1.28q3.264 0 6.24 1.28t5.088 3.392 3.392 5.12 1.28 6.208q0 3.264-1.28 6.208t-3.392 5.12-5.12 3.424-6.208 1.248-6.208-1.248-5.12-3.424-3.392-5.12-1.28-6.208zM4 16q0 3.264 1.6 6.048t4.384 4.352 6.016 1.6 6.016-1.6 4.384-4.352 1.6-6.048-1.6-6.016-4.384-4.352-6.016-1.632-6.016 1.632-4.384 4.352-1.6 6.016zM10.048 18.4q-0.128-0.576 0.096-1.152t0.736-0.896 1.12-0.352h2.016v-5.984q0-0.832 0.576-1.408t1.408-0.608 1.408 0.608 0.608 1.408v5.984h1.984q0.608 0 1.12 0.352t0.736 0.896q0.224 0.576 0.096 1.152t-0.544 1.024l-4 4q-0.576 0.576-1.408 0.576t-1.408-0.576l-4-4q-0.448-0.416-0.544-1.024z"></path>
            </svg>
        </div>
        <div className='flex flex-row items-center justify-between w-2/5 text-white font-semibold'>
            <div className='flex flex-row items-center justify-between w-2/3 p-4 bg-sky-800 rounded-md'>
                <div>$ {props.stock.price}</div>
                <div>$ {props.stock.currPrice}</div>    
            </div>
            <div className='w-1/3'>
                {props.stock.priceExc}    
            </div>    
        </div>
    </div>
  )
}
