import React, { useState } from 'react'

export default function SelectBar(props) {
  const [activate, setActivate] = useState(false)

  return (
    <div className='border-4 border-violet-600 rounded-md w-3/5 p-3 bg-violet-500 outline-none relative' 
      onMouseEnter={()=>{ setActivate(true) }}
      onMouseLeave={()=>{ setActivate(false) }}>
      <div>Select a Stock</div>
      {
        activate &&
      <div className='transition-all ease-in-out w-full bg-violet-500 outline-none absolute rounded-md m-0 left-0 overflow-auto duration-300 z-50' style={{ maxHeight : '50vh' }}>
        {
          props.stockList ? 
          props.stockList.map(el => 
            <div onClick={()=>{ props.setSelectedStock(el) }} className='p-8 flex text-left hover:bg-white hover:text-violet-600 hover:rounded-md m-1' >
              {el.stockName}
            </div>
          )
          :
          <p>Loading...</p>
        }
        
      </div>
      }
    </div>    
  )
}
